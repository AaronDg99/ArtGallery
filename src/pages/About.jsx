// src/pages/About.jsx
import React from 'react';
import styles from './About.module.css';
import { FaInstagram, FaPhone } from 'react-icons/fa';

const About = () => {
  return (
    <div className={styles.about}>
      <h2 className={styles.title}>¿Quieres Contactarme?</h2>
      <div className={styles.links}>
        <a href="https://www.instagram.com/yosoy_wiki?igsh=MTg1dXI0c2JwanMzag==" target="_blank" rel="noopener noreferrer" className={styles.link}>
          <FaInstagram size={32} />
          <span className={styles.linkText}>Instagram</span>
        </a>
        <a href="tel:+1234567890" className={styles.link}>
          <FaPhone size={32} />
          <span className={styles.linkText}>+52 4495803708</span>
        </a>
      </div>
    </div>
  );
};

export default About;
