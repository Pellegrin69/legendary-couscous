import React from 'react';
import './App.css';
import Accueil from "./components/Accueil";
import Pages from "./components/Pages";
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <main role="main" className="container">
                <Router>
                    <Route path="/" exact component={Accueil}/>
                    <Route path="/Pages" exact component={Pages}/>
                </Router>
            </main>
        )
    }
}

export default App;
