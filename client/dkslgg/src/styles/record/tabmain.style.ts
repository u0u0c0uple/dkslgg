// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';
// types
import { IhorizenColor, IlineColor } from '@/types/style/types';

export const TabMainLayout = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LeftLayout = styled.div`
  width: 30%;
  min-width: 300px;
  height: 100%;
  min-height: 900px;
  padding-top: 4.3rem;
`;

export const RightLayout = styled.div`
  width: 70%;
  min-width: 700px;
  height: 100%;

  & .rank-type {
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }

  & input {
    margin-left: 1rem;
    appearance: none;
    border: max(2px, 0.1em) solid gray;
    border-radius: 50%;
    width: 1.25em;
    height: 1.25em;
  }

  & input:checked {
    border: max(2px, 0.3em) solid var(--maincolor-depth1);
  }

  & .select-group {
    margin-left: 1.5rem;
    font-size: small;
  }
`;

export const TierCard = styled.div`
  ${Card}
  width: 95%;
  height: fit-content;
  padding-bottom: 1rem;

  & .result-box {
    width: 90%;
    margin: 1rem;
  }

  & .result-box .rank-type {
    margin-left: 1.5rem;
    color: var(--text-gray);
    font-size: medium;
    font-weight: bold;
  }

  & .result-box .rank-detail {
    display: flex;
    align-items: center;

    & img {
      max-width: 140px;
    }
  }

  & .result-box .rank-detail .description {
    margin-left: 1rem;
  }

  & .result-box .rank-detail .description .tier {
    margin: 0;
    font-size: x-large;
    font-weight: bold;
  }

  & .result-box .rank-detail .description .point {
    margin: 0;
    font-size: medium;
    font-weight: 500;
  }
`;

export const DuoCard = styled.div`
  ${Card}
  width: 95%;
  height: fit-content;
  margin-top: 1rem;

  & .title {
    margin-bottom: 0;
  }

  & .duo-table {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
    border-radius: 5px;
    border-collapse: collapse;
  }

  & .duo-table .table-header {
    background-color: #f7f7f9;
    font-size: small;
    font-weight: 500;
  }

  & .duo-table tbody .table-row {
    margin: 0.25rem;
    border-bottom: 2px solid #f7f7f9;
  }

  & .duo-table .table-row .summoner {
    display: flex;
    margin-left: 1rem;
    text-align: start;
  }

  & .duo-table .table-row .summoner p {
    margin: 0;
  }
`;

export const RecentCard = styled.div`
  ${Card}
  width: 95%;
  height: fit-content;
  color: var(--text-gray);
  text-align: center;
  font-size: small;

  & .sub-title {
    font-size: 12pt;
    font-weight: 600;
  }

  & .title {
    color: black;
    margin-bottom: 0;
    text-align: start;
  }

  & .card-body {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem;
    padding-top: 0;
  }

  & .card-body .circle-graph {
    flex-basis: 33%;

    & .sub-title {
      margin-left: 1rem;
      margin-bottom: 0;
    }

    & p {
      text-align: start;
    }

    & .percentage-pie {
      width: 100%;
      height: 75%;
      position: relative;
      display: flex;
      align-items: center;

      & div {
        flex-basis: 50%;
      }

      & p {
        margin-top: 0;
        margin-bottom: 0;
        text-align: center;
        font-size: medium;
      }
      & .kda {
        display: inline-flex;
        font-size: medium;
      }
      & .death {
        color: red;
      }

      & .middle {
        font-size: large;
        font-weight: 600;
      }
    }
  }

  & .card-body .recent-played {
    flex-basis: 33%;

    & .most-champ {
      width: 80%;
      height: 70%;
      display: flex;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 1rem;
      align-items: center;

      & .image {
        max-width: 1.5rem;
        max-height: 1.5rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }

      & p {
        margin: 0;
        margin-left: 0.5rem;
      }
    }
    & .no-record {
      padding-top: 1rem;
      height: 100%;
    }
  }

  & .card-body .favo-position {
    flex-basis: 30%;

    & .position-area {
      width: 90%;
      height: 70%;
      margin-left: auto;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;

      & .line {
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: start;
        align-items: center;
      }

      & .no-record {
        height: 100%;
      }
    }
  }
`;

export const LineGraph = styled.div<IlineColor>`
  width: 70%;
  height: 75%;
  display: flex;
  margin-right: 0.5rem;

  & .gray-area {
    flex-basis: ${(props) => props.$gray}%;
    background-color: #dbe0e4;
  }

  & .blue-area {
    flex-basis: ${(props) => props.$blue}%;
    background-color: #5383e8;
  }
`;

export const RecordTable = styled.div`
  width: 95%;
  height: fit-content;
  margin: 0.5rem auto;

  & .start {
    opacity: 0;
  }

  & .end {
    opacity: 1;
    animation: 0.6s ease-in-out loadEffect;
  }
`;

export const RecordCard = styled.div<{ $win: boolean }>`
  ${Card}
  height: 14vh;
  display: flex;
  margin-bottom: 0;
  border-radius: 0;
  background-color: ${(props) => (props.$win ? `#237ac5` : `#ef3d3d`)};

  & .record-info {
    width: 94%;
    height: 100%;
    display: flex;
    margin-left: 2%;
    background-color: ${(props) => (props.$win ? `#bedaf7` : `#f9c6c6`)};
    font-size: x-small;

    & p {
      margin: 2px;
    }

    & .left-section {
      display: flex;
      flex-basis: 70%;
      text-align: center;

      & .area-1 {
        flex-basis: 20%;
        align-self: center;
        & .win {
          font-size: small;
          font-weight: bold;
          color: ${(props) => (props.$win ? `#237ac5` : `#ef3d3d`)};
        }
      }

      & .area-2 {
        height: 3rem;
        display: flex;
        flex-basis: 20%;
        align-self: center;
        align-items: center;

        & .champ {
          height: 100%;
          display: flex;
          flex-basis: 50%;
          align-items: center;

          & .image {
            margin: auto;
            width: 90%;
          }
        }

        & .another {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          flex-basis: 50%;
          justify-content: space-evenly;

          & .image {
            margin: auto;
            width: 40%;
          }
        }
      }

      & .area-3 {
        flex-basis: 16%;
        justify-content: center;
        align-self: center;

        & .kda {
          display: flex;
          justify-content: center;
          font-size: small;
          font-weight: 600;
        }

        & .red {
          color: red;
        }

        & .tag {
          margin: 1px 0;
        }
      }

      & .area-4 {
        flex-basis: 20%;
        justify-content: center;
        align-self: center;
      }

      & .area-5 {
        display: flex;
        flex-basis: 24%;
        flex-wrap: wrap;
        justify-content: content;
        align-self: center;

        & .image {
          width: 24%;
          margin: 0.5px;
        }
      }
    }

    & .right-section {
      display: flex;
      flex-basis: 30%;
      margin-left: 2rem;
      align-self: center;

      & .team-1 {
        flex-basis: 50%;

        & .image {
          width: 15%;
          height: 90%;
          margin-right: 4px;
        }
      }

      & .team-2 {
        flex-basis: 50%;

        & .image {
          width: 15%;
          height: 90%;
          margin-right: 4px;
        }
      }

      & .summoner {
        display: flex;
      }

      & p {
        margin: 1px 0;
      }
    }
  }

  & .arrow-area {
    width: 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    & .image {
      width: 90%;
    }
  }

  &:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:nth-last-child(2) {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const RecordDetail = styled.div`
  ${Card}
  width: 100%;
  height: fit-content;
  display: flex;
  margin-top: 0;
  padding-bottom: 1.5rem;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transition: all 1s;
`;

export const TeamDetail = styled.div<{ $win: boolean }>`
  width: 50%;
  background-color: ${(props) => (props.$win ? `#F9FBFD` : `#FEF9F9`)};

  & .title {
    width: 100%;
    height: 12.5%;
    display: table;
    margin: 0;
    padding: 0;
    background-color: ${(props) => (props.$win ? `#237ac5` : `#ef3d3d`)};

    & p {
      width: auto;
      height: fit-content;
      margin: auto 0;
      display: table-cell;
      color: white;
      font-size: small;
      font-weight: bold;
      text-align: center;
      vertical-align: middle;
    }
  }

  & .detail-body {
    width: 94%;
    height: 38.14px;
    display: flex;
    align-items: center;
    margin: 0 3%;
    border-bottom: 1px solid #dfdfdf;

    & .area-1 {
      display: flex;
      flex-basis: 33%;
      align-self: center;

      & .champ {
        height: 100%;
        display: flex;
        flex-basis: 25%;
        align-items: center;

        & .image {
          margin: auto;
          width: 90%;
        }
      }

      & .another {
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        flex-basis: 25%;
        justify-content: space-evenly;

        & .image {
          margin: auto;
          width: 40%;
        }
      }

      & .summoner {
        flex-basis: 50%;
        & p {
          margin: 0;
          font-size: xx-small;
        }

        & .name {
          width: 100%;
          b {
            width: 100%;
            height: 11px;
            display: block;
            overflow: hidden;
          }
        }
      }
    }

    & .area-2 {
      display: flex;
      flex-basis: 33%;

      & .desc {
        width: 30%;
        font-size: x-small;
        justify-content: center;
        align-self: center;

        & .kda {
          margin: 0 auto;
          display: flex;
          font-weight: bold;
          justify-content: center;

          & p {
            margin: 0;
          }
        }

        & .score {
          margin: 0;
          text-align: center;
          font-size: xx-small;
        }

        & .red {
          color: red;
        }
      }

      & .result {
        width: 67%;
        height: 100%;
        margin-right: 3%;

        & .text {
          max-height: 20px;
          display: flex;
          justify-content: space-between;

          & p {
            font-size: 4pt;
            margin: 0;
            margin-top: 0.3rem;
          }
        }
      }
    }

    & .area-3 {
      flex-basis: 33%;

      & .item-list {
        width: 100%;
        height: 100%;
        display: flex;
        margin-left: 2%;
        align-items: center;
        justify-content: space-around;

        & .image {
          width: 12.5%;
          height: fit-content;
        }
      }
    }
  }
`;

export const HorizenGraph = styled.div<IhorizenColor>`
  width: 96%;
  height: 30%;
  margin: 0 2%;
  display: flex;

  & .red {
    width: ${(props) => props.$red}%;
    height: 100%;
    background-color: #ff5858;
  }

  & .gray {
    width: ${(props) => props.$gray}%;
    height: 100%;
    background-color: #dbe0e4;
  }
`;
