import React from "react";
import { RepositoryProps } from "../../types/repository";
import { Wrapper, Header, Title, Tag, Description } from "./RepoCard.style";

interface RepoCardProps {
  repo: RepositoryProps;
}
function RepoCard(props: RepoCardProps) {
  return (
    <Wrapper>
      <Header>
        <Title>{props.repo.name}</Title>
        <Tag>{props.repo.visibility}</Tag>
      </Header>
      <Description>{props.repo.description}</Description>
      <Tag>{props.repo.language}</Tag>
    </Wrapper>
  );
}

export default RepoCard;
