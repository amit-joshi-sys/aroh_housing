import React, { useState } from "react";
import styles from "./styles.module.css";
import config from "../../config.json";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const OurProjects = () => {
  const page = config.ordering.find((page) => page.path === "/our-projects");
  const [selectedProject, setSelectedProject] = useState("");

  const projectsConfig = [
    {
      projectName: "Baner",
      projectLocation: "Baner",
      thumbnail:
        "/aroh_housing/images/baner_site_photos/baner_site_thumbnail.jpg",
      photos: [
        "/aroh_housing/images/baner_site_photos/baner_site_thumbnail.jpg",
        "/aroh_housing/images/baner_site_photos/baner_site_photo1.jpg",
        "/aroh_housing/images/baner_site_photos/baner_site_photo2.jpg",
        "/aroh_housing/images/baner_site_photos/baner_site_photo3.jpg",
        "/aroh_housing/images/baner_site_photos/baner_site_photo4.jpg",
      ],
    },
    {
      projectName: "Karve Nagar",
      projectLocation: "Karve Nagar",
      thumbnail:
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_thumbnail.jpg",
      photos: [
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_thumbnail.jpg",
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_photo1.jpg",
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_photo2.jpg",
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_photo3.jpg",
        "/aroh_housing/images/karve_nagar_site_photos/karve_nagar_photo4.jpg",
      ],
    },
    {
      projectName: "Ghorpadi",
      projectLocation: "Ghorpadi",
      thumbnail:
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_thumbnail.jpg",
      photos: [
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_thumbnail.jpg",
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_photo1.jpg",
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_photo2.jpg",
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_photo3.jpg",
        "/aroh_housing/images/ghorpadi_site_photos/ghorpadi_site_photo4.jpg",
      ],
    },
  ];

  return (
    <div id={page?.id} className={styles.container}>
      <div
        className={`${styles.projectContainer} ${
          selectedProject ? styles.projectContainerSmall : ""
        }`}
      >
        {projectsConfig.map((project) => (
          <div
            className={`${styles.project} ${
              selectedProject ? styles.projectSmall : ""
            }`}
            key={project.projectName}
            onClick={() => setSelectedProject(project.projectName)}
            id={project.projectName}
          >
            <img
              className={`${styles.projectImage} 
                ${
                  selectedProject === project.projectName
                    ? styles.projectImageSelected
                    : ""
                }`}
              src={project.thumbnail}
              alt={project.projectName}
            />
            <p>
              {project.projectName}, {project.projectLocation}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`${styles.photoContainer} ${
          selectedProject ? styles.photoContainerEnter : ""
        }`}
      >
        {selectedProject && (
          <span
            class="material-symbols-outlined"
            onClick={() => setSelectedProject("")}
          >
            close
          </span>
        )}
        {selectedProject && (
          <Carousel
            axis="horizontal"
            showArrows
            className={styles.carousel}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
          >
            {projectsConfig
              .find((project) => project.projectName === selectedProject)
              ?.photos.map((photo) => (
                <img
                  src={photo}
                  alt={selectedProject}
                  className={styles.image}
                />
              ))}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default OurProjects;
