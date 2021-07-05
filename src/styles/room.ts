import styled from 'styled-components';

export const PageRoom = styled.div`
  header {
    padding: 24px 36px;
    border: 1px solid #e2e2e2;

    .content {
      max-width: 1120px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      > img {
        max-height: 45px;
      }

      > div {
        display: flex;
        gap: 16px;

        .button {
          height: 40px;
          padding: 0 32px;
        }
      }

      .toggle-menu {
        display: none;
      }
    }
  }

  main {
    max-width: 800px;
    margin: 0 auto;

    .room-title {
      margin: 32px 0 24px;
      display: flex;
      align-items: center;

      h1 {
        font-family: 'Poppins', sans-serif;
        font-size: 2.4rem;
        color: #29292e;
      }

      span {
        margin-left: 16px;
        background: #e559f9;
        border-radius: 200px;
        padding: 8px 16px;
        color: #fff;
        font-weight: 500;
        font-size: 1.4rem;
      }
    }

    form {
      textarea {
        width: 100%;
        border: 0;
        padding: 16px;
        border-radius: 8px;
        background: #fefefe;
        box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        resize: vertical;
        min-height: 130px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 16px;

        .user-info {
          display: flex;
          align-items: center;

          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
          }

          span {
            margin-left: 8px;
            color: #29292e;
            font-weight: 500;
            font-size: 1.4rem;
          }
        }

        > span {
          font-size: 1.4rem;
          color: #737380;
          font-weight: 500;

          button {
            background: transparent;
            border: none;
            color: #835afd;
            text-decoration: underline;
            font-size: 1.4rem;
            font-weight: 500;
            cursor: pointer;
          }
        }
      }
    }

    .questions-list {
      margin: 32px 0 20px;
    }
  }

  &.blocked {
    width: 100vw;
    height: 100vh;
    background: #dbdcdd;

    display: flex;
    align-items: center;
    justify-content: center;

    main {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      padding: 30px;
      background: #fff;
      border: 1px solid #835afb;
      border-radius: 8px;

      img {
        width: 50%;
        align-self: center;
        margin-bottom: 20px;
      }

      p {
        align-self: center;
        text-align: center;
        width: 80%;
        margin-bottom: 20px;
      }
    }
  }

@media (max-width: 860px) {
  header > .content {
    > button {
      display: none;
    }

    .toggle-menu {
      display: flex;
    }
  }

  main {
    width: 80%;

    .room-title {
      justify-content: space-between;
    }

    form {
      .form-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;

        button {
          width: 100%;
        }
      }
    }

    .questions-list {
      .user-info {
        gap: 1rem;

        span {
          margin: 0;
        }
      }

      .question footer div:nth-child(2) {
        gap: 10px;
      }
    }
  }
}
`;
