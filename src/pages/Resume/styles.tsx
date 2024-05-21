import styled from "styled-components";

export const ResumeHeader = styled.div`
  display: flex;
  gap: var(--gap);
  margin: var(--gap) 0;

  @media screen and (max-width: 1000px) {
    display: grid;
    gap: var(--gap-s);
  }
`;

export const ResumeCard = styled.div`
  flex: 1;
  background-color: var(--color-5);
  padding: var(--gap);
  border-radius: var(--gap);

  h2 {
    color: var(--color-1);
    margin-bottom: var(--gap);
  }

  span {
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

export const ResumeGraph = styled.div`
  padding: var(--gap);
  background-color: var(--color-5);
  border-radius: var(--gap);
`