import React, {Component} from "react";

class Lyrics extends Component {
    getLyrics() {
        console.log(lyrics)
        return lyrics;
    }

    getLyric(id) {
        return lyrics.find(l => l.id_artiste === id);
    }

    saveLyric(lyrics) {
        let lyricsInDb = lyrics.find(l => l._id === lyrics._id) || {};
        lyricsInDb.punch = lyrics.punch;
        lyricsInDb.titre = lyrics.titre;
        lyricsInDb.artiste = artistesAPI.artistes.find(a => a._id === lyrics.artisteId);
        lyricsInDb.album = lyrics.album;
        lyricsInDb.annee = lyrics.annee;

        if (!lyricsInDb._id) {
            lyricsInDb._id = Date.now();
            lyrics.push(lyricsInDb);
        }

        return lyricsInDb;
    }

    deleteLyric(id) {
        let lyricsInDb = lyrics.find(m => m.id_artiste === id);
        lyrics.splice(lyrics.indexOf(lyricsInDb), 1);
        return lyricsInDb;
    }


    render() {
        return (console.log("punchline.jsx render"));
    }
}

export default Lyrics;
