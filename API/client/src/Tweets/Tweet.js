import React from "react";
import TwitterThumbnail from "./../Images/twitter_thumbnail.png";
import tweetBg from "./../Images/tweet-bg.png";
import verifiedImage from "./../Images/verified.png";
import getSource from "../helpers/GetSource";
import Search from "../MainPageComponents/Search";

export default function Tweet({ tweetData, search }) {
    const verified = tweetData.user.verified ? (
        <img src={verifiedImage} alt="verified" style={{ height: 20, width: 20 }}></img>
    ) : (
        ""
    );
    console.log(tweetData);
    const source = getSource(tweetData.source);
    function handleSearch(name, type) {
        search(name, type);
    }

    return (
        <div className="tweet col-12" style={{ backgroundImage: `url(${tweetBg})` }}>
            <div className="row">
                <img
                    src={tweetData.user.profileImageUrlHttps}
                    style={{ paddingLeft: 10, borderRadius: "50%" }}
                    alt="thumbnail"
                ></img>

                <h4 className="col-lg-4">
                    {tweetData.user.name} {verified}
                </h4>
                <h5
                    className="col-lg-4 username"
                    style={{ cursor: "pointer" }}
                    onClick={() => search(tweetData.user.screenName, "user")}
                >
                    @{tweetData.user.screenName}
                </h5>
                <h6 className="col-lg-2">{tweetData.date.substring(4, 16)}</h6>

                <img
                    src={TwitterThumbnail}
                    style={{ maxWidth: 50, maxHeight: 50, paddingLeft: 10, paddingBottom: 10, float: "right" }}
                    alt="thumbnail"
                ></img>
            </div>
            <div className="tweet-text">
                <div dangerouslySetInnerHTML={{ __html: tweetData.formattedText }}></div>
            </div>

            <div>
                <div className="row">
                    <div className="row col-8">
                        <span role="img" aria-label="like" className="col-2">
                            💗 {tweetData.likeCount}
                        </span>
                        <span role="img" aria-label="retweet" className="col-2">
                            🔄 {tweetData.retweetCount}
                        </span>
                        <h6 className="username col-7" style={{ textAlign: "right" }}>
                            {source}
                        </h6>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
