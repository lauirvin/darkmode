import React, { Fragment, useEffect } from "react";
import "./styles/styles.css";

import GitHub from "./media/socials/github.svg";
import Instagram from "./media/socials/instagram.svg";
import LinkedIn from "./media/socials/linkedin.svg";
import YouTube from "./media/socials/youtube.svg";

const App = () => {
  const changeMode = (title, mode, body) => {
    document.title = title;
    localStorage.setItem("mode", mode);
    title === "Dark" ? body.add("mod-dark") : body.remove("mod-dark");
  };
  
  useEffect(() => {
    const localMode = localStorage.getItem("mode");
    const body = document.body.classList;

    localMode === "mod-dark" ? changeMode("Dark", "mod-dark", body) : changeMode("Light", "", body);
  }, []);

  const handleSwitch = () => {
    const localMode = localStorage.getItem("mode");
    const body = document.body.classList;

    localMode === "mod-dark" ? changeMode("Light", "", body) : changeMode("Dark", "mod-dark", body);
  };

  return (
    <Fragment>
      <button onClick={handleSwitch} className="switch"></button>
      <h1 className="mode"> </h1>
      <h2>
        Developed by <span>Irvin Ives Lau</span>
      </h2>
      <div className="socials">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lauirvin"
        >
          <img alt="github" src={GitHub} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/irvin.dev"
        >
          <img alt="instagram" src={Instagram} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lauirvin"
        >
          <img alt="linkedin" src={LinkedIn} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://youtube.com/lauirvin98"
        >
          <img alt="youtube" src={YouTube} />
        </a>
      </div>
      <div className="links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lauirvin/darkmode"
          className="view-source"
        >
          <p>View Source</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://irviniveslau.com"
          className="about-author"
        >
          <p>About Author</p>
        </a>
      </div>
    </Fragment>
  );
};

export default App;
