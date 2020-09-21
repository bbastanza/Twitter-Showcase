import React from "react";
import NavBar from "./FixedComponents/NavBar";
import Footer from "./FixedComponents/Footer";
import "./App.css";

function App() {
    return (
        <div>
            <div style={{ marginBottom: 60 }}>
                <NavBar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
