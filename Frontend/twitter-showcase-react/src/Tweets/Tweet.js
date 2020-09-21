import React from "react";
import Thumbnail from "./../Images/s-l64.jpg";
import TwitterThumbnail from "./../Images/twitter_thumbnail.png";

export default function Tweet() {
    let tweet =
        "Here's a text of one hundered and twenty characters. Another thirty characters and I will be there. I am going to put one more sentence in to see where I am . I am trying to replicate the absolute limit to how many characters can be caputred in a single tweet.";
    let likeCount = 27;
    let commentCount = 8;
    let retweetCount = 19;

    return (
        <div className="tweet col-12">
            <div className="row">
                <img src={Thumbnail} style={{ paddingLeft: 10 }} alt="thumbnail"></img>
                <h4 className="col-lg-8">Brian Bastanza</h4>

                <h5 className="col-lg-2 username">@stanzu_10</h5>
                <img
                    src={TwitterThumbnail}
                    style={{ maxWidth: 40, maxHeight: 40, paddingLeft: 10, paddingBottom: 10 }}
                    alt="thumbnail"
                ></img>
            </div>
            <div className="tweet-text" style={{ padding: 10 }}>
                <p>{tweet}</p>
            </div>
            <div>
                <div className="row">
                    <div className="row col-8">
                        {" "}
                        <span role="img" aria-label="like" className="col-2">
                            💗 {likeCount}
                        </span>
                        <span role="img" aria-label="comment" className="col-2">
                            🗨️ {commentCount}
                        </span>
                        <span role="img" aria-label="retweet" className="col-2">
                            🔄 {retweetCount}
                        </span>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
