import { useEffect, useState } from "react";
import { UserService } from "../services/user.service";
import { RepositoryProps } from "../types/repository";
import { UserProps } from "../types/user";

export const useUser = (username: string) => {
  const [user, setUser] = useState<UserProps>();
  const [repos, setRepos] = useState<RepositoryProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const getUserData = async (user: string) => {
    try {
      setError(undefined);
      setLoading(true);
      const userData = await UserService.get(user);
      setUser(userData);
      const reposData = await UserService.getRepos(user);
      setRepos(reposData);
    } catch (err) {
      setError("Houve um erro bla bla bla");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    username && getUserData(username);
  }, [username]);

  return { user, repos, loading, error };
};
