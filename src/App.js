import React, { Fragment } from "react";
import "./styles/styles.css";

import GitHub from "./media/github.svg";
import Instagram from "./media/instagram.svg";
import LinkedIn from "./media/linkedin.svg";
import YouTube from "./media/youtube.svg";

function App() {
  return (
    <Fragment>
      <h1>
        <u>“Light Mode”</u>
      </h1>
      <h2>
        Developed by <span>Irvin Ives Lau</span>
      </h2>
      <div className="socials">
        <img src={GitHub} />
        <img src={Instagram} />
        <img src={LinkedIn} />
        <img src={YouTube} />
      </div>
      <div className="links">
        <button className="view-source">
          <p>View Source</p>
        </button>
        <button className="about-author">
          <p>About Author</p>
        </button>
      </div>
    </Fragment>
  );
}

export default App;
