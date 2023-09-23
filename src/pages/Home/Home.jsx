import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import config from "../../config.json";

const Home = () => {
  const page = config.ordering.find((page) => page.path === "/");
  const [activeBannerConfig, setActiveBannerConfig] = useState({
    text: "Exceptional Home Remodeling and Renovations",
    image: "/images/home_bg_1.jpg",
    id: 1,
  });

  const bannerConfig = [
    {
      text: "Exceptional Home Remodeling and Renovations",
      image: "/images/home_bg_1.jpg",
      id: 1,
    },
    {
      text: "Great Interiors",
      image: "/images/home_bg_2.jpg",
      id: 2,
    },
  ];

  return (
    <div id={page.id} className={styles.container}>
      <div className={styles.content}>
        <img
          id="carouselImage"
          className={styles.carouselImage}
          src={activeBannerConfig.image}
          alt={activeBannerConfig.text}
        />
        <h1 className={styles.carouselText}>{activeBannerConfig.text}</h1>
      </div>
    </div>
  );
};

export default Home;
