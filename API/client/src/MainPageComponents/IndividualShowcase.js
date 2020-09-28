import React, { useState } from "react";
import Cheetah from "./../Images/sample-cheetah.jpeg";
import mockDataJSON from "./../Tweets/mockdata.json";
import Tweet from "../Tweets/Tweet";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function IndividualShowcase(props) {
    const [tweetData, setTweetData] = useState(mockDataJSON);

    if (props.location.state) {
        const { name } = props.location.state;
        console.log(`${name} sent to API`);

        /// send { name } to api to fetch data
        /// create tweets <Tweet data={data} />
        return (
            <div style={{ textAlign: "center", justifyContent: "center", width: "100vw" }} className="row">
                <div className="col-lg-5 col-md-12 row showcase-image" style={{ justifyContent: "center" }}>
                    <h2 className="col-12 individual-h2" style={{ fontSize: 40, margin: "0 auto 10px" }}>
                        {name}
                    </h2>
                    <img
                        src={Cheetah}
                        alt="cheetah"
                        className="col-12"
                        style={{ maxHeight: 300, maxWidth: 300, margin: "0px auto 20px" }}
                    />
                    <div className="col-12">
                        <Button color="info" size="lg">
                            <NavLink to="/ShowCase" className="link nav-link">
                                Back
                            </NavLink>
                        </Button>
                    </div>
                    <div className="col-12 link">
                        <Button color="info" size="lg" >
                            Regenerate
                        </Button>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>

                </div>
            </div>
        );
    } else return <div></div>;
}
