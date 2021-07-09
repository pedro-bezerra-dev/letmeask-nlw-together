import styled from 'styled-components';

export const PageAuth = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    flex: 3;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 3.6rem 'Poppins', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 2.4rem;
      line-height: 32px;
      margin-top: 16px;
      color: #f8f8f8;
    }
  }

  main {
    flex: 5;

    padding: 0 32px;
    display: flex;
    align-items: center;
    justify-content: center;

  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;
    justify-content: center;

    .theme-switcher {
      top: 2.4rem;
      right: 5rem;
    }

    > img {
      align-self: center;
      width: 50%;
    }

    h2 {
      font-size: 2.4rem;
      margin: 64px 0 24px;
      font-family: 'Poppins', sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: ${(props) => props.theme.colors.secondary};
        border: 1px solid #a8a8b3;
      }

      button {
        margin-top: 16px;
      }

      input, button {
        width: 100%;
      }
    }

    p {
      font-size: 1.4rem;
      color: #737380;
      margin-top: 16px;

      a {
        color: #e559f9;
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 500;
    background: #ea4335;
    color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 1.4rem;
    color: #a8a8b3;

    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-right: 16px;
    }

    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  }
}

@media (max-width: 860px) {
  &,
  &.new-room-page {
    flex-direction: column;

    aside {
      padding: 0;
      margin-top: 18rem;

      background: none;
      color: ${(props) => props.theme.colors.font};
      text-align: center;

      gap: 30px;
      flex-direction: column-reverse;

      img {
        max-width: 70%;
        margin-bottom: 3rem;
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
      }

      p {
        color: ${(props) => props.theme.colors.font};
      }
    }

    main {
      align-items: flex-start;
      padding-bottom: 7rem;
    }

    .main-content {
      margin-top: 5rem;

      .theme-switcher {
        top: 1.5rem;
        left: 1.5rem;
      }

      > img {
        position: absolute;
        top: 5rem;
        left: 50vw;
        transform: translateX(-50%);

        width: 16rem;
      }

      button {
        margin: 0;
      }
    }

    &.new-room-page {
      aside {
        flex-direction: column;
        gap: 0;
        flex: 1;

        img {
          display: none;
        }
      }

      .main-content {
        button {
          margin-top: 1.6rem;
        }
      }
    }
  }
}

@media (max-width: 550px) {
  & {
    aside {
      margin-top: 15rem;

      div {
        padding: 0 2rem;
        max-width: 90%;
        align-self: center;

        strong {
          font-size: 3rem;
        }

        p {
          margin-top: 0;
          font-size: 2rem;
        }
      }
    }

    .main-content {
      > img {
        width: 12rem;
      }
    }

    &.new-room-page {
      aside {
        display: none;
      }

      main {
        align-items: center;
      }
    }
  }
`;
