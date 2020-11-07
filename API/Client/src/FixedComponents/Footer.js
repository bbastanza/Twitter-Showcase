import React from "react";

export default function Footer() {
    return (
        <footer
            className="page-footer font-small footer-fixed splash-footer"
            style={{ marginTop: 100, width: "100vw" }}
        >
            <div className="footer-copyright text-center py-3 ">
                © 2020 Copyright:
                <a href="https://www.brianbastanza.me"> brianbastanza.me</a>
            </div>
        </footer>
    );
}
