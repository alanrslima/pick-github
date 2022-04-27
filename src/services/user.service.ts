import { UserProps } from "../types/user";
import api from "./api.service";

export const UserService = {
  get: (username: string): Promise<UserProps> => {
    return new Promise((reject, resolve) => {
      api
        .get(`users/${username}`)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  },
  getRepos: (username: string) => {
    return new Promise((reject, resolve) => {
      api
        .get(`users/${username}/repos`)
        .then(({ data }) => resolve(data))
        .catch((err) => reject(err));
    });
  },
};
