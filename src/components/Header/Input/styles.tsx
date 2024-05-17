import styled, { css } from "styled-components";

const inCommon = css`
  background-color: var(--color-4);
  padding: var(--gap-s);
  border-radius: var(--gap);
  border: none;
`;

export const Container = styled.div`
  display: grid;
  gap: var(--gap-s);
  padding: var(--gap-s);

  label {
    ${inCommon};
    color: var(--color-1);
    font-weight: bold;
  }

  input {
    ${inCommon};
    justify-self: start;
  }
`;
