// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const GroupMainLayout = styled.div`
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
  flex-direction: column;
  margin-top: 12.5vh;
  background-color: inherit;
  justify-content: center;

  & .create-btn-box {
    width: 100%;
    height: 32vh;
    min-height: 260px;
    display: flex;
    flex-direction: column;
    padding: 5%;
    justify-content: center;
    border-radius: 2px;
    box-sizing: border-box;
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
      url('/image/bg/group_create_banner.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: drop-shadow(1px 2px 2px hsl(0deg 0% 0% / 0.38));
    color: white;

    & .title {
      font-size: xx-large;
      font-weight: bold;
    }

    & .create-btn {
      width: fit-content;
      margin-top: 1rem;
      color: white;
      font-size: large;
      font-weight: bold;

      &:hover {
        color: var(--maincolor-depth1);
      }
    }
  }

  & .current-group {
    ${Card}
    width: 100%;
    height: 30vh;
    min-height: 220px;
    box-sizing: border-box;
    margin-top: 1rem;

    & .title {
      margin-bottom: 0;
    }

    & .profile-box {
      width: 100%;
      height: 60%;
      position: relative;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      & .profile {
        flex-basis: 33%;
        height: 100%;
        margin-top: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  & .search-box {
    & .search-input {
      ${Card}
      width: 100%;
      margin: 0.75rem 0;
      padding-top: 0;
      position: relative;
      display: flex;
      align-self: center;
      box-sizing: border-box;
    }

    & .search-input input {
      width: 100%;
      height: 3rem;
      padding: 0 2%;
      margin: 1.5rem 0.5rem;
      margin-bottom: 0.5rem;
      margin-top: 1rem;
      font-size: medium;
      border: none;
    }

    & .search-input img {
      position: absolute;
      z-index: 10;
      width: 4%;
      top: 3px;
      right: 15px;
      margin-top: 1rem;
      margin-bottom: auto;
      align-items: center;
      transition: all 0.5s;

      &:hover {
        transform: scale(1.25);
      }
    }

    & .result-box {
      ${Card}
      width: 100%;
      height: fit-content;
      box-sizing: border-box;
      margin-top: 0;
      margin-bottom: 3rem;

      & .result-body {
        margin: 0 3%;
        margin-bottom: 3%;

        & .result-row {
          height: fit-content;
          display: flex;
          margin: 0;
          margin-top: 5px;

          & div {
            padding: 0 1rem;
          }

          & p {
            padding: 2px;
            margin: 0;
          }

          & .image-area {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-basis: 10%;

            & img {
              width: 70%;
              border-radius: 5px;
            }
          }

          & .name-area {
            display: flex;
            flex-basis: 20%;
            align-items: center;
            font-size: large;
            font-weight: bold;
          }

          & .desc-area {
            display: flex;
            flex-basis: 70%;
            align-items: center;
          }
        }
      }
    }
  }
`;

export const GroupProfile = styled.div`
  width: 90%;
  height: fit-content;
  display: flex;

  & .image {
    display: flex;
    flex-basis: 40%;
    justify-content: right;
    margin-right: 1rem;

    & img {
      width: 90%;
    }
  }

  & .description {
    display: flex;
    flex-direction: column;
    flex-basis: 60%;
    justify-content: end;

    & p {
      margin: 2px;
    }

    & .name {
      font-size: x-large;
      font-weight: bolder;
    }

    & .personnel {
      font-size: smaller;
      color: var(--text-gray);
    }
  }
`;
