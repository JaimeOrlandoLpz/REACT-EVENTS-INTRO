import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello, World!");
  const [btnClassName, setBtnClassName] = useState("whiteBg");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setBtnClassName("blackBg");
  }

  function handleMouseOut() {
    setBtnClassName("whiteBg");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={btnClassName}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
