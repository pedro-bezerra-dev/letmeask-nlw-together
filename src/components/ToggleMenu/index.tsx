import { HTMLAttributes, ReactNode, useState } from 'react';
import cn from 'classnames';

import { ToggleMenuStyled } from './styles';

type ToggleMenuProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function ToggleMenu({ children }: ToggleMenuProps): JSX.Element {
  const [buttonItsOpen, setButtonItsOpen] = useState(false);

  if (buttonItsOpen) {
    window.document.getElementsByTagName('body')[0].style.overflow = 'hidden';
  } else {
    window.document.getElementsByTagName('body')[0].style.overflow = 'auto';
  }

  return (
    <ToggleMenuStyled
      className={cn(
        'toggle-menu',
        { open: buttonItsOpen },
      )}
    >
      <strong>Menu</strong>
      <button
        type="button"
        aria-label="menu"
        onClick={() => (buttonItsOpen ? setButtonItsOpen(false) : setButtonItsOpen(true))}
      >
        <div />
      </button>
      <div className="content">
        {children}
      </div>
    </ToggleMenuStyled>
  );
}
