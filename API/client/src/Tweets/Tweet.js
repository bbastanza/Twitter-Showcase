import React from "react";
import TwitterThumbnail from "./../Images/twitter_thumbnail.png";
import tweetBg from "./../Images/tweet-bg.png";

export default function Tweet({ tweetData }) {
    const backgroundImage = {
        backgroundImage: `url(${tweetBg})`,
    };

    const sentFrom =
        tweetData.source ===
        '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>'
            ? "Sent from iPhone"
            : "Sent from Android";

    return (
        <div className="tweet col-12" style={backgroundImage}>
            <div className="row">
                {/* <img
                    src={tweetData.user.profile_image_url_https}
                    style={{ paddingLeft: 10, borderRadius: "50%" }}
                    alt="thumbnail"
                ></img> */}

                {/* <h4 className="col-lg-4">{tweetData.user.name}</h4> */}
                <h4 className="col-lg-4"></h4>
                <h5 className="col-lg-4 username"></h5>
                {/* <h5 className="col-lg-4 username">@{tweetData.user.screen_name}</h5> */}
                <h6 className="col-lg-2">{tweetData.created_at.substring(4, 16)}</h6>

                <img
                    src={TwitterThumbnail}
                    style={{ maxWidth: 50, maxHeight: 50, paddingLeft: 10, paddingBottom: 10, float: "right" }}
                    alt="thumbnail"
                ></img>
            </div>
            <div className="tweet-text" style={{ padding: 10 }}>
                <blockquote style={{ marginLeft: 80 }}>{tweetData.text}</blockquote>
            </div>
            <div>
                <div className="row">
                    <div className="row col-8">
                        {" "}
                        <span role="img" aria-label="like" className="col-2">
                            💗 {tweetData.favorite_count}
                        </span>
                        <span role="img" aria-label="retweet" className="col-2">
                            🔄 {tweetData.retweet_count}
                        </span>
                        <h6>{sentFrom}</h6>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
