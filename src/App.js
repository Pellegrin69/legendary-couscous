import React from 'react';
import './App.css';

class App extends React.Component {
    state = {
        ariste: [
            {
                id_artiste: "1",
                name_artiste: "Alpha Wann",
                page: "",
                punch: {
                    texte: "Un oeil qui louche pour voir qui va attaquer en traître",
                    id_punch: "1",
                    titre: "Saint-Domingue",
                    album: "Alph Lauren 3",
                    annee: "2018"
                },
            }, {
                id_artiste: "2",
                name_artiste: "Booba",
                page: "",
                punch: {
                    texte: "Si les meilleurs partent en premiers. Pourquoi suis-je toujours en vie ?",
                    id_punch: "1",
                    titre: "Les Meilleurs",
                    album: "D.U.C",
                    annee: "2015"
                }
            }, {
                id_artiste: "3",
                name_artiste: "Guizmo",
                page: "pages_artistes/guizmo.html",
                punch: {
                    texte: "T'as tout misé sur ta chatte, normal qu'on s'rappelle plus d'ta tête",
                    id_punch: "1",
                    titre: "On est au calme",
                    album: "Jamais 203",
                    annee: "2013"
                }
            }, {
                id_artiste: "4",
                name_artiste: "Kalash Criminel",
                page: "",
                punch: {
                    texte: "Je suis albinos parce que j'suis né pour briller",
                    id_punch: "1",
                    titre: "Arret du coeur",
                    album: "R.A.S",
                    annee: "2016"
                }
            }, {
                id_artiste: "5",
                name_artiste: "Nepal",
                page: "",
                punch: {
                    texte: "Les nazis re-popent comme dans Call Of Duty car des teubés jugèrent pas la capote utile",
                    id_punch: "1",
                    titre: "Daruma",
                    album: "Adios Bahamas",
                    annee: "2020"
                }
            }, {
                id_artiste: "6",
                name_artiste: "Bosh",
                page: "",
                punch: {
                    texte: "La go est douce, le négro est brut, ça va finir par coller car les opposés s’attirent",
                    id_punch: "1",
                    titre: "Djomb",
                    album: "Synkinisi",
                    annee: "2020"
                }
            }, {
                id_artiste: "7",
                name_artiste: "Kaaris",
                page: "",
                punch: {
                    texte: "Y’a que les ficelles de tes strings qui te soutiennent. Je te baise et les draps s’en souviennent",
                    id_punch: "1",
                    titre: "Zoo",
                    album: "Or Noir",
                    annee: "2013"
                }
            }, {
                id_artiste: "8",
                name_artiste: "Ninho",
                page: "",
                punch: {
                    texte: "Y’a que les ficelles de tes strings qui te soutiennent. Je te baise et les draps s’en souviennent",
                    id_punch: "1",
                    titre: "Roro",
                    album: "Comme prévu",
                    annee: "2017"
                }
            }, {
                id_artiste: "9",
                name_artiste: "Jul",
                page: "",
                punch: {
                    texte: "",
                    id_punch: "1",
                    titre: "Anti BDH",
                    album: "LACRIZEOMIC",
                    annee: "2014"
                }
            }, {
                id_artiste: "10",
                name_artiste: "Damso",
                page: "",
                punch: {
                    texte: "Ça commence par du Roméo et Juliette, ça finit par du Jacquie et Michel ",
                    id_punch: "1",
                    titre: "Z. Kietu",
                    album: "Ispéité",
                    annee: "2017"
                }
            }, {
                id_artiste: "11",
                name_artiste: "Orelsan",
                page: "",
                punch: {}
            }, {
                id_artiste: "12",
                name_artiste: "PLK",
                page: "",
                punch: {}
            }, {
                id_artiste: "13",
                name_artiste: "Vald",
                page: "",
                punch: {}
            }, {
                id_artiste: "14",
                name_artiste: "SCH",
                page: "",
                punch: {}
            }
        ]
    }

    render() {
        const lyricsCount = this.state.ariste.length;
        if (lyricsCount === 0) return <p id="nbr_artistes">Pas de lyrics dans la base.</p>;
        return (
            <main role="main" className="container">
                <>
                    <h1>Legendary Couscous</h1>
                    <p id="nbr_artistes">Il y a {lyricsCount} artistes dans la base !</p>
                    <ul>
                        {this.state.ariste.map((artiste) => (
                            <li key={artiste.id_artiste}><a href={artiste.page}>{artiste.name_artiste}</a></li>
                        ))}
                    </ul>
                </>
            </main>
        )
    }
}

export default App;
