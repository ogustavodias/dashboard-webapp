import styled from "styled-components";

export const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: start;
  gap: var(--gap);

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Form = styled.form`
  display: flex;
  grid-template-columns: 1fr 1fr;
  background-color: var(--color-5);
  border-radius: var(--gap);

  > * {
    flex: 1;
  }

  @media screen and (max-width: 900px) {
    order: 2;
  }
`;
