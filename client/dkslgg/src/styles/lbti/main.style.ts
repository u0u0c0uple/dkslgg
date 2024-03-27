// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const LbtiMainLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const MainContainer = styled.div`
  width: 80%;
  max-width: 826px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 12.5vh;
  background-color: inherit;
  text-align: center;
  height: 87.5vh;

  & .main-box {
    ${Card}
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .main-title {
      font-size: xx-large;
      font-weight: bold;
      margin: 5vh 0;
    }
    & .icon-box {
      & img {
        margin-right: 1rem;
        margin-bottom: 5vh;
        height: 15%;
      }
      & img:last-child {
        margin-right: 0;
      }
    }

    & button {
      margin-top: 3vh;
      margin-bottom: 5vh;
    }
  }
`;
