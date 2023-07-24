import React, { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="shadow-lg bg-white fixed top-0 left-0 w-screen">
        <div className="max-w-screen-lg py-4 mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/">
          <img className="w-6/12 md:w-6/12" src="public/logo/logo.svg" alt="Logo" />
          </Link>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
            </button>
          </div>
          <nav
            className={` md:flex ${menuOpen ? "flex-col  absolute mobile-menu bg-white text-black w-full mt-0 top-full py-5 px-6 right-0 mt-0 md:static md:flex-row md:space-x-4 md:mt-0 " : "hidden md:flex"}`}
          >
            <a href="/medicamentos" className="block text-sm lg:text-sm mt-2 md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Todos os medicamentos
            </a>
            <a href="/loginpage" className="block text-sm lg:text-sm mt-2 md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Quem somos
            </a>
            <a href="/loginpage" className="block text-sm lg:text-sm mt-2 md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
            <a href="/loginpage" className="block text-sm lg:text-sm mt-2 md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
             <button className="border border-black px-1 rounded">Entrar</button>
            </a>
            <span className="hidden sm:block">|</span>
            <a href="/signup" className="block text-sm lg:text-sm mt-2 md:inline-block md:text-sm md:mx-1" onClick={() => setMenuOpen(false)}>
             <button className="border border-black px-1 rounded">Cadastrar</button>
            </a>
                    
            </nav>
        </div>
      </header>
      

    );
};

export default Header;
