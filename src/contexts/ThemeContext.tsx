import { useState, ReactNode, createContext } from 'react';

import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

type Theme = {
  title: string;

  colors: {
    primary: string;
    background: string;
    font: string;
  }
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void;
}

type ThemeContextProviderProps = {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextType);

export function ThemeContextProvider({ children }: ThemeContextProviderProps): JSX.Element {
  const [theme, setTheme] = useState(light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  );
}
