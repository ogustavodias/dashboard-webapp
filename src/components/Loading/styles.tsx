import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  margin: var(--gap) 0;
  height: 50px;
  width: 50px;
  border: 4px solid var(--color-2);
  border-top: 0px;
  border-right: 0px;
  border-radius: 50%;
  animation: ${spin} 1s infinite ease;
`;
