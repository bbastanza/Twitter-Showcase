import React, { useState, useEffect } from "react";
import Tweet from "../IndividualComponents/Tweet";
import axios from "axios";

export default function Search() {
    const [textBoxValue, setTextBoxValue] = useState("");
    const [banner, setBanner] = useState("");
    const [tweetData, setTweetData] = useState([]);
    const [tweetComponents, setTweetComponents] = useState([]);

    useEffect(() => {
        createTweets();
    }, [tweetData]);

    async function getTweets(searchItem, type) {
        try {
            let tweetsRecieved;
            switch (type) {
                case "user":
                    console.log("user search");
                    tweetsRecieved = await axios
                        .get(`https://localhost:5001/tweets/user/${searchItem.split(" ").join("")}`)
                        .then(response => response.data);
                    setTweetData([...tweetsRecieved]);
                    break;
                default:
                    console.log("content search");
                    tweetsRecieved = await axios
                        .get(`https://localhost:5001/tweets/content/${searchItem.split(" ").join("")}`)
                        .then(response => response.data);
                    setTweetData([...tweetsRecieved.statuses]);
                    break;
            }
        } catch {
            console.log("there was an error fetching data");
        }
    }

    function createTweets() {
        let newTweetComponents = tweetData.map(tweet => {
            return <Tweet search={getTweets} tweetData={tweet} key={tweet.id} />;
        });
        setTweetComponents([...newTweetComponents]);
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
                        placeholder="Enter Person or Tweet"
                        value={textBoxValue}
                    />
                    <button
                        onClick={e => pressedSearch(e, "user")}
                        className="btn btn-info link searchbar"
                        style={{ padding: "5px 20px", margin: 5 }}
                    >
                        Search by Screen Name
                    </button>
                    <button
                        onClick={e => pressedSearch(e, "content")}
                        className="btn btn-info link searchbar"
                        style={{ padding: "5px 20px", margin: 5 }}
                    >
                        Search by Content
                    </button>
                    <h1 className="col-6 individual-h2" style={{ margin: "30px auto" }}>
                        {banner}
                    </h1>
                </form>
            </div>
            <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>
                {tweetComponents}
            </div>
        </div>
    );
}
