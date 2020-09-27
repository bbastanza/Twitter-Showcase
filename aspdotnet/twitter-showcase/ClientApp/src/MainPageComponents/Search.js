import React, { useState } from "react";
import Tweet from "./../Tweets/Tweet";
import mockDataJSON from "./../Tweets/mockdata.json";

export default function Search() {
    const [textBoxValue, setTextBoxValue] = useState("");
    const [banner, setBanner] = useState("");
    const [tweetData, setTweetData] = useState(mockDataJSON);

    function pressedSubmit(e) {
        e.preventDefault();
        setBanner(textBoxValue);
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
                    <button className="btn btn-info link searchbar" style={{ padding: "5px 20px", margin: 5 }}>
                        Search
                    </button>
                    <h1 className="col-6 individual-h2" style={{ margin: "30px auto" }}>
                        {banner}
                    </h1>
                </form>
            </div>
            <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>
                <Tweet tweetData={tweetData} resultNumber={0} />
                <Tweet tweetData={tweetData} resultNumber={1} />
                <Tweet tweetData={tweetData} resultNumber={2} />
                <Tweet tweetData={tweetData} resultNumber={3} />
                <Tweet tweetData={tweetData} resultNumber={4} />
                <Tweet tweetData={tweetData} resultNumber={5} />
                <Tweet tweetData={tweetData} resultNumber={6} />
                <Tweet tweetData={tweetData} resultNumber={7} />
                <Tweet tweetData={tweetData} resultNumber={8} />
                <Tweet tweetData={tweetData} resultNumber={9} />
            </div>
        </div>
    );
}
