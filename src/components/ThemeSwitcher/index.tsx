import { HTMLAttributes } from 'react';
import cn from 'classnames';

import { useTheme } from '../../hooks/useTheme';

import { ThemeSwitcherStyled } from './styles';

import lightModeIcon from '../../assets/images/light-mode.svg';
import darkModeIcon from '../../assets/images/dark-mode.svg';

type ThemeSwitcherProps = HTMLAttributes<HTMLButtonElement>

export function ThemeSwitcher(props: ThemeSwitcherProps): JSX.Element {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeSwitcherStyled
      type="button"
      aria-label="Trocar tema"
      onClick={toggleTheme}
      className={cn(
        'theme-switcher',
        { light: theme.title === 'light' },
        { dark: theme.title === 'dark' },
      )}
      {...props}
    >
      <div>
        <img src={lightModeIcon} alt="Alterar para tema claro" className="light-icon" />
        <img src={darkModeIcon} alt="Alterar para tema escuro" className="dark-icon" />
      </div>
    </ThemeSwitcherStyled>
  );
}
