import React from 'react';
import styles from './Banner.module.css';
import BannerCarousel from '../components/BannerCarousel';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <BannerCarousel />
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Welcome to the Wiki's Art Gallery</h1>
      </div>
    </div>
  );
};

export default Banner;
