import styled from 'styled-components';

export const ToggleMenuStyled = styled.div`
  position: relative;
  transition: all .2s;

  strong {
    display: none;
  }

  > button {
    transition: all .2s;

    background: none;
    border: none;
    height: 25px;

    div {
      width: 30px;
      height: 3px;
      border-radius: 5px;
      background: #835afb;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        background: #835afb;
        width: 30px;
        height: 3px;
        border-radius: 5px;
      }

      &::before {
        top: -7px;
        left: 0;
      }

      &::after {
        top: 7px;
        left: 0;
      }
    }
  }

  .content {
    display: none;
  }

  &.open {
    background: ${(props) => props.theme.colors.primary};
    z-index: 5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      display: initial;
      font-size: 3.4rem;
      color: ${(props) => props.theme.colors.secondary};
      transform: translateY(-50px);
    }

    > button {
      position: absolute;
      top: 2.4rem;
      right: 3.6rem;
      transform: translateY(40%);

      div {
        height: 0;

        &::before {
          rotate: 45deg;
          transform: translateX(5px) translateY(5px);
          background: ${(props) => props.theme.colors.secondary};
        }

        &::after {
          rotate: -45deg;
          transform: translateX(5px) translateY(-5px);
          background: ${(props) => props.theme.colors.secondary};
        }
      }
    }

    .content {
      display: flex;
      align-items: stretch;
      flex-direction: column;

      width: 80%;
      gap: 3rem;
    }
  }
`;
