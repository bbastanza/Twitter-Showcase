import React from "react";
import Cheetah from "./../Images/sample-cheetah.jpeg";
import Tweet from "../Tweets/Tweet";
import { Button } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function IndividualShowcase(props) {
    if (props.location.state) {
        const { name } = props.location.state;
        console.log(`${name} sent to API`);

        /// send { name } to api to fetch data
        /// create tweets <Tweet data={data} />
        return (
            <div style={{ textAlign: "center", justifyContent: "center", width: "100vw" }} className="row">
                <div
                    className="col-lg-5 col-md-12 row"
                    style={{ justifyContent: "center", padding: "80px 0 0 100px " }}
                >
                    <h1 className="col-12 link" style={{ fontSize: 60 }}>
                        {name}
                    </h1>
                    <img
                        src={Cheetah}
                        alt="cheetah"
                        className="col-12"
                        style={{ maxHeight: 300, maxWidth: 300, margin: 20 }}
                    />
                    <div className="col-12">
                        <Button color="info" size="lg">
                            <NavLink to="/ShowCase" className="link nav-link">
                                Back
                            </NavLink>
                        </Button>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12" style={{ marginTop: 60 }}>
                    <Tweet />
                    <Tweet />
                </div>
            </div>
        );
    } else return <div></div>;
}
