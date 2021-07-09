import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

type Theme = {
  title: string;

  colors: {
    primary: string;
    secondary: string;
    background: string;
    font: string;
    border: string;
  }
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void;
}

export function useTheme(): ThemeContextType {
  const value = useContext(ThemeContext);

  return value;
}
