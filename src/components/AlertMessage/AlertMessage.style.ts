import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  color: var(--color-white);
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10%;
`;

export const Title = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-top: 16px;
`;

export const SubTitle = styled.span`
  margin-top: 12px;
  color: var(--color-light-gray);
  font-size: 14px;
`;
