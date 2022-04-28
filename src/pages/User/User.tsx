import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage/AlertMessage";
import Container from "../../components/Container/Container";
import Profile from "../../components/Profile/Profile";
import RepoCard from "../../components/RepoCard/RepoCard";
import { useUser } from "../../hooks/useUser";
import { Content, WrapperRepos, SectionHeader } from "./User.style";

function User() {
  let { username } = useParams();

  const { user, repos, loading, error } = useUser(username!);

  const renderRepos = () => {
    if (!repos.length) {
      return (
        <AlertMessage
          title="Nenhum repositório encontrado!"
          subTitle="Provavelmente, este usuário não possui nenhum repositório criado..."
        />
      );
    }
    return (
      <WrapperRepos>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </WrapperRepos>
    );
  };

  return (
    <Container loading={loading} error={error}>
      <Content>
        {user && <Profile user={user} />}
        <SectionHeader>Repositórios</SectionHeader>
        {renderRepos()}
      </Content>
    </Container>
  );
}

export default User;
