import React, { Fragment } from "react";
import "./styles/styles.css";

import GitHub from "./media/socials/github.svg";
import Instagram from "./media/socials/instagram.svg";
import LinkedIn from "./media/socials/linkedin.svg";
import YouTube from "./media/socials/youtube.svg";

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
        <a target="_blank" href="https://github.com/lauirvin">
          <img alt="github" src={GitHub} />
        </a>
        <a target="_blank" href="https://instagram.com/irvin.dev">
          <img alt="instagram" src={Instagram} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/lauirvin">
          <img alt="linkedin" src={LinkedIn} />
        </a>
        <a target="_blank" href="https://youtube.com/lauirvin98">
          <img alt="youtube" src={YouTube} />
        </a>
      </div>
      <div className="links">
        <a
          target="_blank"
          href="https://github.com/lauirvin/darkmode"
          className="view-source"
        >
          <p>View Source</p>
        </a>
        <a
          target="_blank"
          href="https://irviniveslau.com"
          className="about-author"
        >
          <p>About Author</p>
        </a>
      </div>
    </Fragment>
  );
}

export default App;
