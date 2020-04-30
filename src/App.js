import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";

function App() {
  const [state, setstate] = useState({
    searchTerm: "",
    results: [],
    selected: {},
  });

  const apiurl = "https://www.omdbapi.com/?i=tt3896198&apikey=497f0f67";

  /* Function to search for movie name from the API*/
  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.searchTerm).then((data) => {
        console.log(data);
      });
    }
  };

  /* Function to handle input of movie name in the search boxes*/
  const handleInput = (e) => {
    let searchTerm = e.target.value;

    setstate((prevState) => {
      return { ...prevState, searchTerm: searchTerm };
    });
  };

  return (
    <div className="App">
      <Header />
      <Search handleInput={handleInput} search={search} />
    </div>
  );
}

export default App;
