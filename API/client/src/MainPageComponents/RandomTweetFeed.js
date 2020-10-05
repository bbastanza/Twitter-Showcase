import React, { useState } from "react";
import ShowcaseCard from "./../IndividualComponents/ShowcaseCard";
import axios from "axios";
import Tweet from "./../IndividualComponents/Tweet";
import neilImage from "./../Images/neiltyson.jpg";
import garyImage from "./../Images/garyvee.jpg";
import yankeeImage from "./../Images/yankees.jpg";
import traversyImage from "./../Images/traversymedia.jpg";
import weirdAlImage from "./../Images/alyankovic.jpg";

export default function RandomTweetFeed() {
    const [tweetData, setTweetData] = useState([]);
    const [tweetComponent, setTweetComponent] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [banner, setBanner] = useState("");

    async function getTweets(user) {
        try {
            console.log("showcase search");
            const tweetsRecieved = await axios
                .get(`https://localhost:5001/tweets/showcase/${user}`)
                .then(response => response.data);
            await setTweetData([...tweetsRecieved]);
            makeRandomTweet();
        } catch {
            console.log("there was an error fetching data");
        }
    }

    function handleClick(user) {
        if (user !== currentUser || tweetData === []) {
            setCurrentUser(user);
            getTweets(user);
        } else {
            setCurrentUser(user);
            makeRandomTweet();
        }
    }

    function makeRandomTweet() {
        const index = Math.floor(Math.random() * tweetData.length);
        const randomTweet = <Tweet search={makeRandomTweet} tweetData={tweetData[index]} key={tweetData[index].id} />;
        setTweetComponent([randomTweet]);
    }

    return (
        <div className="row" style={{ textAlign: "center", justifyContent: "left", width: "100vw" }}>
            <div className="col-lg-5 col-md-12" style={{ margin: "0 0 0 100px", justifyContent: "space-around" }}>
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="neiltyson"
                    name="Neil deGrasse Tyson"
                    image={neilImage}
                />
                <ShowcaseCard handleClick={handleClick} screenName="garyvee" name="Gary Vaynerchuk" image={garyImage} />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="Yankees"
                    name="New York Yankees"
                    image={yankeeImage}
                />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="traversymedia"
                    name="Brad Traversy"
                    image={traversyImage}
                />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="alyankovic"
                    name='"Weird Al" Yankovic'
                    image={weirdAlImage}
                />
            </div>
            <div className="col-lg-6 col-md-12" style={{ marginTop: 60 }}>
                <h1>{banner}</h1>
                {tweetComponent}
            </div>
        </div>
    );
}
