import React, { useEffect } from "react";
import Home from "./Home/Home";
import OurProjects from "./OurProjects/OurProjects";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";
import config from "../config.json";
import SideMenu from "./SideMenu/SideMenu";
import Header from "./Header/Header";

const Pages = () => {
  const location = useLocation();

  useEffect(() => {
    const pageToScroll = config.ordering.find((page) => {
      const finalPathName = location.pathname.replace("/aroh_housing", "");
      return page.path === finalPathName || "/";
    });
    console.log(pageToScroll, location);
    const pageElement = document.getElementById(pageToScroll.id);
    pageElement.scrollIntoView({ behavior: "smooth" });
  }, [location]);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Aroh Housing";
        break;
      case "/our-projects":
        document.title = "Aroh Housing | Projects";
        break;
      case "/about-us":
        document.title = "Aroh Housing | About US";
        break;
      case "/contact-us":
        document.title = "Aroh Housing | Contact Us";
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <div className={styles.mainContainer}>
      <Header />
      <SideMenu />
      <Home />
      <OurProjects />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Pages;
