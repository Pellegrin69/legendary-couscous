import React, {Component} from "react";
import {getLyrics} from "../services/lyricsService";

class Lyrics extends Component {
    state = {
        lyrics: getLyrics(),

    };

    fillArtistArray() {
        let artistArray = []
        this.state.lyrics.map((artist) =>
            artistArray.push(artist.artiste.name))
        console.log(artistArray)
        return artistArray
    }

    render() {
        const lyricsCount = this.state.lyrics.length;
        if (lyricsCount === 0) {
            return <p>Pas de lyrics dans la base.</p>;
        }
        return (
            <>
                <p>Il y a {lyricsCount} punchlines dans la base !</p>
                {this.fillArtistArray()}
                <ul>{this.state.lyrics.map((lyric) =>
                    <li key={lyric.artiste._id}>{lyric.artiste.name}</li>)}
                </ul>
            </>
        );
    }
}

export default Lyrics;
