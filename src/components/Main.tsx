import React, { useEffect, useState } from "react";
import { getMovieList } from '../Api';

interface MovieType {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const MainPage: React.FC = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<number>(6);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    getMovieList()
      .then((result: MovieType[]) => {
        setPopularMovies(result);
        setNowPlayingMovies(result.slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching movie list:", error);
      });
  }, []);

  const loadMoreMovies = () => {
    setVisibleMovies((prevVisible) => prevVisible + 6);
  };

  const toggleFavorite = (movieId: number) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter((id) => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
  };

  const NowPlayingMoviesList: React.FC = () => (
    <div className="movie-container">
      {nowPlayingMovies.map((movie) => (
        <div className="movie-wrapper" key={movie.id}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <div className="movie-date">Release Date: {movie.release_date}</div>
            <div className="movie-rate">Rating: {movie.vote_average}</div>
          </div>
          <button
        className={`favorite-btn btn btn-primary ${favorites.includes(movie.id) ? 'favorited' : ''}`}
        onClick={() => toggleFavorite(movie.id)}
      >
        {favorites.includes(movie.id) ? 'Remove from Favorite' : 'Add to Favorite'}
      </button>
        </div>
      ))}
    </div>
  );

  const PopularMoviesList: React.FC = () => (
    <div className="movie-container">
      {popularMovies.slice(0, visibleMovies).map((movie) => (
        <div className="movie-wrapper" key={movie.id}>
          <div className="movie-title">{movie.title}</div>
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <div className="movie-date">Release Date: {movie.release_date}</div>
            <div className="movie-rate">Rating: {movie.vote_average}</div>
          </div>
          <button
            className={`favorite-btn btn btn-primary ${favorites.includes(movie.id) ? 'favorited' : ''}`}
            onClick={() => toggleFavorite(movie.id)}
          >
            {favorites.includes(movie.id) ? 'Remove from Favorite' : 'Add to Favorite'}
          </button>
        </div>
      ))}
      {visibleMovies < popularMovies.length && (
        <button className="favorite-btn btn btn-primary" onClick={loadMoreMovies}>
          Load More
        </button>
      )}
    </div>
  );

  return (
    <div className="Main mt-1">
      <header className="Main-header">
        <h1>Raja Movie</h1>
        <h1 className="container">Now Playing</h1>
        <NowPlayingMoviesList />
        <h1 className="container">Popular Movies</h1>
        <PopularMoviesList />
      </header>
    </div>
  );
};

export default MainPage;
