// styled
import styled from 'styled-components';
import { Card, Tag } from '../globalStyles.style';

export const LbtiResultLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const ResultContainer = styled.div`
  width: 80%;
  max-width: 826px;
  height: 100%;
  display: flex;
  align-items: flex-start;
  margin-top: 12.5vh;
  background-color: inherit;
  text-align: center;
  height: 87.5vh;

  & .result-box {
    ${Card}
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
      height: 40vh;
      margin: 2vh 0;
    }

    & .result-title {
      font-size: xx-large;
      font-weight: bold;
      margin-bottom: 2vh;
    }
    & .result-content {
      margin-top: 5vh;
      font-size: 1.3rem;
    }

    & .tag-box {
      display: flex;
      justify-content: space-around;
      margin: 0 0.5rem;
      margin-bottom: 1rem;
    }

    & .description-content {
      width: 60%;
      margin-bottom: 5vh;
      text-align: left;
      white-space: pre-line;
      line-height: 1.5rem;
    }

    & button {
      margin-bottom: 1rem;
    }
  }
`;

export const TagItem = styled.div<{ $bg: string }>`
  ${Tag};
  background-color: ${(props) => props.$bg};
  margin-right: 0.5rem;
`;
