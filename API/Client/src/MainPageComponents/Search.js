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
    const [errorData, setErrorData] = useState("");
    const [searchMention, setSearchMention] = useState("");
    const emptyData = {
        error: "There was a problem recieving tweets",
        hint:
            "Hint: You may be searching for something that doesn't exit or has a funny character :)",
    };

    useEffect(() => {
        if (props.location.search !== "") {
            const searchTerm = qs.parse(props.location.search, {
                ignoreQueryPrefix: true,
            });
            searchTerm.q = parseSearchTerm(searchTerm.q);
            setSearchMention(searchTerm.q);
        }
    });

    useEffect(() => {
        if (searchMention !== "") getTweets(searchMention, "user");
    }, [searchMention]);

    async function getTweets(searchItem, type) {
        setTweetData([]);
        try {
            let response;
            let responseData;
            switch (type) {
                case "user":
                    response = await axios.get(
                        `tweets/user/${searchItem.split(" ").join("")}`
                    );
                    responseData = response.data;
                    evaluateResponse(responseData);
                    break;
                default:
                    response = await axios.get(
                        `tweets/content/${searchItem.split(" ").join("")}`
                    );
                    responseData = response.data;
                    evaluateResponse(responseData);
                    break;
            }
        } catch {
            setErrorData(emptyData);
        }
    }

    function evaluateResponse(responseData) {
        if ("error" in responseData) {
            setTweetData([]);
            setErrorData(responseData);
        } else if (
            "statuses" in responseData &&
            responseData.statuses.length === 0
        ) {
            setTweetData([]);
            setErrorData(emptyData);
        } else if ("statuses" in responseData) {
            setErrorData("");
            setTweetData([...responseData.statuses]);
        } else {
            setErrorData("");
            setTweetData([]);
            setTweetData([...responseData]);
        }
    }

    function pressedSearch(e, type) {
        e.preventDefault();
        setBanner(textBoxValue);
        getTweets(textBoxValue, type);
        setTextBoxValue("");
    }

    return (
        <div
            style={{
                textAlign: "center",
                justifyContent: "left",
                width: "100vw",
            }}
            className="row"
        >
            <div
                className="col-lg-6 col-md-12 row"
                style={{
                    padding: "80px 0 0 40px ",
                    justifyContent: "center",
                    width: "auto",
                }}
            >
                <form className="justify-content-center">
                    <input
                        className="searchbar"
                        style={{ textAlign: "center", width: 300 }}
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

                    <h1 className="individual-h2">{banner}</h1>
                </form>
            </div>
            <div
                className="col-lg-5 col-md-12"
                style={{
                    marginTop: 60,
                    minWidth: 370,
                    textAlign: "center",
                    maxWidth: "95%",
                }}
            >
                {errorData !== "" ? <ErrorCard error={errorData} /> : null}
                {tweetData.length !== 0
                    ? tweetData.map(tweet => {
                          return (
                              <TweetCard
                                  search={getTweets}
                                  tweetData={tweet}
                                  key={tweet.id}
                              />
                          );
                      })
                    : null}
            </div>
        </div>
    );
}
