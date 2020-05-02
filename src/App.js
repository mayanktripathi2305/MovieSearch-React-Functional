import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Movie from "./Components/Movie";

const apiurl = "http://www.omdbapi.com/?apikey=497f0f67";

const App = () => {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetch(apiurl)
      .then((response) => response.json())
      .then((result) => {
        setloading(false);
        //setMovies(result.Search);
      });
  }, []);

  const search = (searchValue) => {
    setloading(false);
    setErrorMessage(null);

    fetch(apiurl + "&s=" + searchValue)
      .then((response) => response.json())
      .then((result) => {
        if (result.Response === "True") {
          setloading(false);
          setMovies(result.Search);
        } else {
          setErrorMessage(result.Error);
          setloading(false);
        }
      });
  };

  return (
    <div className="App">
      <Header text="B()()KED" />
      <p className="Intro">Search Movies without any Ads</p>
      <Search search={search} />

      <div className="movies">
        {loading && !errorMessage ? (
          <span>loading...</span>
        ) : errorMessage ? (
          <div className="errorMessage">{errorMessage}</div>
        ) : (
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
};
export default App;
