import React from "react";
import styles from "./styles.module.css";
import config from "../../config.json";

const AboutUs = () => {
  const page = config.ordering.find((page) => page.path === "/about-us");

  return (
    <div id={page?.id} className={styles.container}>
      <div className={styles.sectionsContainer}>
        <h3>Our Founders</h3>
        <div className={styles.sectionContainer}>
          <div className={styles.infoCard}>
            <img
              src="/images/founder_photo_1.JPEG"
              alt="harsh_raleraskar"
              className={styles.founderImage}
            />
            <p>Harsh Raleraskar</p>
            <p>Civil Engineer</p>
          </div>
          <div className={styles.infoCard}>
            <img
              src="/images/founder_photo_2.JPEG"
              alt="harsh_raleraskar"
              className={styles.founderImage}
            />
            <p>Amruta Raleraskar</p>
            <p>Interior Designer</p>
          </div>
        </div>
        <h3>Our Services</h3>
        <div className={styles.sectionContainer}>
          <ul>
            <li>Site evaluation and consultation</li>
            <li>Budget and estimation</li>
            <li>Concept Drawing</li>
            <li>Precise planning</li>
            <li>Suggestions in material selection</li>
            <li>Execution</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
