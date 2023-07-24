import './index.css';

import React, { useContext } from "react";
import { ThemeContext } from './components/context/ThemeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import Header from './components/header';
import Search from './components/search';
import Slider from './components/Slider';
import DarkMode from './components/DarkMode';
import Footer from './components/router/Footer';
import Newsletter from './components/Newsletter';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
       <div className={`App ${theme === "Dark" ? "dark-theme add-button" : ""}`}>
        <Header />
        <Outlet />
        <Newsletter />
        <Footer />
        <DarkMode />
      </div>
  );
}

export default App;
