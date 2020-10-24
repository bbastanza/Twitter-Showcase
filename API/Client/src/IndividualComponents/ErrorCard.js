import React from "react";

export default function ErrorCard(props) {
    let errorTitle = "There was a problem receiving tweets";
    let errorHint = "There is was an error getting the tweets from the server";
    if (props.error) {
        errorTitle = props.error.error;
        errorHint = props.error.hint;
    }
    return (
        <div className="error-card col-6">
            <h3>{errorTitle}</h3>
            <br />
            <h6>{errorHint}</h6>
        </div>
    );
}
