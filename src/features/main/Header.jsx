/* eslint-disable no-unused-vars */
import React from "react";
import mockup from "./../../assets/images/mockup.png";
import logo from "./../../assets/images/logo.png";
import { Typewriter } from "react-simple-typewriter";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h1>
          <span>wanted</span>.evelopers
        </h1>
        <button>Müraciət et</button>
      </div>

      <div>
        <h2>
          <Typewriter
            words={["modern online school", "modern classrooms"]}
            loop={false}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
        <img src={logo} alt="company view" />
        <button>Başla</button>
      </div>
    </div>
  );
};

export default Header;
