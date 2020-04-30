import React from "react";

function Search({ handleInput, search }) {
  return (
    <div>
      <section>
        <form>
          <input
            type="text"
            placeholder="Enter your movie search"
            className="Search"
            onChange={handleInput}
            onKeyPress={search}
          />
        </form>
      </section>
    </div>
  );
}

export default Search;
