// styled
import styled from 'styled-components';

export const SignupLayout = styled.div<{ $bgnum: number }>`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/image/bg/signup_bg_${(props) => props.$bgnum}.jpg');
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;

  & hr {
    width: 0.1rem;
    background-color: gray;
    border-radius: 1rem;
  }
`;

export const SignupContainer = styled.div`
  min-width: 40vw;
  max-width: fit-content;
  min-height: 50vh;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  filter: drop-shadow(4px 8px 8px hsl(0deg 0% 0% / 0.5));
  text-align: center;
  display: flex;

  & .box {
    min-width: 180px;
    flex-basis: 50%;
    align-self: center;
    margin-bottom: 3rem;
  }

  & .logo {
    width: 2.5rem;
    height: 3rem;
    margin-top: 2rem;
  }

  & .info {
    width: 2rem;
    height: 2rem;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.25);
    }
  }

  & .info-label {
    margin-top: 0;
    color: var(--maincolor-depth1);
    font-size: medium;
    opacity: 0;
    transition: all 0.2s;
  }

  @media (prefers-reduced-motion: no-preference) {
    .logo {
      animation: logo-spin infinite 20s linear;
    }
  }

  & hr {
    margin: 1rem;
  }
`;

export const SignupInputBox = styled.div`
  width: 25vw;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: center;
  margin: 4rem 6rem;
  margin-left: 0.5rem;
  margin-right: 4rem;

  & input {
    width: 90%;
    height: 2rem;
    margin: 0.5rem;
    padding: 0.25rem;
    padding-left: 0.5rem;
    background-color: #f2f2f2;
    border: none;
    border-radius: 0.25rem;
  }
`;

export const SignupBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
