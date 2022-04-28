import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background: var(--color-surface);
  padding: 24px;
  border-radius: 10px;
  flex-direction: row;
  max-width: 30%;
  flex-direction: column;
  margin-top: 24px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: var(--color-primary);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Tag = styled.span`
  background: rgba(0, 0, 255, 0.2);
  font-size: 11px;
  color: var(--color-white);
  font-weight: 500;
  padding: 4px 12px;
  align-self: flex-start;
  border-radius: 10px;
`;

export const Description = styled.p`
  font-size: 11px;
  color: var(--color-light-gray);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
