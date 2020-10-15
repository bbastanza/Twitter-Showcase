import React, { useState, useEffect } from "react";
import TweetCard from "../IndividualComponents/TweetCard";
import ErrorCard from "./../IndividualComponents/ErrorCard";
import parseSearchTerm from "./../helpers/ParseSearchTerm";
import axios from "axios";
import qs from "qs";

export default function Search(props) {
    const [textBoxValue, setTextBoxValue] = useState("");
    const [banner, setBanner] = useState("");
    const [tweetData, setTweetData] = useState([]);
    const [tweetComponents, setTweetComponents] = useState([]);
    const [errorCard, setErrorCard] = useState([]);
    const [searchMention, setSearchMention] = useState("");

    useEffect(() => {
        if (props.location.search !== "") {
            const searchTerm = qs.parse(props.location.search, { ignoreQueryPrefix: true });
            searchTerm.q = parseSearchTerm(searchTerm.q);
            setSearchMention(searchTerm.q);
        }
    });

    useEffect(() => {
        if (searchMention !== "") getTweets(searchMention, "user");
    }, [searchMention]);

    useEffect(() => {
        createTweets();
    }, [tweetData]);

    async function getTweets(searchItem, type) {
        try {
            let responseData;
            switch (type) {
                case "user":
                    responseData = await axios
                        .get(`https://localhost:5001/tweets/user/${searchItem.split(" ").join("")}`)
                        .then(response => response.data);
                    evaluateResponse(responseData);
                    break;
                default:
                    responseData = await axios
                        .get(`https://localhost:5001/tweets/content/${searchItem.split(" ").join("")}`)
                        .then(response => response.data);
                    evaluateResponse(responseData);
                    break;
            }
        } catch {
            emptyDataErrorCard();
        }
    }

    function evaluateResponse(responseData) {
        if ("error" in responseData) createErrorCard(responseData);
        else if ("statuses" in responseData && responseData.statuses.length === 0) emptyDataErrorCard();
        else if ("statuses" in responseData) setTweetData([...responseData.statuses]);
        else setTweetData([...responseData]);
    }

    function emptyDataErrorCard() {
        const emptyData = {
            error: "There was a problem recieving tweets",
            hint: "Hint: You may be searching for something that doesn't exit or has a funny character :)",
        };
        createErrorCard(emptyData);
    }

    function createErrorCard(responseData) {
        setTweetComponents([]);
        const key = Math.random();
        setErrorCard([<ErrorCard key={key} error={responseData} />]);
    }

    function createTweets() {
        setErrorCard([]);
        if (tweetData.length !== 0) {
            let newTweetComponents = tweetData.map(tweet => {
                return <TweetCard search={getTweets} tweetData={tweet} key={tweet.id} />;
            });
            setTweetComponents([...newTweetComponents]);
        }
    }

    function pressedSearch(e, type) {
        e.preventDefault();
        setBanner(textBoxValue);
        getTweets(textBoxValue, type);
        setTextBoxValue("");
    }

    return (
        <div style={{ textAlign: "center", justifyContent: "left", width: "100vw" }} className="row">
            <div className="col-lg-5 col-md-12 row" style={{ padding: "80px 0 0 100px ", justifyContent: "center" }}>
                <form className="justify-content-center">
                    <input
                        className="searchbar"
                        style={{ textAlign: "center", width: "30vw" }}
                        onChange={e => setTextBoxValue(e.target.value)}
                        type="text"
                        placeholder="Search Twitter"
                        value={textBoxValue}
                    />
                    <button
                        onClick={e => pressedSearch(e, "content")}
                        className="btn btn-info link searchbar"
                        style={{ padding: "5px 20px", margin: 5 }}
                    >
                        Search by Content
                    </button>
                    <button
                        onClick={e => pressedSearch(e, "user")}
                        className="btn btn-info link searchbar"
                        style={{ padding: "5px 20px", margin: 5 }}
                    >
                        Search by Screen Name
                    </button>

                    <h1 className="col-6 individual-h2" style={{ margin: "30px auto" }}>
                        {banner}
                    </h1>
                </form>
            </div>
            <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>
                {errorCard}
                {tweetComponents}
            </div>
        </div>
    );
}
