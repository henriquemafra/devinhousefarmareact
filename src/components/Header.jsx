import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { TfiSearch } from "react-icons/tfi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white text-black p-1 shadow-lg">
            <div className="max-w-screen-lg mx-auto px-1 flex justify-between items-center relative ">
                
                    <img className="w-4/12 py-4" src="public\logo\logo.svg" alt="Logo" />
                    <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-black">
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6" />
                    </button>
                </div>
                <nav className={`md:flex ${menuOpen ? "flex-col absolute border-2 rounded-xl top-full py-5 px-5 right-1 mt-1 bg-white md:static md:flex-row md:space-x-4 md:mt-0 md:bg-transparent" : "hidden md:flex"}`}>
                    <a href="/" className="block text-xl mt-9 md:inline-block md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Todos os medicamentos</a>
                    <a href="/sobre" className="block text-xl mt-9 md:inline-block md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Quem somos</a>
                    <a href="/contato" className="block text-xl mt-9 md:inline-block md:text-base md:mx-4" onClick={() => setMenuOpen(false)}>Fale conosco</a>
                </nav>                
            </div>
            <div className="inline-block flex">
                <input className="border-1 flex text-center justify-center h-8 w-64  mx-auto outline-none rounded" type="text" placeholder="O que você deseja encontrar?"></input><TfiSearch />
                </div>
            
        </header>
    );
};

export default Header;
