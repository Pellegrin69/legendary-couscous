import React from 'react';
import {Link, useParams, useLocation} from 'react-router-dom';
import '../Pages.css';

const Page = () => {
    let {slug} = useParams();
    let location = useLocation();
    return (
        <div>
            <Link to={'/'}>
                <button>Accueil</button>
            </Link>
            <h1>{slug}</h1>

            <p className="punch">{location.state.artiste.punch.texte}</p>
            <div className="infos">
                <p className="titre">{location.state.artiste.punch.titre}</p>
                <p className="album">{location.state.artiste.punch.album}</p>
                <p className="annee">{location.state.artiste.punch.annee}</p>
            </div>

        </div>
    );
};

export default Page;