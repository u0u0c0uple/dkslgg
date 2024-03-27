// styled
import styled from 'styled-components';

export const SearchLayout = styled.div<{ $bgnum: number }>`
  width: 100%;
  height: 70vh;
  margin-top: 12.5vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/image/bg/main_bg_${(props) => props.$bgnum}.jpg');
  background-size: cover;
  background-position: center;
  display: flex;

  & .container {
    width: 100%;
    margin: auto;
    text-align: center;
  }

  & .container .title {
    width: fit-content;
    margin: 2.5rem auto;
    margin-top: -2.5rem;
    font-weight: bold;
    color: #ffffff;
    display: grid;
    place-items: center;

    & .typing {
      width: 100%;
      animation:
        typing 2s steps(21),
        blink 0.5s step-end infinite alternate;
      white-space: nowrap;
      overflow: hidden;
      border-right: 3px solid;
      font-size: 2.5em;
    }
  }

  & .container .box {
    width: 50%;
    max-width: 550px;
    margin: auto;
    position: relative;
    display: flex;
    align-self: center;
  }

  & .container .box input {
    width: 90%;
    min-width: 260px;
    height: 2.25rem;
    margin: 0 auto;
    padding: 5px 5%;
    border: none;
    border-radius: 5px;
    filter: drop-shadow(2px 4px 4px hsl(0deg 0% 0% / 0.38));
    transition: all 0.5s;
  }

  & .container .box input:focus {
    filter: drop-shadow(4px 8px 8px hsl(0deg 0% 0% / 0.25));
  }

  & .container .box img {
    position: relative;
    width: 28px;
    right: 35px;
    margin-top: 1px;
    margin-bottom: 1px;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const TaggingContainer = styled.div`
  width: 100%;
  height: 12.5vh;
  background-color: var(--maincolor-depth2);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & .title {
    margin: 0 1rem;
    font-size: x-large;
  }

  & .btn {
    font-size: medium;
  }
`;
