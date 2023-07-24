// App.js

import './index.css'
import './App.css'
import Header from './components/header'
import Medicamentos from './components/Medicamentos'
import Search from './components/search'
import { ThemeContext } from './components/context/ThemeContext';
import React, { useContext } from "react";

function App() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme === "Dark" ? "dark-theme add-button" : ""}`}>
        <Header />
        <Search />
        <Medicamentos />
        <button onClick={toggleTheme}>MUDAR</button>
      </div>
    
  );
}

export default App;
