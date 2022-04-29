import React from "react";
import { RepositoryProps } from "../../types/repository";
import {
  Wrapper,
  Header,
  Title,
  Tag,
  Description,
  Footer,
  StarIcon,
  WrapperStarIcon,
  StarLabel,
} from "./RepoCard.style";

interface RepoCardProps {
  repo: RepositoryProps;
}
function RepoCard({ repo }: RepoCardProps) {
  return (
    <Wrapper>
      <Header>
        <Title>{repo.name}</Title>
        <Tag>{repo.visibility}</Tag>
      </Header>
      <Description>{repo.description}</Description>
      <Footer>
        <Tag>{repo.language}</Tag>
        {repo.stargazers_count ? (
          <WrapperStarIcon>
            <StarIcon />
            <StarLabel>{repo.stargazers_count}</StarLabel>
          </WrapperStarIcon>
        ) : null}
      </Footer>
    </Wrapper>
  );
}

export default RepoCard;
