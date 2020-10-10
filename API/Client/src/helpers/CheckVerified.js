import React from "react";
import verifiedImage from "./../Images/verified.png";

export default function checkVerified(verified) {
    return verified ? <img src={verifiedImage} alt="verified" style={{ height: 20, width: 20 }}></img> : "";
}
