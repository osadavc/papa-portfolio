import React, { useEffect, useRef } from "react";
import styles from "./App.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;

    var skills = data.skills.map(function (skills) {
      var className = "bar-expand " + skills.name.toLowerCase();
      return (
        <li key={skills.name}>
          <span style={{ width: skills.level }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
  }

  let headlineRef = useRef();

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#resume",
        start: "top 80%",
      },
    });

    tl.from(headlineRef, {
      y: -100,
      opacity: 0,
    }).from(".singleTool", {
      opacity: 0,
      stagger: 0.25,
      y: -10,
    });
  }, []);

  return (
    <section id="resume">
      <div className="row">
        <h2 className={styles.heading} ref={(el) => (headlineRef = el)}>
          My skills and the tools that I use
        </h2>

        <div className={styles.toolGrid}>
          <img
            src="/images/skills/react.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/next.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/js.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/vscode.jpg"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/html.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/css.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/scss.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/photoshop.png"
            className={`${styles.singleTool} singleTool`}
          />
          <img
            src="/images/skills/xd.png"
            className={`${styles.singleTool} singleTool`}
          />
        </div>
      </div>
    </section>
  );
};

export default Resume;
