import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white text-black shadow-lg fixed top-0 left-0 w-screen">
        <div className="max-w-screen-lg py-4 mx-auto px-4 md:px-8 flex justify-between items-center">
          <img className="w-6/12 md:w-2/12" src="public/logo/logo.svg" alt="Logo" />
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-black">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
          <nav
            className={`lg:shadow-lg md:flex ${menuOpen ? "flex-col absolute shadow-lg border w-full mt-0 top-full py-5 px-5 right-1 mt-1 bg-white md:static md:flex-row md:space-x-4 md:mt-0 md:bg-transparent" : "hidden md:flex"}`}
          >
            <a href="/" className="block text-sm lg:text-sm  md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Todos os medicamentos
            </a>
            <a href="/sobre" className="block text-sm lg:text-sm  md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Quem somos
            </a>
            <a href="/contato" className="block text-sm lg:text-sm  md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Fale conosco
            </a>
          </nav>
        </div>
      </header>
      

    );
};

export default Header;
