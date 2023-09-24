import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import config from "../../config.json";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    const selectedPage = config.ordering.find(
      (page) => page.path === location.pathname
    );
    if (selectedPage?.headerText) {
      setHeaderText(selectedPage?.headerText);
    } else {
      setHeaderText("");
    }
  }, [location]);

  return (
    <div className={styles.container}>
      <img
        src="/images/aroh_housing_logo.png"
        alt="aroh_housing"
        className={styles.logo}
        onClick={() => navigate("/")}
      />
      {headerText && <h1>{headerText}</h1>}
    </div>
  );
};

export default Header;
