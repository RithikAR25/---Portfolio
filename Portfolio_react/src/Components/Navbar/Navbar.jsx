/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // This will make the scrolling smooth
    });
  };

  return (
    <>
        <nav className={styles.Navbar}>
            <span onClick={scrollToTop} className={styles.name}>
              Rithik Ramachandran
            </span>
            <ul className={styles.nav__item}>
                <li className={styles.nav__item}><a href="#about" className="nav__link">About</a></li>
                <li className={styles.nav__item}><a href="#skills" className="nav__link">Skills</a></li>
                <li className={styles.nav__item}><a href="#project" className="nav__link">Projects</a></li>
                <li className={styles.nav__item}><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
