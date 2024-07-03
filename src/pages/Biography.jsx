import React from 'react';
import styles from './Biography.module.css';
import profileImage from '../../public/images/profile.jpeg'; // Ajusta la ruta según la estructura de tu proyecto

const Biography = () => {
  return (
    <div className={`h-screen flex justify-center items-center ${styles.biography}`}>
      <div className="flex w-full max-w-4xl p-4">
        <div className="w-1/2 p-4 flex flex-col justify-center">
          <h2 className={`text-4xl font-bold text-center md:text-left ${styles.title}`}>Soy Vanessa Saucedo</h2>
          <p className="text-lg mt-4 text-center md:text-left">
            Vanessa Alejandra Saucedo de Aanda. Nací el 16 de abril de 1999 en Aguascalientes.
          </p>
          <p className="text-lg mt-4 text-center md:text-left">
            Arquitecta y en mis tiempos libres artista, porque "pintar es otra manera de llevar un diario". Desde muy pequeña me llamo la atención cualquier tipo de arte, y descubrí que tenía facilidad para dibujar. Con el tiempo aprendí a usar algunas técnicas como el Acrílico y el óleo sobre lienzo, siempre sintiéndome atraída hacia el bello arte de la pintura; la música influyó mucho en cómo pintaba, pues estas dos cosas siempre han estado para mí en momentos difíciles.
            <br />
            <br />
            Hace 9 años pinté mi primer cuadro profesional y mis familiares y amigos me convencieron de seguir pintando ya que vieron que tenía habilidad y era algo que me hace feliz. Comencé con "retos" pequeños hasta irme con cuadros más complejos con el fin de salir de mi zona de confort, siempre retándome y disfrutando del proceso. El óleo y el acrílico son mis mayores hobbies y seguiré tratando de mejorar poco a poco con la ayuda de mis seres queridos.
          </p>
        </div>
        <div className="w-1/2 p-4 flex justify-center items-center">
          <img src={profileImage} alt="Profile" className="max-w-full h-auto rounded-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Biography;
