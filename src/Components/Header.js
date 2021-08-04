import React, { useEffect } from "react";
import gsap from "gsap";
import TypeWriter from "react-typewriter";

const Header = ({ data }) => {
  useEffect(() => {
    gsap.from(".responsive-headline", {
      opacity: 0,
      duration: 1,
    });
    gsap.from(".headline", {
      opacity: 0,
      y: 20,
    });
    gsap.from(".socialIcons", {
      opacity: 0,
      x: -10,
      stagger: 0.25,
    });
  }, []);

  if (data) {
    var name = data.name;
    var occupation = data.occupation;
    var description = data.description;
    var city = data.address.city;
    var networks = data.social.map(function (network) {
      return (
        <li key={network.name} className="socialIcons">
          <a href={network.url}>
            <i className={`${network.className}`}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Skills
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <span>
              I'm <TypeWriter typing={0.5}>{name && `${name}`}</TypeWriter>
            </span>
          </h1>
          <h3 className="headline">
            <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
