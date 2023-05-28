import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes/Routes";
import { themes,ThemeContext } from "./context/theme";

function AppMusick() {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
}

export default AppMusick;
