// styled
import styled from 'styled-components';

export const LoadingLayout = styled.section<{ $white: boolean }>`
  width: 100%;
  min-height: 40vh;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$white ? `var(--maincolor-depth2)` : `#ccc`)};
  transition: 0.3s linear;

  & .loader {
    width: ${48 / 10}px;
    height: ${48 / 10}px;
    display: inline-block;
    position: relative;
    border-radius: 4px;
    color: ${(props) => (props.$white ? `var(--maincolor-depth2)` : `#263238`)};
    background: ${(props) =>
      props.$white ? `var(--maincolor-depth2)` : `#263238`};
    animation: animloader 0.3s 0.3s linear infinite alternate;
    &::after,
    &::before {
      content: '';
      width: ${48 / 10}px;
      height: ${48 / 10}px;
      border-radius: 4px;
      background: ${(props) =>
        props.$white ? `var(--maincolor-depth2)` : `#263238`};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 15px;
      animation: animloader 0.3s 0.45s linear infinite alternate;
    }
    &::after {
      top: -15px;
      animation-delay: 0s;
    }
  }
`;
