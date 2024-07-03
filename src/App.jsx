import React from 'react';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Banner from './pages/Banner';
import Biography from './pages/Biography';
import Gallery from './pages/Gallery';
import Challenges from './pages/Challenges';
import About from './pages/About';
import './styles/global.css';  // Archivo global para estilos generales

function App() {
  return (
    <div className="app">
      <Navbar />
      <Element name="banner">
        <Banner />
      </Element>
      <Element name="biography">
        <Biography />
      </Element>
      <Element name="gallery">
        <Gallery />
      </Element>
      <Element name="challenges">
        <Challenges />
      </Element>
      <Element name="about">
        <About />
      </Element>
    </div>
  );
}

export default App;
