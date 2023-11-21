import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');
  const [highContrast, setHighContrast] = useState(false);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, highContrast, setHighContrast}}>
      {children}
    </ThemeContext.Provider>
  );
};
