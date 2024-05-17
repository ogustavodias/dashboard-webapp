import styled from "styled-components";

export const Container = styled.aside`
  background-color: var(--color-3);
  padding: var(--gap);
  border-radius: var(--gap);
  color: var(--color-1);
`;

export const List = styled.ul`
  display: grid;
  gap: var(--gap);
`;

export const Icon = styled.img`
  background-color: var(--color-5);
  border-radius: var(--gap);
  padding: 4px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: var(--gap-s);

  &:hover {
    ${Icon} {
      background-color: transparent;
    }
  }
`;
