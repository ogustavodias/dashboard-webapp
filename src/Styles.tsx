import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-1: #463220;
    --color-2: #66593c;
    --color-3: #eceadd;
    --color-4: #f7f8f5;
    --color-5: #ffffff;
    --gap-s: 0.625rem;
    --gap: 1.25rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-4);
    font-family: sans-serif;
    padding: var(--gap);
    color: var(--color-2);
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: var(--gap);

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
