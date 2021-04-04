import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./normalize.css";
import "./style.css";
import App from "./App.js";

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("app")
);