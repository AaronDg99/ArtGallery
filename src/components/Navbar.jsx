import React from 'react';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Link to="banner" smooth={true} duration={500}>
            <button className={styles.navButton}>Banner</button>
          </Link>
        </li>
        <li>
          <Link to="biography" smooth={true} duration={500}>
            <button className={styles.navButton}>Biography</button>
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500}>
            <button className={styles.navButton}>Gallery</button>
          </Link>
        </li>
        <li>
          <Link to="challenges" smooth={true} duration={500}>
            <button className={styles.navButton}>Challenges</button>
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            <button className={styles.navButton}>About</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
