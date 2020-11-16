import React from "react";
import Search from "../MainPageComponents/Search";
import SplashScreen from "../MainPageComponents/SplashScreen";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import RandomTweetFeed from "../MainPageComponents/RandomTweetFeed";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
    const brandStyle = {
        fontSize: 40,
        color: "rgb(0, 255, 242)",
        textDecoration: "none",
    };

    return (
        <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand style={brandStyle} className="splash-title2" href="/">
                    T
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link href="/">Welcome</Nav.Link>
                        <Nav.Link href="/Search">Search</Nav.Link>
                        <Nav.Link href="/Showcase">Showcase</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="content" style={{ width: "90vw" }}>
                <Route exact path="/" component={SplashScreen} />
                <Route exact path="/Search/:searchTerm" component={Search} />
                <Route exact path="/Search" component={Search} />
                <Route exact path="/Showcase" component={RandomTweetFeed} />
            </div>
        </BrowserRouter>
    );
}
