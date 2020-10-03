import React from "react";
import TwitterThumbnail from "./../Images/twitter_thumbnail.png";
import tweetBg from "./../Images/tweet-bg.png";
import verifiedImage from "./../Images/verified.png";

export default function Tweet({ tweetData }) {
    const verified = tweetData.user.verified ? (
        <img src={verifiedImage} alt="verified" style={{ height: 20, width: 20 }}></img>
    ) : (
        ""
    );
    console.log(tweetData);
    let sentFrom;
    switch (tweetData.source) {
        case '<a href="http://twitter.com/download/iphone" rel="nofollow">Twitter for iPhone</a>':
            sentFrom = "Sent from iPhone";
            break;
        case '<a href="https://mobile.twitter.com" rel="nofollow">Twitter Web App</a>':
            sentFrom = "Sent from Web App";
            break;
        default:
            sentFrom = "Sent from Android";
            break;
    }

    if (tweetData.text.includes("&amp;")) tweetData.text = tweetData.text.replace("&amp;", "&");

    // if (tweetData.entities.urls[0]) {
    //     if (tweetData.text.includes(tweetData.entities.urls[0].url))
    //         tweetData.paragraph = (
    //             <p className="tweet-text">
    //                 {tweetData.text.substring(0, tweetData.text.indexOf(tweetData.entities.urls[0].url))}
    //                 <a href={tweetData.entities.urls[0].url} target="_blank">
    //                     -link
    //                 </a>
    //             </p>
    //         );
    // } else {
    //     tweetData.paragraph = <p className="tweet-text">{tweetData.text}</p>;
    // }

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
                <h5 className="col-lg-4 username">@{tweetData.user.screenName}</h5>
                <h6 className="col-lg-2">{tweetData.date.substring(4, 16)}</h6>

                <img
                    src={TwitterThumbnail}
                    style={{ maxWidth: 50, maxHeight: 50, paddingLeft: 10, paddingBottom: 10, float: "right" }}
                    alt="thumbnail"
                ></img>
            </div>
            <p style={{ padding: 10 }} dangerouslySetInnerHTML={{ __html: tweetData.formattedText }}></p>
            <div>
                <div className="row">
                    <div className="row col-8">
                        <span role="img" aria-label="like" className="col-2">
                            💗 {tweetData.likeCount}
                        </span>
                        <span role="img" aria-label="retweet" className="col-2">
                            🔄 {tweetData.retweetCount}
                        </span>
                        <h6 className="username">{sentFrom}</h6>
                        <div className="col-6"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
