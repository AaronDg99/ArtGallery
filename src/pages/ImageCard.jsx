// src/components/ImageCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const ImageCard = ({ image }) => {
  return (
    <motion.div
      className="image-card"
      whileHover={{ scale: 1.1 }}
    >
      <img src={image.url} alt={image.title} />
      <h3>{image.title}</h3>
    </motion.div>
  );
};

export default ImageCard;
