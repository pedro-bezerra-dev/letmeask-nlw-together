import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  // eslint-disable-next-line react/require-default-props
  isOutlined?: boolean;
}

export function Button({ isOutlined = false, ...props }: ButtonProps): JSX.Element {
  return (
    <ButtonStyled
      type="button"
      className={`button ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  );
}
