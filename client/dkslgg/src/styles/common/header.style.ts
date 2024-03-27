// styled
import styled from 'styled-components';

export const HeaderLayout = styled.div`
  width: 100vw;
  height: 12.5vh;
  min-width: 550px;
  min-height: 90px;
  position: fixed;
  background-color: #ffffff;
  filter: drop-shadow(0 0.5mm 0.75rem gray);
  display: flex;
  z-index: 99;

  & .logoBox {
    height: 75%;
    margin: auto;
    margin-left: 2rem;
    transition: all 0.5s;
    flex-basis: 20%;
    text-align: end;

    &:hover {
      filter: drop-shadow(0 0 0.2rem var(--maincolor-depth1));
    }
  }

  & .logoBox img {
    height: 100%;
    margin-right: 1rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 40%;
  height: inherit;
  justify-content: space-around;
  flex-basis: 50%;
  align-items: center;
  text-align: center;

  & a {
    width: 30%;
    font-size: large;
    font-weight: 600;
    text-align: center;
  }

  & .search-input {
    width: 70%;
    margin: 0.75rem 0;
    margin-top: 0;
    position: relative;
    display: flex;
    align-self: center;
  }

  & .search-input input {
    width: 100%;
    min-width: 180px;
    height: 3rem;
    padding: 0 2.5%;
    margin: 1.5rem 0.5%;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: medium;
    border: none;
    border-bottom: 1px solid black;
  }

  & .search-input img {
    position: relative;
    z-index: 10;
    width: 8%;
    min-width: 28px;
    top: 10px;
    right: 30px;
    margin-top: 1rem;
    margin-bottom: auto;
    align-items: center;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const LogInConatiner = styled.div`
  flex-basis: 60%;
  margin: auto;
  margin-right: 5rem;
  text-align: end;
`;

export const LogoutContainer = styled.div`
  flex-basis: 60%;
  height: inherit;
  margin: auto;
  margin-right: 5rem;
  text-align: start;

  & .profile {
    display: flex;
    height: inherit;
    justify-content: end;
    align-items: center;

    & .image {
      height: 60%;
      margin-right: 1rem;
      border-radius: 50%;
    }

    & .name {
      font-size: large;
      font-weight: bolder;
      color: var(--text-gray);
    }

    & button {
      margin-left: 1rem;
    }
  }
`;
