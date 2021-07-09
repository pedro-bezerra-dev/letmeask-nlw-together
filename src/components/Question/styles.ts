import styled from 'styled-components';

export const QuestionStyled = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  padding: 24px;

  p {
    color: #29292e;
  }

  & + .question {
    margin-top: 8px;
  }

  &.highlighted {
    background: #f4f0ff;
    border: 1px solid #835afb;

    footer .user-info span {
      color: #29292e;
    }
  }

  &.answered {
    background: #dbdcdd;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;

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
        color: #43434C;
        font-size: 1.4rem;
      }
    }

    > div {
      display: flex;
      gap: 16px;
    }

    button {
      border: 0;
      background: transparent;
      cursor: pointer;

      transition: filter 0.2s;

      &.like-button {
        display: flex;
        align-items: flex-end;
        color: #43434C;
        gap: 8px;

        &.liked {
          color: #835afb;

          svg path {
            stroke: #835afb;
          }
        }

        &:hover {
          filter: brightness(0.7);
        }
      }
    }
  }
`;
