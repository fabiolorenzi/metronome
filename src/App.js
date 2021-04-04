import React from "react";
import { Switch, Route } from "react-router-dom";

import MainContainer from "./components/MainContainer.jsx";

function App() {
    return(
        <div className="app_container">
            <Switch>
                <Route exact path="/" component={MainContainer} />
            </Switch>
        </div>
    );
};

export default App;