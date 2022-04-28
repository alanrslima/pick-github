import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/Container/Container";
import Profile from "../../components/Profile/Profile";
import RepoCard from "../../components/RepoCard/RepoCard";
import { useUser } from "../../hooks/useUser";
import { Content, WrapperRepos, SectionHeader } from "./User.style";

function User() {
  let { username } = useParams();

  const { user, repos, loading, error } = useUser(username!);

  return (
    <Container loading={loading} error={error}>
      <Content>
        {user && <Profile user={user} />}
        <SectionHeader>Repositórios</SectionHeader>
        <WrapperRepos>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </WrapperRepos>
      </Content>
    </Container>
  );
}

export default User;
