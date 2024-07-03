// src/pages/Gallery.jsx
import React from 'react';
import styles from './Gallery.module.css';

const images = [
  { src: '/images/cuadro1.jpeg', alt: 'Cuadro 1', title: 'Harry Potter', description: 'Diseño elaborado a petición de un cliente que tenía la idea de que le hiciera una versión de Harry Potter pero colorida, 60x70 cm' },
  { src: '/images/cuadro2.jpeg', alt: 'Cuadro 2', title: 'Cases', description: '⭑iphone 15 Diseño, personalizado, 2024' },
  { src: '/images/cuadro3.jpeg', alt: 'Cuadro 3', title: 'El mueble de los recuerdos de wiki parte 1', description: 'Este mueblecito perteneció a la familia de wiki, estaba en una casa familiar y dudaba si darle una oportunidad, no sabía lo que iba a encontrar debajo de esa pintura café que estaba en muy mal estado. Lijar este baúl fue misión imposible, estas pinturas antiguas son súper fuertes y cuesta mucho levantarlas, así que solo lime un poco y prosegui con la pintura que cubría muy bien.' },
  { src: '/images/cuadro4.jpeg', alt: 'Cuadro 4', title: 'El mueble de los recuerdos de wiki parte 2', description: 'Pero el resultado ha merecido la pena y ahora este mueble es luz pura, su madera imperfecta, llena de nudos y envejecida por el paso del tiempo es maravillosa' },
  { src: '/images/cuadro6.jpeg', alt: 'Cuadro 6', title: 'The Mars', description: 'RETO personal a la pequeña Wiki que llevo dentro, de esta obra resaltan los matices, 63 x 74cm, Beneficiarios: Asociacion Piltzintli Diabetes tipo.1' },
  { src: '/images/cuadro7.jpeg', alt: 'Cuadro 7', title: 'La notte di sole', description: '⭑1m x 80cm, Acrílico y óleo sobre lienzo, La obra "La notte di sole" fue, un reto ya que la obra original, tiene un estilo único así que, quise darle un toque personal, De esta obra resalta la distribución de los colores azules, blancos y amarillos y también está hecha con mucho amor.' },

];

const Gallery = () => {
  return (
    <div className={styles.gallery}>
      <h2 className={styles['gallery-title']}>Galería</h2>
      <div className={styles['gallery-grid']}>
        {images.map((image, index) => (
          <div key={index} className={styles['gallery-item']}>
            <img src={image.src} alt={image.alt} />
            <div className={styles['gallery-item-content']}>
              <div className={styles['gallery-item-title']}>{image.title}</div>
              <div className={styles['gallery-item-description']}>{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
