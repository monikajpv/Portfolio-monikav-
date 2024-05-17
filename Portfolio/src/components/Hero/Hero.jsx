import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Monika</h1>
        <p className={styles.description}>
          I'm fresher, Completed an JAVA Fullstack internship & currently looking for an opportunity where I can make the best of my potential and contribute to the organization's growth.
        </p>
        <a href="mailto:monikavishwa16@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/monikav.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
