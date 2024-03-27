// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const LbtiTestLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const TestContainer = styled.div`
  width: 80%;
  max-width: 826px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 12.5vh;
  background-color: inherit;
  text-align: center;
  height: 87.5vh;

  & .test-box {
    ${Card}
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .question-box {
      margin-top: 8vh;

      & .question {
        font-size: x-large;
        font-weight: bold;
        margin-top: 1vh;
      }
    }

    & .radio-box {
      width: 80%;
      margin: 5vh;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      color: var(--text-gray);

      & input {
        margin-top: 2vh;
        appearance: none;
        border: max(2px, 0.1em) solid gray;
        border-radius: 50%;
        width: 1.25em;
        height: 1.25em;
      }

      & input:checked {
        border: max(2px, 0.4em) solid var(--maincolor-depth1);
      }
    }

    & .btn-box {
      width: 70%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8vh;

      & .prev-btn,
      .next-btn,
      submit-btn {
        width: fit-content;
      }

      .next-btn:disabled,
      .submit-btn:disabled {
        width: fit-content;
        background-color: var(--maincolor-depth2);
      }
    }
  }
`;
