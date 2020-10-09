import React from "react";

export default function ErrorCard(props) {
    return (
        <div className="col-6" className="error-card">
            <h3>{props.error.error}</h3>
            <br />
            <h6>{props.error.hint}</h6>
        </div>
    );
}
