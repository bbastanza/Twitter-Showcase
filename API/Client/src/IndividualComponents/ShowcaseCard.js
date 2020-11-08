import React from "react";

export default function ShowcaseCard({ screenName, name, image, handleClick }) {
    return (
        <div
            onClick={() => handleClick(screenName)}
            className="showcase-card row"
            style={{
                justifyContent: "space-between",
                width: "80%",
                minWidth: 320,

                padding: "15px 20px 0 20px",
            }}
        >
            <img src={image} alt={name} style={{ height: "100px", width: "100px", borderRadius: "50%" }} />

            <h3
                className="col-4"
                style={{
                    fontWeight: "bold",
                    fontFamily: "ubuntu",
                    // wordWrap: "break-word",
                }}
            >
                {name}
            </h3>

            <h4 className="col-5">@{screenName}</h4>

            <p className="col-12" style={{ fontStyle: "italic" }}>
                Click For a Random Tweet!
            </p>
        </div>
    );
}
