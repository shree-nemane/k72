// src/context/ThemeContext.jsx
import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("white"); // default theme

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`transition-all duration-700 ${theme === "black" ? "bg-black text-white" : "bg-white text-black"}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
