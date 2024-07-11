import React, { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarSlide, setNavbarSlide] = useState(false);

  const handleTitleClick = (event) => {
    event.preventDefault();
    setNavbarSlide(!navbarSlide);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/" onClick={handleTitleClick}>
        Portfolio
      </a>
      <div className={`${styles.menu} ${navbarSlide ? styles.navbarSlide : ""}`}>
        <div
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
