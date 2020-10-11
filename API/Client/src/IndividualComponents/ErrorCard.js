import React from "react";

export default function ErrorCard(props) {
    return (
        <div className="error-card col-6">
            <h3>{props.error.error}</h3>
            <br />
            <h6>{props.error.hint}</h6>
        </div>
    );
}
