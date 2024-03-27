// styled
import styled from 'styled-components';

export const ProfileLayout = styled.div<{ $bgnum: number }>`
  width: 100%;
  height: 48vh;
  margin-top: 8vh;
  padding-left: 20%;
  padding-right: 20%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/image/bg/search_bg_${(props) => props.$bgnum}.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-sizing: border-box;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  & .logo {
    width: 10rem;
    height: 10rem;
    align-self: center;
    border-radius: 50%;
  }

  & .userBox {
    margin-left: 2rem;
    color: white;
    align-self: center;
  }

  & .userBox .title {
    display: flex;
    align-items: center;

    & h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 4rem;
    }

    & img {
      margin-left: 1rem;
      height: 7.5rem;
    }
  }

  & .userBox .lbti {
    margin-top: 0;
    margin-bottom: 0.2rem;
    font-size: 2rem;
  }

  & .userBox .record-update {
    display: flex;
    align-items: center;
  }

  & .userBox .record-update button {
    height: 2.5rem;
  }

  & .userBox .record-update .desc {
    margin-left: 1rem;
    color: #dfdfdf;
  }
`;
