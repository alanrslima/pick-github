import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: var(--color-surface);
  padding: 24px;
  border-radius: 10px;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const WrapperInfo = styled.div`
  flex: 1;
`;

export const Title = styled.h1`
  color: var(--color-white);
`;

export const Description = styled.p`
  color: var(--color-light-gray);
  margin-top: 12px;
  font-size: 14px;
`;
