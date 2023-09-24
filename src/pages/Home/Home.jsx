import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import config from "../../config.json";
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  const page = config.ordering.find((page) => page.path === "/");
  const [activeBannerConfig, setActiveBannerConfig] = useState(0);

  const bannerConfig = [
    {
      text: "Exceptional Home Remodeling and Renovations",
      image: "/aroh_housing/images/home_bg_1.jpg",
      id: 1,
    },
    {
      text: "Great Interiors",
      image: "/aroh_housing/images/home_bg_2.jpg",
      id: 2,
    },
  ];

  return (
    <div id={page?.id} className={styles.container}>
      <div className={styles.content}>
        <Carousel
          axis="horizontal"
          showArrows={false}
          infiniteLoop
          className={styles.carousel}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={3000}
          stopOnHover={false}
          autoPlay
        >
          {bannerConfig.map((config) => (
            <div className={styles.content}>
              <img
                id="carouselImage"
                className={styles.carouselImage}
                src={config.image}
                alt={config.text}
              />
              <h1 className={styles.carouselText}>{config.text}</h1>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
