import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Accueil from "./components/Accueil";
import Pages from "./components/Pages";
import Page from "./components/Page";

class App extends React.Component {

    render() {
        return (
            <main role="main" className="container">
                <Router>
                    <Switch>
                        <Route path="/" exact component={Accueil}/>
                        <Route path="/Page" exact component={Pages}/>
                        <Route path="/Page/:slug" exact component={Page}/>
                        <Route path="/ui" exact component={() => <div>ERREUR 404</div>}/>
                    </Switch>
                </Router>
            </main>
        )
    }
}

export default App;
