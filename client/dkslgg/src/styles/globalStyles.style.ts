// styled
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

#root {
  width: 100%;
  height: 100%;
}

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  width: 100vw !important;
  height: 100vh !important;

  background-color: #f0f0f0;
  background-attachment: fixed;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
  overflow-x: hidden;

  --maincolor-depth1: #6E8387;
  --maincolor-depth2: #C8D3D5;

  --mainbg: #f0f0f0;
  --text-gray: #758592;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 720px;
  min-height: 100vh;

}

body.swal2-shown > [aria-hidden="true"] {
  transition: 0.1s filter;
  filter: blur(10px);
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 600;
  font-family: inherit;
  color: white;
  background-color: var(--maincolor-depth1);
  cursor: pointer;
  transition: all 0.25s;
}

button:hover {
  transform: scale(.25rem);
  filter: drop-shadow(0 0 .1rem var(--maincolor-depth1));
}

button:disabled {
  background-color: var(--maincolor-depth2);
}

a {
  text-decoration: none;
  color: black;
  transition: all .2s;
}

a:link { color: black; }
a:visited { color: black; }
a:hover {
  color: var(--maincolor-depth1);
}

input:focus {
  outline: none;
}

textarea:focus {
  outline: none;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #f5f5f5;
  }
  a:hover {
    color: var(--maincolor-depth1);
  }
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loadEffect {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    65% {
      opacity: 0.65;
      transform: scale(1.01);
    }
    85% {
      opacity: 0.85;
      transform: scale(0.97);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

@keyframes animloader {
  0% { width: ${48 / 10}px;}
  100% { width: 48px;}
}
`;

export const Tag = css`
  width: 4.5rem;
  height: 1.75rem;
  margin: 0;
  border: 2px solid transparent;
  border-radius: 15px;
  color: white;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;

  & .text {
    width: fit-content;
    height: fit-content;
    text-align: center;
  }
`;

export const Card = css`
  background-color: white;
  margin: 0.5rem;
  margin-left: auto;
  margin-right: auto;
  border: 2px solid #dfdfdf;
  border-radius: 10px;
  box-sizing: border-box;

  & .title {
    width: 98%;
    margin-top: 0.2rem;
    padding: 1.2rem 0;
    padding-left: 1rem;
    border-bottom: 1px solid #dfdfdf;
    font-size: large;
    font-weight: bold;
  }
`;

export default GlobalStyles;
