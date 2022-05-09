import React from "react";
import { useNavigate } from "react-router-dom";

const About = ({ goHome }: { goHome: () => {} }): JSX.Element => {
    // const nav = useNavigate();
    console.log(goHome);

    // const gotoHome = (backUrl: string) => nav("/");

    return (
        <>
            <div
                style={{
                    backgroundColor: "silver",
                    border: "2px solid blue",
                    padding: "8px",
                }}
            >
                <h3>About page...</h3>
                <p>
                    This is the about page but could be an entire application
                    within another application.
                </p>
                <p>
                    To return the user back home I will use the{" "}
                    <button onClick={() => goHome()}>
                        Click me to return home!
                    </button>
                </p>
            </div>
        </>
    );
};

export default About;
