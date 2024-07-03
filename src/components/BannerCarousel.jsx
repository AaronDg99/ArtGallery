import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importar los estilos del carrusel
import styles from './BannerCarousel.module.css';

const BannerCarousel = () => {
  return (
    <div className={styles.carouselContainer}>
      <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false}
        showArrows={false}
        interval={5000}
      >
        <div>
          <img src="/images/banner1.jpeg" alt="Banner 1" />
        </div>
        <div>
          <img src="/images/banner2.jpeg" alt="Banner 2" />
        </div>
        <div>
          <img src="/images/banner3.jpeg" alt="Banner 3" />
        </div>
        <div>
          <img src="/images/banner4.jpeg" alt="Banner 4" />
        </div>
      </Carousel>
    </div>
  );
};

export default BannerCarousel;
