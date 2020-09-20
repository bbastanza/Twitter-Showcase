import React, { useState } from "react";

export default function Search() {
    const [textBoxValue, setTextBoxValue] = useState("");

    function pressedSubmit(e) {
        e.preventDefault();
        if (textBoxValue !== "") {
            console.log(`${textBoxValue} sent to API`);
            setTextBoxValue("");
        }
    }

    return (
        <div style={{ padding: 200, fontSize: 20 }}>
            <div className="col-lg-6 col-md-12">
                <form onSubmit={pressedSubmit}>
                    <input
                        style={{ width: 500, textAlign: "center" }}
                        onChange={e => setTextBoxValue(e.target.value)}
                        type="text"
                        placeholder="Enter Person or Tweet"
                        value={textBoxValue}
                    />
                    <button className="btn btn-info link" style={{ color: "#ffe6bc", fontSize: 30, padding: 10 }}>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
}
