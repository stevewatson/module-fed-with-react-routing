import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const App = () => {
    const nav = useNavigate();
    const About = React.lazy(() => import("about/about"));

    const gotoAbout = () => {
        nav("/about");
    };

    return (
        <>
            <h1>Main Application</h1>
            <p>This might be a header section for the main application???</p>
            <p>
                and now we would have an application main menu:
                <Button onClick={gotoAbout}>About</Button>
            </p>
            <hr />

            <Routes>
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={() => <div>Loading...</div>}>
                            <About
                                goHome={() => {
                                    nav("/");
                                }}
                            />
                        </Suspense>
                    }
                />
            </Routes>

            <div style={{ marginTop: "64px" }}>
                <hr />
                <p>Footer section for the main application</p>
                <p>
                    We could have links and general application information
                    displayed here!
                </p>
            </div>
        </>
    );
};
ReactDOM.render(
    <BrowserRouter>
        <App />{" "}
    </BrowserRouter>,
    document.getElementById("app")
);
