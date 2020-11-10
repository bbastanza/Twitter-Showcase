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
    const profileImageFormatted = profileImageRaw.replace(/normal/, "400x400");

    function handleImageError(e) {
        e.target.src = e.target.src !== profileImageRaw ? profileImageRaw : null;
    }

    return (
        <div
            className="tweet col-12"
            style={{
                backgroundImage: `url(${tweetBg})`,
                textAlign: "left",
            }}>
            <div className="row">
                <img
                    src={profileImageFormatted}
                    onError={e => handleImageError(e)}
                    style={{
                        paddingLeft: 10,
                        borderRadius: "50%",
                        width: 80,
                    }}
                    alt="thumbnail"></img>
                <h5 className="col-4">
                    {tweetData.user.name} {verified}
                </h5>
                <p className="screen-name col-4" onClick={() => search(tweetData.user.screenName, "user")}>
                    @{tweetData.user.screenName}
                </p>
                <p className="col-2" style={{ textAlign: "center" }}>
                    {tweetData.date.substring(4, 16)}
                </p>
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
                    alt="thumbnail"></img>
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
                <div className="row" style={{ textAlign: "center" }}>
                    <div className="row col-12">
                        <span role="img" aria-label="like" className="col-4">
                            💗 {tweetData.likeCount}
                        </span>
                        <span role="img" aria-label="retweet" className="col-4">
                            🔄 {tweetData.retweetCount}
                        </span>
                        <h6 className="source col-4" style={{ textAlign: "right" }}>
                            {source}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    );
}
