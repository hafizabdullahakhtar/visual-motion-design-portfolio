import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [additionalSetting, setAdditionalSetting] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    console.log(`Switched to ${newTheme} Mode`);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, additionalSetting, setAdditionalSetting }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
