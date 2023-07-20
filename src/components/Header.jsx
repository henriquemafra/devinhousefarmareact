import React from "react";

function Header() {
  return (
    <header className="bg-blue-700 text-white">
      <nav className="max-w-screen-lg mx-auto px-4 py-2 flex justify-between items-center">
        <h1 className="text-3xl font-bold underline">
          <a href="medicamentos.html">Todos os medicamentos</a>
        </h1>
        <ul className="flex space-x-4">
          <li className="text-xl">
            <a href="sobre.html">Quem somos</a>
          </li>
          <li className="text-xl">
            <a href="contato.html">Fale conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
