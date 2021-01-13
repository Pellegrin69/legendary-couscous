const lyrics = [
    {
        punch: "nique toi",
        _id: "5b21ca3eeb7f6fbccd471815",
        titre: "André",
        artiste: "Guizmo",
        album: "Dans ma ruche",
        annee: "2014",
    },
    {
        punch:"pd t ki",
        _id: "5b21ca3eeb7f6fbccd471815",
        titre: "J'sais qu't'as mal",
        artiste: "Guizmo",
        album: "Amicalement Votre",
        annee: "2017",
    },
    {
        punch:"s/o",
        _id: "5b21ca3eeb7f6fbccd471815",
        titre: "Stupefiant et noir",
        artiste: "Alpha Wann",
        album: "Une main lave l'autre",
        annee: "2018",
    },
];

export function getMovies() {
    return lyrics;
}

export function getMovie(id) {
    return lyrics.find(l => l._id === id);
}

export function saveMovie(movie) {
    let lyricsInDb = lyrics.find(l => l._id === lyrics._id) || {};
    lyricsInDb.punch = lyrics.punch;
    lyricsInDb.titre = lyrics.titre;
    lyricsInDb.artiste = lyrics.artiste;
    lyricsInDb.album = lyrics.album;
    lyricsInDb.annee = lyrics.annee;

    if (!lyricsInDb._id) {
        lyricsInDb._id = Date.now();
        lyrics.push(lyricsInDb);
    }

    return lyricsInDb;
}

export function deleteMovie(id) {
    let lyricsInDb = lyrics.find(m => m._id === id);
    lyrics.splice(lyrics.indexOf(lyricsInDb), 1);
    return lyricsInDb;
}