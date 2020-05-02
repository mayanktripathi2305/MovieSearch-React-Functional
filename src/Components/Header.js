import React from "react";

function Header(props) {
  return (
    <header className="AppHeader">
      <h1>{props.text}</h1>
    </header>
  );
}

export default Header;
