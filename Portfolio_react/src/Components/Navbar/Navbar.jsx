/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <nav className={styles.Navbar}>
        <span onClick={scrollToTop} className={styles.name}>
          Rithik Ramachandran
        </span>
        <button className={styles.menu__icon} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`${styles.nav__items} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.nav__item}>
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#skills" className="nav__link">Skills</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#project" className="nav__link">Projects</a>
          </li>
          <li className={styles.nav__item}>
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;