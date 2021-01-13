import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
    state = {
        movies: getMovies(),
    };

    handleRemove(id) {
        const newMoviesList = this.state.movies.filter((movie) => movie._id !== id);
        this.setState({ movies: newMoviesList });
    }

    render() {
        const moviesCount = this.state.movies.length;
        if (moviesCount === 0) {
            return <p>Pas de film dans la base.</p>;
        }
        return (
            <>
                <p>Il y a {moviesCount} films dans la base !</p>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Genre</th>
                        <th>Stock</th>
                        <th>Note</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.movies.map((movie) => (
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td>
                                <button
                                    class="btn btn-danger btn-sm"
                                    //onClick={this.handleRemove.bind(this, movie._id)}
                                    onClick={() => this.handleRemove(movie._id)}
                                >
                                    Supprimer
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Movies;
