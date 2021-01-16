import React from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import '../Pages.css';

const Page = () => {
    let {slug} = useParams()
    let location = useLocation()
    return (
        <div>
            <Link to={'/'}>
                <button>Accueil</button>
            </Link>
            <h1>{slug}</h1>
            <p className="punch">{location.state.artiste.punch.texte}</p>
        </div>
    );
};

export default Page;