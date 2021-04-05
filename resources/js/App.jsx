import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import Login from "./routes/Login";
const App = () => {
    return (
        <Router>
            <Main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Main>
        </Router>
    );
};
export default App;
