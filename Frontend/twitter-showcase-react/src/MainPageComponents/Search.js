import React, { useState } from "react";
import Tweet from "./../Tweets/Tweet";
import mockDataJSON from "./../Tweets/mockdata.json";

export default function Search() {
    const [textBoxValue, setTextBoxValue] = useState("");
    const [tweetData, setTweetData] = useState(mockDataJSON);

    function pressedSubmit(e) {
        e.preventDefault();
        if (textBoxValue !== "") {
            console.log(`${textBoxValue} sent to API`);
            setTextBoxValue("");
        }
    }

    return (
        <div style={{ textAlign: "center", justifyContent: "left", width: "100vw" }} className="row">
            <div className="col-lg-5 col-md-12 row" style={{ padding: "80px 0 0 100px ", justifyContent: "center" }}>
                <form onSubmit={pressedSubmit}>
                    <input
                        className="searchbar"
                        style={{ textAlign: "center", width: "30vw" }}
                        onChange={e => setTextBoxValue(e.target.value)}
                        type="text"
                        placeholder="Enter Person or Tweet"
                        value={textBoxValue}
                    />
                    <button
                        className="btn btn-info link searchbar"
                        style={{ color: "#ffe6bc", padding: "5px 20px", margin: 5 }}
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>
                <Tweet tweetData={tweetData} resultNumber={0} />
                <Tweet tweetData={tweetData} resultNumber={1} />
                <Tweet tweetData={tweetData} resultNumber={2} />
                <Tweet tweetData={tweetData} resultNumber={3} />
                <Tweet tweetData={tweetData} resultNumber={4} />
            </div>
        </div>
    );
}
