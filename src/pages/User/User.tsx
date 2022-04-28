import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "../../components/Profile/Profile";
import RepoCard from "../../components/RepoCard/RepoCard";
import { UserService } from "../../services/user.service";
import { Container, Content, WrapperRepos, SectionHeader } from "./User.style";

function User() {
  let { username } = useParams();

  const getUserData = async (user: string) => {
    try {
      const userData = await UserService.get(user);
      const reposData = await UserService.getRepos(user);
    } catch (error) {}
  };

  useEffect(() => {
    username && getUserData(username);
  }, [username]);

  return (
    <Container>
      <Content>
        <Profile />

        <SectionHeader>Repositórios</SectionHeader>
        <WrapperRepos>
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
          <RepoCard />
        </WrapperRepos>
      </Content>
    </Container>
  );
}

export default User;
