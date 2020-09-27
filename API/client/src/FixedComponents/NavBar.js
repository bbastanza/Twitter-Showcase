import React from "react";
import Search from "../MainPageComponents/Search";
import Showcase from "../MainPageComponents/ShowcaseOverview";
import SplashScreen from "../MainPageComponents/SplashScreen";
import { Route, NavLink, HashRouter } from "react-router-dom";
import IndividualShowcase from "../MainPageComponents/IndividualShowcase";

export default function NavBar() {
    return (
        <HashRouter>
            <div className="navbar navbar-expand-lg" style={{ backgroundColor: "#262626" }}>
                <NavLink to="/" className="splash-title2 brand">
                    T
                </NavLink>
                <button
                    className="navbar-toggler navbar-dark link"
                    data-toggle="collapse"
                    data-target="#nav-bar-collapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="nav-bar-collapse" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li name="welcome" className="navbar-item">
                            <NavLink to="/" className="link nav-link">
                                Welcome
                            </NavLink>
                        </li>
                        <li name="search" className="navbar-item">
                            <NavLink to="/Search" className="link nav-link">
                                Search
                            </NavLink>
                        </li>
                        <li name="showcase" className="navbar-item">
                            <NavLink to="/Showcase" className="link nav-link">
                                Showcase
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content">
                <Route exact path="/" component={SplashScreen} />
                <Route exact path="/Search" component={Search} />
                <Route exact path="/Showcase" component={Showcase} />
                <Route exact path="/:handle" component={props => <IndividualShowcase {...props} />} />
            </div>
        </HashRouter>
    );
}
