import React, { useState } from "react";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="Search">
      <input value={searchValue} type="text" onChange={handleInputChanges} />
      <input value="Search" type="submit" onClick={onSearchSubmit} />
    </form>
  );
};

export default Search;
