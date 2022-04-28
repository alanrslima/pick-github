import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: var(--color-background);
  width: 100vw;
  height: 100vh;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  padding: 24px 0;

  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

export const WrapperRepos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const SectionHeader = styled.h2`
  color: var(--color-white);
  margin-top: 42px;
`;
