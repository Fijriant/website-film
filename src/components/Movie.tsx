import React, { useEffect, useState } from "react";
import { getMovieList } from '../Api';
import '../App.css'; // Pastikan jalur menuju file CSS benar

interface MovieType {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
}

const MovieComponent: React.FC = () => {
    const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);

    useEffect(() => {
        // Memanggil API untuk mendapatkan daftar film populer
        getMovieList()
            .then((result: MovieType[]) => {
                setPopularMovies(result);
            })
            .catch((error) => {
                console.error("Error fetching movie list:", error);
            });
    }, []);

    // Komponen untuk menampilkan daftar film populer
    const PopularMovieList: React.FC = () => {
        return (
            <div className="movie-container">
                {popularMovies.map((movie) => (
                    <div className="movie-wrapper" key={movie.id}>
                        <div className="movie-title">{movie.title}</div>
                        <img
                            className="movie-image"
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <div className="movie-date">Release Date: {movie.release_date}</div>
                        <div className="movie-rate">Rating: {movie.vote_average}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Raja Movie</h1>
                <input
                    placeholder="Cari film kesayangan..."
                    className="movie-search"
                />
                <PopularMovieList />
            </header>
        </div>
    );
};

export default MovieComponent;
