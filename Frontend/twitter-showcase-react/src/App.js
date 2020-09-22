import React from "react";
import NavBar from "./FixedComponents/NavBar";
import Footer from "./FixedComponents/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <div style={{ justifyContent: "center" }}>
            <div style={{ margin: "0 0 60px 0" }}>
                <NavBar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
