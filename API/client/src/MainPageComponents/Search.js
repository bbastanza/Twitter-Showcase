import React, { useState, useEffect } from "react";
import Tweet from "./../Tweets/Tweet";
import axios from "axios"

export default function Search() {
    const [textBoxValue, setTextBoxValue] = useState("");
    const [banner, setBanner] = useState("");
    const [tweetData, setTweetData] = useState([]);
    const [tweetComponents, setTweetComponents] = useState([])
//comment
    useEffect(()=>{
        createTweets()
    }, [tweetData])

    function thiones(){
        console.log("object")
    }

    async function getTweets(){
        const tweetsRecieved = await axios.get("https://localhost:5001/tweets").then(response => response.data)
        setTweetData([...tweetsRecieved])
    }

    function createTweets(){
        let newTweetComponents = tweetData.map(tweet =>{
            return <Tweet tweetData={tweet} key={tweet.id}/>
        })
        setTweetComponents([...newTweetComponents])
    }

    function pressedSubmit(e) {
        getTweets()
        e.preventDefault();
        setBanner(textBoxValue);
        if (textBoxValue !== "") {
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
            {tweetComponents}
            </div>
        </div>
    );
}
