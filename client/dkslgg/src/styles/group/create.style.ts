// styled
import styled from 'styled-components';
// types
import { ILabelForFile } from '@/types/style/types';

export const CreateLayout = styled.div`
  width: 100%;
  min-width: 400px;
  height: 50vh;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .input-area-1 {
    width: 100%;
    height: 40%;
    display: flex;
    flex-basis: 40%;
    justify-content: center;
    text-align: start;

    & .input-image {
      width: 40%;
      flex-basis: 40%;
      margin: 2%;

      & label {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;

        & img {
          width: auto;
          max-width: 110px;
          height: 100%;
          max-height: 110px;
          object-fit: cover;
        }
      }

      & input {
        width: 100%;
        height: 100%;
        display: none;
      }
    }

    & .input-title {
      display: flex;
      flex-direction: column;
      flex-basis: 60%;
      justify-content: end;
      margin: 2%;

      & label {
        font-size: x-large;
        font-weight: bold;
      }

      & input {
        width: 90%;
        height: 2.5rem;
        padding: 10px;
        font-size: large;
        border: 0;
        border-radius: 5px;
        background-color: #f2f2f2;
      }
    }
  }

  & .input-area-2 {
    width: 90%;
    height: 60%;
    max-height: 10vh;
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    justify-content: start;
    text-align: start;
    margin: 5%;
    margin-top: 1rem;

    & .input-description {
      width: 100%;
      height: 100%;

      & label {
        font-size: x-large;
        font-weight: bold;
      }

      & textarea {
        width: 98%;
        height: 100%;
        resize: none;
        overflow-y: auto;
        padding: 15px;
        font-size: large;
        border: 0;
        background-color: #f2f2f2;
      }
    }
  }
`;

export const LabelForFile = styled.label.attrs<ILabelForFile>((props) => ({
  htmlFor: props.$for,
}))`
  width: 100%;
  height: 100%;
`;
