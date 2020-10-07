import React from "react";
import LargeLogo from "./../Images/Twitter-icon.png";
import { NavLink } from "react-router-dom";
import "./../App.css";
import { Button } from "reactstrap";

export default function SplashScreen() {
    return (
        <div className="App-header">
            <div className="row" style={{ justifyContent: "center", textAlign: "center" }}>
                <div className="col-lg-4 col-md-12">
                    <img src={LargeLogo} alt="Twitter" />
                </div>
                <div className="col-lg-4 col-md-12" style={{ marginTop: 60, textAlign: "center" }}>
                    <h2 className="splash-title">twitter</h2>
                    <h2 className="splash-title2">showcase</h2>
                    <p className="splash-p">An app built in React, C# and .NET</p>
                    <Button color="info" size="lg">
                        <NavLink to="/Search" className="link nav-link">
                            Enter
                        </NavLink>
                    </Button>
                </div>
                <div className="col-6" style={{ margin: 60, fontFamily: "ubuntu" }}>
                    <h3>
                        This is an app allowing you to view all your favorite tweets without having to log into twitter.
                        Search for anyone you want by screen name, by content or click the showcase tab to get random
                        tweets from some of my favorite accounts.
                    </h3>
                    <h6 style={{ marginTop: 30 }}>
                        Social media consumption may pose significant damage to your mental health. Use at your own
                        risk.{" "}
                        <span role="img" aria-label="warning">
                            ⚠️
                        </span>
                    </h6>
                </div>
            </div>
        </div>
    );
}
