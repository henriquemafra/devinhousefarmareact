import React, {useContext} from "react";
import { ThemeContext } from './context/ThemeContext';

function DarkMode() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>
          <a
            className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => setMenuOpen(false)}
          >
            <button onClick={toggleTheme}>Tema</button>
          </a>
        </>
      );
}

export default DarkMode