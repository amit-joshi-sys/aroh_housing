import React from "react";
import styles from "./styles.module.css";
import config from "../../config.json";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onOptionClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.optionsContainer}>
        {config.ordering.map((page) => (
          <div key={page.path} className={styles.optionContainer}>
            <button
              role="link"
              className={`${styles.option} ${
                (location.pathname.replace("/aroh_housing", "") || "/") ===
                page.path
                  ? styles.optionActive
                  : ""
              }`}
              onClick={() => onOptionClick(page.navigateTo)}
            >
              <span class="material-symbols-outlined">{page.iconName}</span>
              <p>{page.name}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
