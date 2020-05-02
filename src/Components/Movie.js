import React from "react";

const default_poster =
  "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? default_poster : movie.Poster;

  return (
    <div className="movie">
      <h2>{movie.Title}</h2>
      <div>
        <img width="250" alt="Movie Poster" src={poster} />
      </div>
      <h4>{movie.Year}</h4>
    </div>
  );
};

export default Movie;
