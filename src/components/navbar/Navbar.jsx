import React, { useState }from 'react';
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css"

const Navbar = () => {
const [toggleMenu, setToggleMenu] = useState (false);

  // Funktion, um zu einem bestimmten Abschnitt zu scrollen
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setToggleMenu(false); // Schließe das Menü nach dem Klicken auf einen Link
  };
  
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links-container">
          <p onClick={() => scrollToSection("header")}>HOME</p>
          <p onClick={() => scrollToSection("short")}>WORK</p>
          <p onClick={() => scrollToSection("long")}>CLIENTS</p>
          <p onClick={() => scrollToSection("contact")}>CONTACT</p>
        </div>
        <div className="navbar-menu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="navbar-menu-container scale-up-center">
              <div className="navbar-menu-container-links">
                <p onClick={() => scrollToSection("header")}>HOME</p>
                <p onClick={() => scrollToSection("short")}>WORK</p>
                <p onClick={() => scrollToSection("long")}>CLIENTS</p>
                <p onClick={() => scrollToSection("contact")}>CONTACT</p>
              </div>
            </div>
          )}
        </div>
      </div> 
    </div>
  )
}

export default Navbar
