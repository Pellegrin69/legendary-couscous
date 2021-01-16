import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Accueil from "./components/Accueil";
import Pages from "./components/Pages";
import Page from "./components/Page";
import './App.css';

class App extends React.Component {

    render() {
        return (
            <main role="main" className="container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Accueil}/>
                        <Route path="/Page" exact component={Pages}/>
                        <Route path="/Page/:slug" exact component={Page}/>
                        <Redirect to="/"/>
                    </Switch>
                </Router>
            </main>
        )
    }
}

export default App;
