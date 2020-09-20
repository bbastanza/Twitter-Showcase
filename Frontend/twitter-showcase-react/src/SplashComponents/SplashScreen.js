import React from "react";
import LargeLogo from "./../Images/Twitter-icon.png";
import { NavLink } from "react-router-dom";
import "./../App.css";
import { Button } from "reactstrap";

export default function SplashScreen() {
    return (
        <div className="App-header">
            <div className="row" style={{ margin: 60, justifyContent: "space-between", textAlign: "center" }}>
                <div className="col-lg-6 col-md-12">
                    <img src={LargeLogo} alt="Twitter" />
                </div>
                <div className="col-lg-6 col-md-12" style={{ marginTop: 60, textAlign: "center" }}>
                    <h2 className="splash-title">twitter</h2>
                    <h2 className="splash-title2">showcase</h2>
                    <p className="splash-p">An app built in React, C# and .NET</p>
                    <Button color="info" size="lg">
                        <NavLink to="/Search" className="link nav-link">
                            Enter
                        </NavLink>
                    </Button>
                </div>
            </div>
        </div>
    );
}
