import React, {Component} from 'react'
import {Link} from "react-router-dom";
import '../Pages.css';

class Pages extends Component {
    render() {
        return (
            <>
                <Link to={'/'}>
                    <button>Accueil</button>
                </Link>
                <h1>Page artiste</h1>
            </>
        )
    }
}

export default Pages