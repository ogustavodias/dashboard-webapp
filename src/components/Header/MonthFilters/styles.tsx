import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1/-1;
  display: flex;
  gap: var(--gap);

  @media screen and (max-width: 900px) {
    order: 3;
  }
`;

export const Button = styled.button`
  flex: 1;
  color: var(--color-1);
  font-weight: bold;
  background-color: var(--color-3);
  padding: var(--gap);
  border-radius: var(--gap);
  border: none;
  cursor: pointer;
`;
