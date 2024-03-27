// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const DetailLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  width: 80%;
  max-width: 826px;
  height: 100%;
  min-height: 87.5vh;
  display: flex;
  flex-direction: column;
  margin-top: 12.5vh;
  background-color: inherit;

  & .group-profile {
    ${Card}
    width: 100%;
    height: 100vh;
    max-height: 320px;
    margin-top: 2.5rem;
    box-sizing: border-box;

    & .card-body {
      width: 94%;
      margin: 3% 3%;
      height: 60%;
      display: flex;

      & .group-img {
        flex-basis: 30%;
        display: flex;
        justify-content: center;
        margin: auto;
        & img {
          width: 75%;
        }
      }

      & .group-desc {
        flex-basis: 70%;

        & .group-title {
          margin-bottom: 0.5rem;
          margin-left: 0.3rem;
          font-size: x-large;
          font-weight: bold;
        }

        & .info {
          display: flex;
          justify-content: start;

          & p {
            margin: 0 0.35rem;
            color: var(--text-gray);
          }
        }

        & .group-content {
          width: 100%;
          overflow-y: scroll;
          -ms-overflow-style: none;
          scrollbar-width: none;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
  }

  & .detail-body {
    width: 100%;
    height: max-content;
    display: flex;

    & .left-box {
      flex-basis: 40%;
      margin: 2.5vh 2.5%;
      margin-left: 0;
      margin-bottom: 7.5vh;

      & .group-join {
        width: 100%;
        border-radius: 5px;

        &:hover {
          transform: scale(101%);
        }
      }

      & .average-tier {
        ${Card}
        width: 100%;
        box-sizing: border-box;

        & .tier-body {
          width: 94%;
          display: flex;
          margin: 3% 3%;

          & .img-box {
            display: flex;
            flex-basis: 50%;
            justify-content: end;
            margin-right: 1rem;

            & .image {
              width: 60%;
            }
          }

          & .desc {
            flex-basis: 50%;
            text-align: start;
            margin-left: 1rem;

            & .tier {
              margin-bottom: 0.25rem;
              font-size: x-large;
              font-weight: bold;
            }

            & .point {
              margin-top: 0.25rem;
              font-size: medium;
              font-weight: 500;
            }
          }
        }
      }
    }

    & .right-box {
      flex-basis: 60%;
      margin: 2.5vh 0;
      margin-bottom: 7.5vh;

      & .member-rank {
        ${Card}
        width: 100%;
        margin: 0;
        box-sizing: border-box;

        & .radio-group {
          width: 100%;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          font-weight: bolder;
          color: var(--text-gray);

          & input {
            margin-left: 1rem;
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

        & .ranking-table {
          width: 98%;
          height: 98%;
          margin: 1%;
          padding-bottom: 2rem;

          & .table-head {
            font-weight: bolder;
            text-align: center;

            & .member-name {
              justify-content: center;
            }
          }

          & .table-row {
            width: 100%;
            height: 3rem;
            display: flex;
            align-items: center;
            text-align: center;
            border-radius: 5px;
            transition: all 0.2s;

            & .rank {
              flex-basis: 10%;
              font-weight: bolder;
            }

            & .member-name {
              height: inherit;
              flex-basis: 60%;
              display: flex;
              align-items: center;
              text-align: start;

              & img {
                height: 75%;
                margin: 0 0.5rem;
              }

              & .member-level {
                margin: 0 0.5rem;
                font-size: smaller;
                color: var(--text-gray);
              }
            }

            & .member-tier {
              flex-basis: 15%;
            }

            & .member-persent {
              flex-basis: 15%;
            }
          }

          & .table-body .table-row:hover {
            box-shadow: 0 0.1rem 0.25rem var(--maincolor-depth1);
          }

          & .current {
            background-color: var(--maincolor-depth2);
          }
        }

        & .card-footer {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          & .desc {
            margin: 1rem 0;
            color: var(--text-gray);
          }
        }
      }
    }
  }
`;
