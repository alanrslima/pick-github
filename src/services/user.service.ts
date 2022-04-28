import { RepositoryProps } from "../types/repository";
import { UserProps } from "../types/user";
import api from "./api.service";

export const UserService = {
  get: (username: string): Promise<UserProps> => {
    return new Promise((resolve, reject) => {
      api
        .get(`users/${username}`)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  getRepos: (username: string): Promise<RepositoryProps[]> => {
    return new Promise((resolve, reject) => {
      api
        .get(`users/${username}/repos`)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};
