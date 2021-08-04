import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";
import SinglePortfolio from "./SinglePortfolio";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = ({ data }) => {
  if (data) {
    var projects = data.projects.map(function (projects) {
      var projectImage = "images/portfolio/" + projects.image;
      return (
        <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon">
                <i className="fa fa-link"></i>
              </div>
            </a>
          </div>
        </div>
      );
    });
  }

  let headlineRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%",
      },
    });

    tl.from(headlineRef, {
      y: -100,
      opacity: 0,
    })
      .from(
        ".itemOne",
        {
          x: -200,
          opacity: 0,
        },
        "-=0.5"
      )
      .from(
        ".itemTwo",
        {
          x: 200,
          opacity: 0,
        },
        "-=0.1"
      )
      .from(
        ".itemThree",
        {
          x: -200,
          opacity: 0,
        },
        "-=0.1"
      );
  }, []);

  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1 className={styles.heading} ref={(el) => (headlineRef = el)}>
            Check Out Some of My Works.
          </h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <SinglePortfolio
              img="/images/portfolio/whatsapp.png"
              title="Whatsapp Clone"
              des="A fully functional clone of Whatsapp"
              className="itemOne"
            />
            <SinglePortfolio
              img="/images/portfolio/facebook.png"
              title="Facebook Clone"
              des="A fully functional clone of Facebook"
              className="itemTwo"
            />
            <SinglePortfolio
              img="/images/portfolio/amazon.png"
              title="Amazon Clone"
              des="A fully functional clone of Amazon"
              className="itemThree"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
