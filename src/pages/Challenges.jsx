// src/pages/Challenges.jsx
import React from 'react';
import styles from './Challenges.module.css';

const challenges = [
  { title: 'Reto 1', description: 'Pintar 24 horas, pared de discos' },
  { title: 'Reto 2', description: 'Le roi de coeur' },
  { title: 'Reto 3', description: 'La notte di sole' },
  { title: 'Reto 4', description: 'The Mars' },
  { title: 'Reto 5', description: 'Raining' },
  { title: 'Reto 6', description: 'HarryPotter' },
  { title: 'Reto 7', description: 'Restauración de Mueble' },
  { title: 'Reto 8', description: 'Diseños personalizados' },
];

const Challenges = () => {
  return (
    <div className={styles.challenges}>
      <h2 className={styles['challenges-title']}>Retos</h2>
      <br />
      <div className={styles['challenges-grid']}>
        {challenges.map((challenge, index) => (
          <div key={index} className={styles['challenge-card']}>
            <div className={styles['challenge-title']}>{challenge.title}</div>
            <br />
            <br />
            <br />
            <div className={styles['challenge-description']}>{challenge.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Challenges;
