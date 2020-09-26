import React from "react";
import Cheetah from "./../Images/sample-cheetah.jpeg";
import { NavLink } from "react-router-dom";

export default function ShowcaseOverview() {
    return (
        <div>
            <div
                className="row"
                style={{
                    color: "#ffe6bc",
                    marginTop: 60,
                    justifyContent: "space-evenly",
                    textAlign: "center",
                    width: "100vw",
                }}
            >
                <div className="col-lg-2 col-md-6 showcase-image">
                    <NavLink
                        to={{
                            pathname: "/Cheetah1",
                            state: {
                                name: "Cheetah1",
                            },
                        }}
                    >
                        <h1 className="individual-h2">Cheetah1</h1>
                        <img src={Cheetah} alt="cheetah" />
                    </NavLink>
                </div>
                <div className="col-lg-2 col-md-6  showcase-image">
                    <NavLink
                        to={{
                            pathname: "/Cheetah2",
                            state: {
                                name: "Cheetah2",
                            },
                        }}
                    >
                        <h1 className="individual-h2">Cheetah2</h1>
                        <img src={Cheetah} alt="cheetah" />
                    </NavLink>
                </div>
                <div className="col-lg-2 col-md-6  showcase-image">
                    <NavLink
                        to={{
                            pathname: "/Cheetah3",
                            state: {
                                name: "Cheetah3",
                            },
                        }}
                    >
                        <h1 className="individual-h2">Cheetah3</h1>
                        <img src={Cheetah} alt="cheetah" />
                    </NavLink>
                </div>

                <div className="col-lg-2 col-md-6  showcase-image">
                    <NavLink
                        to={{
                            pathname: "/Cheetah4",
                            state: {
                                name: "Cheetah4",
                            },
                        }}
                    >
                        <h1 className="individual-h2">Cheetah4</h1>
                        <img src={Cheetah} alt="cheetah" />
                    </NavLink>
                </div>
                <div className="col-lg-2 col-md-6  showcase-image">
                    <NavLink
                        to={{
                            pathname: "/Cheetah5",
                            state: {
                                name: "Cheetah5",
                            },
                        }}
                    >
                        <h1 className="individual-h2">Cheetah5</h1>
                        <img src={Cheetah} alt="cheetah" />
                    </NavLink>
                </div>
            </div>
            <div className="content"></div>
        </div>
    );
}
