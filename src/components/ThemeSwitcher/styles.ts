import styled from 'styled-components';

export const ThemeSwitcherStyled = styled.button`
  background: ${(props) => props.theme.colors.font};
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 15px;
  width: 6rem;
  height: 3rem;
  padding: .2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  transition: .2s;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    position: relative;

    border-radius: 15px;

    width: 100%;
    height: 100%;

    img {
      position: absolute;

      height: 2rem;
    }

    .light-icon {
      left: 1px;
    }

    .dark-icon {
      right: 1px;
    }
  }

  &::before {
    content: '';
    width: 2.2rem;
    height: 2.2rem;
    position: absolute;
    left: .2rem;
    border-radius: 15px;
    background: ${(props) => props.theme.colors.background};
  }

  &.light::before {
    animation: moveToLeft .2s linear forwards;
  }

  &.dark::before {
    animation: moveToRight .2s linear forwards;
  }

  @keyframes moveToLeft {
    from {
      transform: translateX(3rem);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes moveToRight {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(3rem);
    }
  }
`;
