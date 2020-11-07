import React from "react";
import ReactHtmlParser from "react-html-parser";
import TwitterThumbnail from "./../Images/twitter_thumbnail.png";
import tweetBg from "./../Images/tweet-bg.png";
import getSource from "../helpers/GetSource";
import getImageUrl from "../helpers/GetImageUrl";
import checkVerified from "../helpers/CheckVerified";

export default function TweetCard({ tweetData, search }) {
    const embedImageUrl = getImageUrl(tweetData);
    const verified = checkVerified(tweetData.user.verified);
    const source = getSource(tweetData.source);
    const profileImageRaw = tweetData.user.profileImageUrlHttps;
    const profileImageFormatted =
        profileImageRaw.substring(0, profileImageRaw.indexOf("normal")) +
        "400x400.jpg";

    return (
        <div
            className="tweet col-12"
            style={{ backgroundImage: `url(${tweetBg})`, maxWidth: "90%" }}
        >
            <div className="row">
                <img
                    src={profileImageFormatted}
                    style={{
                        paddingLeft: 10,
                        borderRadius: "50%",
                        minWidth: 60,
                        maxWidth: 100,
                    }}
                    alt="thumbnail"
                ></img>
                <h4 className="col-4">
                    {tweetData.user.name} {verified}
                </h4>
                <h5
                    className="screen-name col-2"
                    onClick={() => search(tweetData.user.screenName, "user")}
                >
                    @{tweetData.user.screenName}
                </h5>
                <h6 className="col-4" style={{ textAlign: "center" }}>
                    {tweetData.date.substring(4, 16)}
                </h6>
            </div>

            <div className="tweet-text">
                <img
                    src={TwitterThumbnail}
                    style={{
                        maxWidth: 50,
                        maxHeight: 50,
                        paddingLeft: 10,
                        paddingBottom: 10,
                        float: "right",
                    }}
                    alt="thumbnail"
                ></img>
                {ReactHtmlParser(tweetData.formattedText)}
            </div>
            <img
                style={{
                    padding: "0 0 30px",
                    maxHeight: 300,
                    width: "auto",
                    height: "auto",
                    borderRadius: 20,
                }}
                className="col-7 offset-2"
                src={embedImageUrl}
                alt=""
            />
            <div>
                <div className="row">
                    <div className="row col-8">
                        <span role="img" aria-label="like" className="col-3">
                            💗 {tweetData.likeCount}
                        </span>
                        <span role="img" aria-label="retweet" className="col-3">
                            🔄 {tweetData.retweetCount}
                        </span>
                        <h6
                            className="source col-5"
                            style={{ textAlign: "right" }}
                        >
                            {source}
                        </h6>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
