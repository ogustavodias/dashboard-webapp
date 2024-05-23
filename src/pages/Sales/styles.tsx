import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  gap: var(--gap-s);
  margin-top: var(--gap);
`;

export const ItemId = styled.span`
  font-family: monospace;
  font-size: 13px;
`;

export const ItemName = styled.span``;

export const ItemValue = styled.span`
  margin-left: auto;
`;

export const Item = styled.a`
  display: flex;
  gap: var(--gap);
  background-color: var(--color-5);
  padding: var(--gap);
  border-radius: var(--gap);
`;
