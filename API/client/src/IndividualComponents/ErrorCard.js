import React from "react";

export default function ErrorCard({ error }) {
    return (
        <div className="col-6" className="error-card">
            <h3>{error.error}</h3>
            <br />
            <h6>{error.hint}</h6>
        </div>
    );
}
