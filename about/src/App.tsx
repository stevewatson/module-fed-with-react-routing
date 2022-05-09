import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import About from "./About";

// import "./index.css";

const App = ({ goHome }: { goHome: () => {} }): JSX.Element => (
    <About goHome={goHome} />
);
ReactDOM.render(<App goHome={goHome} />, document.getElementById("app"));
