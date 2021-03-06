import { useEffect, useState } from "react";
import { UserService } from "../services/user.service";
import { ErrorProps } from "../types/error";
import { RepositoryProps } from "../types/repository";
import { UserProps } from "../types/user";

export const useUser = (username?: string) => {
  const [user, setUser] = useState<UserProps>();
  const [repos, setRepos] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorProps>();

  const getUserData = async (user: string) => {
    try {
      setError(undefined);
      setLoading(true);
      const userData = await UserService.get(user);
      setUser(userData);
      const reposData = await UserService.getRepos(user);
      reposData.sort((a, b) => {
        if (a.stargazers_count > b.stargazers_count) return -1;
        if (a.stargazers_count < b.stargazers_count) return 1;
        return 0;
      });
      setRepos(reposData);
    } catch (err) {
      setError({
        title: `Ops, o usuário @${user} não foi encontrado!`,
        subTitle:
          "Provavelmente este nome de usuário não está cadastrado no GitHub.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username && username.length) {
      username && getUserData(username);
    }
  }, [username]);

  return { user, repos, loading, error };
};
