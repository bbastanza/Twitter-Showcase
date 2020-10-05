import React from "react";

export default function ShowcaseCard({ screenName, name, image, handleClick }) {
    return (
        <div
            onClick={() => handleClick(screenName)}
            className="showcase-card row"
            style={{ justifyContent: "space-between", width: "600px", padding: "15px 20px 0 20px" }}
        >
            <img
                src={image}
                alt={name}
                className="col-3"
                style={{ maxHeight: 100, maxWidth: 100, borderRadius: "50%" }}
            />
            <h3 className="col-5" style={{ fontWeight: "bold", fontFamily: "ubuntu" }}>
                {name}
            </h3>
            <h4 className="col-4">@{screenName}</h4>

            <p className="col-12" style={{ fontStyle: "italic" }}>
                Click For a Random Tweet!
            </p>
        </div>
    );
}
