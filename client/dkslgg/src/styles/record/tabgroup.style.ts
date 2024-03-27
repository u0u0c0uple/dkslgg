// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const TabGroupLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftLayout = styled.div`
  width: 40%;
  flex-basis: 40%;
  min-width: 260px;

  & .select-box {
    margin-top: 1.5rem;
  }

  & .group-profile {
    ${Card}
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & .profile-body {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      & .profile-img {
        flex-basis: 48%;
        width: 15rem;
        margin-left: 2%;
        display: flex;
        justify-content: center;

        & img {
          width: 95%;
        }
      }

      & .profile-desc {
        flex-basis: 48%;
        height: fit-content;
        margin-right: 2%;
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: start;

        & p {
          margin: 0.2rem;
          color: var(--text-gray);
        }

        & .group-name {
          font-size: x-large;
          font-weight: bold;
          color: black;
        }

        & .quit-btn {
          margin-top: 0.8rem;
          font-size: 0.8rem;
          padding: 0.3rem 1.2rem;
          border-radius: 4px;
          background-color: #dc4848;
        }
      }

      & .group-desc {
        flex-basis: 96%;
        height: fit-content;
        margin: 0 2%;
        margin-bottom: 1.5rem;
        color: var(--text-gray);

        & .desc-title {
          font-size: larger;
          font-weight: bolder;
          margin-bottom: 0.3rem;
          margin-left: 2rem;
          margin-right: 2rem;
        }

        & .desc-content {
          margin: 0 2rem;
        }
      }
    }
  }

  & .group-ranking {
    ${Card}
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 2rem;

    & .ranking-table {
      width: 98%;
      height: 98%;
      margin: 1%;

      & .table-head {
        font-weight: bolder;
        text-align: center;

        & .group-name {
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
        transition: all 0.25s;

        & .rank {
          flex-basis: 10%;
        }

        & .group-name {
          height: inherit;
          flex-basis: 70%;
          display: flex;
          align-items: center;
          text-align: start;

          & img {
            width: 10%;
            margin: 0 0.5rem;
          }
        }

        & .group-tier {
          flex-basis: 20%;
        }
      }

      & .table-body .table-row:hover {
        box-shadow: 0 0.1rem 0.25rem var(--maincolor-depth1);
      }

      & .current {
        background-color: var(--maincolor-depth2);
      }
    }
  }
`;

export const RightLayout = styled.div`
  width: 60%;
  flex-basis: 60%;
  min-width: 400px;
  padding: 1rem;

  & .mygroup-ranking {
    ${Card}
    width: 100%;
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
  }
`;

export const EmptyGroupLayout = styled.div`
  ${Card}
  width: 80%;
  height: fit-content;
  text-align: center;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  & .icon {
    font-size: 4rem;
  }

  & .head {
    font-weight: bolder;
    font-size: x-large;
    margin-bottom: 0;
  }

  & .desc {
    margin: 0;
    color: var(--text-gray);
  }

  & .desc:last-of-type {
    margin-bottom: 2rem;
  }

  & .link {
    color: var(--text-gray);
    text-decoration: underline;
  }
`;
