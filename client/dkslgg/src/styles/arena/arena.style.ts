// styled
import styled from 'styled-components';
import { Card } from '../globalStyles.style';

export const ArenaLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const DotLayout = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

export const ImageLayout = styled.img`
  max-width: 512px;
  height: auto;
  border-radius: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-self: center;
`;

export const ArenaContainer = styled.div`
  ${Card}
  width: 100%;
  min-width: 450px;
  max-width: 860px;
  height: 100%;

  & .search-input {
    width: 95%;
    margin: 0.75rem auto;
    margin-top: 0;
    position: relative;
    display: flex;
    align-self: center;
  }

  & .search-input input {
    width: 100%;
    height: 3rem;
    padding: 0 2.5%;
    margin: 1.5rem 0.5%;
    margin-bottom: 0.5rem;
    margin-top: 1rem;
    font-size: medium;
    border: 1px solid black;
    border-radius: 10px;
  }

  & .search-input img {
    position: absolute;
    z-index: 10;
    width: 2rem;
    top: 10px;
    right: 15px;
    margin-top: 1rem;
    margin-bottom: auto;
    align-items: center;
    transition: all 0.5s;

    &:hover {
      width: 2.5rem;
      top: 5px;
      right: 12.5px;
    }
  }
`;

export const ArenaBox = styled.div`
  width: 94%;
  min-height: 120px;
  margin: 5px 3%;
  background-color: #f6f4f4;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  font-weight: 600;

  & .profile-section {
    width: 95%;
    display: flex;
    flex-basis: 30%;
    margin: 2px 2.5%;

    & p {
      margin: 0;
      font-size: large;
      margin-left: 0.5rem;
    }

    & .profile {
      display: flex;
      flex-basis: 50%;
      max-height: 55px;
      justify-content: start;
      align-items: center;

      & .icon {
        max-width: 40px;
        max-height: 40px;
      }

      & .tier {
        max-width: 60px;
        max-height: 50px;
      }
    }

    & .time {
      display: flex;
      flex-basis: 50%;
      justify-content: end;
      margin-top: 0.5rem;
    }
  }

  & .content-section {
    width: 96%;
    flex-basis: 70%;
    min-height: 55px;
    margin: 2%;
    margin-top: 0;
    background-color: #e7e7e7;
    border-radius: 5px;

    & .content {
      margin-left: 1rem;
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  background-color: #eef3fd;
  border: #7689fd solid 1px;
  border-radius: 5px;
  color: #505bf0;
  font-size: 12px;
  font-weight: 500;
  margin-top: 6.8px;
  padding: 5px 11px;
  width: max-content;
`;
