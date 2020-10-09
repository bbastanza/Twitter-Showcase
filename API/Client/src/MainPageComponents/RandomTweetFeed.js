import React, { useState, useEffect } from "react";
import ShowcaseCard from "./../IndividualComponents/ShowcaseCard";
import ErrorCard from "./../IndividualComponents/ErrorCard";
import axios from "axios";
import Tweet from "./../IndividualComponents/Tweet";
import neilImage from "./../Images/neiltyson.jpg";
import linusTechImage from "./../Images/linustech.jpg";
import yankeeImage from "./../Images/yankees.jpg";
import traversyImage from "./../Images/traversymedia.jpg";
import weirdAlImage from "./../Images/alyankovic.jpg";

export default function RandomTweetFeed() {
    const [tweetData, setTweetData] = useState([]);
    const [tweetComponent, setTweetComponent] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [errorCard, setErrorCard] = useState([]);

    useEffect(() => {
        if (tweetData.length !== 0) makeRandomTweet();
    }, [tweetData]);

    async function getTweets(user) {
        try {
            console.log("showcase search");
            const responseData = await axios
                .get(`https://localhost:5001/tweets/showcase/${user}`)
                .then(response => response.data);
            console.log(responseData);
            evaluateResponse(responseData);
        } catch {
            alert("there was an error fetching data");
        }
    }

    function evaluateResponse(responseData) {
        if ("error" in responseData) createErrorCard(responseData);
        else setTweetData([...responseData]);
    }

    function createErrorCard(responseData) {
        setTweetComponent([]);
        setErrorCard([<ErrorCard key={Math.random()} error={responseData} />]);
    }

    function handleClick(user) {
        setCurrentUser(user);
        if (user !== currentUser || tweetData === []) getTweets(user);
        else makeRandomTweet();
    }

    function makeRandomTweet() {
        setErrorCard([]);
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
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="LinusTech"
                    name="Linus Tech Tips"
                    image={linusTechImage}
                />
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
                {errorCard}
                {tweetComponent}
            </div>
        </div>
    );
}