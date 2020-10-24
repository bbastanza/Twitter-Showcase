import React, { useState } from "react";
import ShowcaseCard from "./../IndividualComponents/ShowcaseCard";
import ErrorCard from "./../IndividualComponents/ErrorCard";
import axios from "axios";
import TweetCard from "../IndividualComponents/TweetCard";
import neilImage from "./../Images/neiltyson.jpg";
import linusTechImage from "./../Images/linustech.jpg";
import yankeeImage from "./../Images/yankees.jpg";
import billGatesImage from "./../Images/billgates.jpg";
import weirdAlImage from "./../Images/alyankovic.jpg";

export default function RandomTweetFeed() {
    const [tweetData, setTweetData] = useState([]);
    const [currentUser, setCurrentUser] = useState("");
    const [tweetIndex, setTweetIndex] = useState(0);
    const [isError, setIsError] = useState(false);
    const [errorData, setErrorData] = useState("");

    async function getTweets(user) {
        try {
            const response = await axios.get(`tweets/showcase/${user}`);
            setIsError(false);
            setTweetData([...response.data]);
        } catch (error) {
            setTweetData([]);
            setErrorData(error.response.data ? error.response.data : "");
            setIsError(true);
        }
    }

    function handleClick(user) {
        if (user !== currentUser || tweetData === []) {
            setCurrentUser(user);
            getTweets(user);
        } else randomTweetIndex();
    }

    function randomTweetIndex() {
        setTweetIndex(Math.floor(Math.random() * tweetData.length));
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
                    screenName="billgates"
                    name="Bill Gates"
                    image={billGatesImage}
                />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="Yankees"
                    name="New York Yankees"
                    image={yankeeImage}
                />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="LinusTech"
                    name="Linus Tech Tips"
                    image={linusTechImage}
                />
                <ShowcaseCard
                    handleClick={handleClick}
                    screenName="alyankovic"
                    name='"Weird Al" Yankovic'
                    image={weirdAlImage}
                />
            </div>
            <div className="col-lg-6 col-md-12" style={{ marginTop: 60 }}>
                {isError ? <ErrorCard error={errorData} /> : null}
                {tweetData.length > 0 ? <TweetCard search={handleClick} tweetData={tweetData[tweetIndex]} /> : null}
            </div>
        </div>
    );
}
