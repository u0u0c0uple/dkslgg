// styled
import styled from 'styled-components';
import { Card, Tag } from '../globalStyles.style';

export const TabAnalyzeLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CenterLayout = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const NoDataLayout = styled.div`
  ${Card}
  width: 70%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & .info {
    font-size: x-large;
    font-weight: bold;
  }
`;

export const AnalyzeCard = styled.div`
  ${Card}
  width: 30%;
  height: fit-content;
  min-height: 470px;
  margin-right: 1%;
  padding-bottom: 1rem;
  text-align: center;

  & .title {
    text-align: start;
  }

  & .analyze-box {
    & img {
      width: 60%;
      margin: 1rem;
      border-radius: 5px;
    }

    & .subtitle {
      margin-top: 0.1rem;

      & p {
        margin: 0.2rem 0.2rem;
        font-size: large;
        font-weight: bold;
      }

      & .lbti {
        color: var(--maincolor-depth1);
      }
    }

    & .tag-box {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      margin: 1rem 0;
      margin-top: 2rem;
    }
  }
`;

export const TagItem = styled.div<{ $bg: string }>`
  ${Tag};
  width: 20%;
  font-size: small;
  background-color: ${(props) => props.$bg};
`;

export const GraphCard = styled.div`
  ${Card}
  width: 60%;
  height: 50vh;
  margin-left: 1%;
  min-height: 470px;

  & .title {
    margin-bottom: 0;
  }

  & .graph-box {
    width: 100%;
    height: 70%;

    & .graph {
      width: 96%;
      height: 90%;
    }

    & .desc {
      width: 70%;
      margin: 0 auto;
      text-align: center;

      & p {
        margin-top: 0;
      }

      & .cluster-name {
        font-size: large;
        font-weight: bold;
      }
    }
  }
`;

export const ChampionCard = styled.div`
  ${Card}
  width: 92%;
  height: 55vh;

  & .champion-box {
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-evenly;

    & .container {
      width: 100px;
      height: 80%;
      margin: 0 auto;
      perspective: 300px;
    }

    & .container .card {
      width: 137px;
      height: 250px;
      border: 1px solid black;
      border-radius: 10px;
      transition: all 0.75s;
      backface-visibility: hidden;
    }

    & .container .card.front {
      position: absolute;
      background-size: cover;
      transform: rotateY(0deg);
    }

    & .container:hover .card.front {
      transform: rotateY(180deg) scale(1.1);
    }

    & .container .card.back {
      padding: 0.3rem;
      box-sizing: border-box;
      text-align: center;
      background-color: #202020;
      color: white;
      transform: rotateY(-180deg);
      font-size: medium;
      fff & .name {
        margin-top: 0.3rem;
        font-size: large;
        font-weight: 600;
      }

      & .tips {
        font-size: small;
      }
    }

    & .container:hover .card.back {
      transform: rotateY(0deg) scale(1.1);
    }
  }
`;

export const FamousCard = styled.div`
  ${Card}
  width: 92%;
  height: 40vh;
  justify-content: center;
  align-items: center;

  & .content-box {
    width: 96%;
    height: 60%;
    display: flex;
    align-items: center;

    & .img {
      flex-basis: 30%;
      height: 96%;
      margin-left: 1rem;

      & img {
        height: 100%;
      }
    }

    & .desc {
      margin-left: 0.5rem;

      & .name {
        font-size: large;
        font-weight: bold;
      }

      & .line {
        font-size: large;
        font-weight: bold;
      }
    }
  }
`;
