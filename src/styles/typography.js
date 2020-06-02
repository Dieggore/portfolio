import { css } from 'styled-components';

export const BLACK_100 = '#111111';
export const CARARRA_200 = '#FBFBFA';

export const ROBOTO = 'Titillium Web';

export const typography = css`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap'); 

  
  * {
    text-align: center;
    box-sizing: border-box;
  }

  body {
    background-color: black;
    font-family: '${ROBOTO}';
    font-size: 1rem;
    line-height: 1.25rem;
    letter-spacing: 0;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6, p {
    color: ${BLACK_100};
    @-moz-document url-prefix() {
      font-weight: lighter;
    }
  }

  h1 {
    font-family: '${ROBOTO}';
    font-size: 48px;
    line-height: 2.25rem;
  }

  h2 {
    font-size: 36px;
    line-height: 1.75rem;
    letter-spacing: -0.01em;
  }

  h3 {
    font-size: 24px;
    line-height: 1.5rem;
    letter-spacing: 0.01em;
  }

  h4 {  
    font-size: 24px;
  }

  h5 {
    font-size: 14px;
  }

  h6 {
    font-size: 8px;
  }

  p {
    letter-spacing: 0.02rem;
  }

  span, button {
    font-size: 0.8125rem;
    line-height: 1rem;
    letter-spacing: 0.02rem;
  }

  button {
    font-family: '${ROBOTO}';
  }

  strong {
    font-family: '${ROBOTO}';
  }

  input {
    font-size: 1rem;
    line-height: 1.25rem;
    background: inherit;
    border: none;
    &:focus {
      outline: none;
    }
  }

  textarea {
    font-size: 1rem;
  }

  @media screen and (min-width: 1024px) {
    p {
      text-align: left;
    }
  }

  @media screen and (min-width: 2560px) {
    body {
      font-size: 1.5rem;
    }
    
    h1 {
      font-size: 3.5rem;
    }
  
    h2 {
      font-size: 2.5rem;
    }
  
    h3 {
      font-size: 1.75rem;
    }
  
    p {
      font-size: 1.5rem;
    }
  
    span, button {
      font-size: 1.3rem;
    }
  
    input {
      font-size: 1.5rem;
    }
  
    textarea {
      font-size: 1.5rem;
    }
  }

  @media screen and (min-width: 1900px) {
    p {
      line-height: 40px;
      font-size: 2rem;
    }
  }
`;
