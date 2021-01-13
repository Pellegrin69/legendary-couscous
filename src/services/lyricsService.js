import * as artistesAPI from "./artistService";

const lyrics = [
    {
        punch: "Si les meilleurs en premiers. Pourquoi suis-je toujours en vie ?",
        _id: "1",
        titre: "Les Meilleurs",
        artiste: {_id: "1", name: "Booba"},
        album: "D.U.C",
        annee: "2015"
    },
    {
        punch: "T'as tout misé sur ta chatte, normal qu'on s'rappelle plus d'ta tête",
        _id: "2",
        titre: "On est au calme",
        artiste: {_id: "2", name: "Guizmo"},
        album: "Jamais 203",
        annee: "2013"
    },
    {
        punch: "Un oeil qui louche pour voir qui va attaquer en traître",
        _id: "3",
        titre: "Saint-Domingue",
        artiste: {_id: "3", name: "Alpha Wann"},
        album: "Alph Lauren 3",
        annee: "2018"
    },
    {
        punch: "Je suis albinos parce que j'suis né pour briller",
        _id: "4",
        titre: "Arret du coeur",
        artiste: {_id: "4", name: "Kalash Criminel"},
        album: "R.A.S",
        annee: "2016"
    },
    {
        punch: "Les nazis re-popent comme dans Call Of Duty car des teubés jugèrent pas la capote utile",
        _id: "5",
        titre: "Daruma",
        artiste: {_id: "5", name: "Nepal"},
        album: "Adios Bahamas",
        annee: "2020"
    },
    {
        punch: "La go est douce, le négro est brut, ça va finir par coller car les opposés s’attirent",
        _id: "6",
        titre: "Djomb",
        artiste: {_id: "6", name: "Bosh"},
        album: "Synkinisi",
        annee: "2020"
    },
    {
        punch: "Y’a que les ficelles de tes strings qui te soutiennent. Je te baise et les draps s’en souviennent",
        _id: "7",
        titre: "Zoo",
        artiste: {_id: "7", name: "Kaaris"},
        album: "Or Noir",
        annee: "2013"
    },
    {
        punch: "Y’a que les ficelles de tes strings qui te soutiennent. Je te baise et les draps s’en souviennent",
        _id: "8",
        titre: "Roro",
        artiste: {_id: "8", name: "Ninho"},
        album: "Comme prévu",
        annee: "2017"
    },
    {
        punch: "Ils n'aiment pas les étrangers, sans lеs étrangers, quoi, ils seraient encore en train de vivre sous Vichy",
        _id: "9",
        titre: "mitsubishi",
        artiste: {_id: "3", name: "Alpha Wann"},
        album: "don dada mixtape vol 1",
        annee: "2020"
    }
];

export function getLyrics() {
    return lyrics;
}

export function getLyric(id) {
    return lyrics.find(l => l._id === id);
}

export function saveLyric(lyrics) {
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

export function deleteLyric(id) {
    let lyricsInDb = lyrics.find(m => m._id === id);
    lyrics.splice(lyrics.indexOf(lyricsInDb), 1);
    return lyricsInDb;
}