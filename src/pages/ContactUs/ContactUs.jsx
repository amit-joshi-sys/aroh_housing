import React, { useMemo } from "react";
import styles from "./styles.module.css";
import config from "../../config.json";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const ContactUs = () => {
  const page = config.ordering.find((page) => page.path === "/contact-us");
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });
  // const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div id={page?.id} className={styles.container}>
      <div className={styles.subContainer}>
        {/* <div className={styles.contactForm}>
          <h3>Leave your contact details and we will get back to you</h3>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" className={styles.input} />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                className={styles.input}
              />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="question">Question</label>
              <textarea
                id="question"
                name="question"
                className={styles.input}
              />
            </div>
          </div>
        </div> */}
        {/* {isLoaded && <GoogleMap center={center} zoom={10} />} */}
        <div className={styles.footer}>
          <div className={styles.shape}>
            <div className={styles.contactNumber}>
              <h4>Harsh Raleraskar</h4>
              <p>
                <span class="material-symbols-outlined">call</span>
                8208165800
              </p>
              <p>
                <span class="material-symbols-outlined">mail</span>
                harsh@arohhousing.in
              </p>
            </div>
            <div className={styles.contactNumber}>
              <h4>Address</h4>
              <p className={styles.address}>
                2, Sahil Apartment, United Western Society, Navsahyadri, Pune,
                411052
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
