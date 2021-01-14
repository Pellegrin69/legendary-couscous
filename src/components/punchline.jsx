import React, {Component} from "react";
import {getLyrics} from "../services/lyricsService";

class Lyrics extends Component {
    state = {
        lyrics: getLyrics(),
    };

    render() {

        const lyricsCount = this.state.lyrics.length;
        if (lyricsCount === 0) {
            return <p>Pas de lyrics dans la base.</p>;
        }
        return (
            <>
                <h1>Legendary Couscous</h1>
                <p id ="nbr_artistes">Il y a {lyricsCount} artistes dans la base !</p>
                <ul>
                    {this.state.lyrics.map((lyric, idx) => (<li key={idx}> {lyric.name_artiste} </li>))}
                </ul>

            </>

        );
    }
}

export default Lyrics;
