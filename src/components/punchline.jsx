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
                <p>Il y a {lyricsCount} punchlines dans la base !</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Punchline</th>
                        <th>Artiste</th>
                        <th>Titre</th>
                        <th>Album</th>
                        <th>Annee</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.lyrics.map((lyric) => (
                        <tr key={lyric._id}>
                            <td>{lyric.punch}</td>
                            <td>{lyric.artiste}</td>
                            <td>{lyric.titre}</td>
                            <td>{lyric.album}</td>
                            <td>{lyric.annee}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Lyrics;
