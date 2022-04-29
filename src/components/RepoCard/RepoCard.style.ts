import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

export const Wrapper = styled.div`
  display: flex;
  background: var(--color-surface);
  padding: 24px;
  border-radius: 10px;
  flex-direction: row;
  width: 30%;
  flex-direction: column;
  margin-top: 24px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const Title = styled.h3`
  color: var(--color-primary);
  font-size: 18px;
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
  flex: 1;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Footer = styled.div`
  margin-top: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StarIcon = styled(AiFillStar).attrs(() => ({
  size: 18,
}))``;

export const WrapperStarIcon = styled.div`
  color: var(--color-gray);
  display: flex;
  align-items: center;
`;

export const StarLabel = styled.label`
  font-size: 12px;
  margin-left: 4px;
  font-weight: bold;
`;
