import React from "react";
import styles from "./App.module.css";

const SinglePortfolio = ({ img, des, title, className }) => {
  return (
    <div className={`${styles.singleItem} ${className}`}>
      <img src={img} />
      <div className={styles.ItemDetails}>
        <h2>{title}</h2>
        <h3> {des} </h3>
      </div>
    </div>
  );
};

export default SinglePortfolio;
