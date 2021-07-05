import { HTMLAttributes } from 'react';

import { ThemeSwitcherStyled } from './styles';

import lightModeIcon from '../../assets/images/light-mode.svg';
import darkModeIcon from '../../assets/images/dark-mode.svg';

type ThemeSwitcherProps = HTMLAttributes<HTMLButtonElement>

export function ThemeSwitcher(props: ThemeSwitcherProps): JSX.Element {
  return (
    <ThemeSwitcherStyled type="button" aria-label="Trocar tema" {...props}>
      <img src={lightModeIcon} alt="Alterar para tema claro" />
      <img src={darkModeIcon} alt="Alterar para tema escuro" />
    </ThemeSwitcherStyled>
  );
}
