import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md">
    <div className="max-w-screen-lg mx-auto px-4 py-2 flex justify-between items-center">
      <img className="w-1/4 py-4" src="public\logo\logo.svg" alt="Logo" />
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-black">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
        </button>
      </div>
      <nav className={`md:flex ${menuOpen ? "flex flex-col md:flex-row" : "hidden md:flex"}`}>
        <a href="/" className="block md:inline-block text-xl md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Todos os medicamentos</a>
        <a href="/sobre" className="block md:inline-block text-xl md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Quem somos</a>
        <a href="/contato" className="block md:inline-block text-xl md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Fale conosco</a>
      </nav>
    </div>
  </header>


  );
};

export default Header;
