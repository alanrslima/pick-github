import { render } from "@testing-library/react";
import Profile from "./Profile";
import { screen } from "@testing-library/dom";
import { UserProps } from "../../types/user";

const userMock = {
  login: "fulano",
  id: 31439832,
  node_id: "MDQ6VXNlcjMxNDM5ODMy",
  avatar_url: "https://avatars.githubusercontent.com/u/31439832?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/fulano",
  html_url: "https://github.com/fulano",
  followers_url: "https://api.github.com/users/fulano/followers",
  following_url: "https://api.github.com/users/fulano/following{/other_user}",
  gists_url: "https://api.github.com/users/fulano/gists{/gist_id}",
  starred_url: "https://api.github.com/users/fulano/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/fulano/subscriptions",
  organizations_url: "https://api.github.com/users/fulano/orgs",
  repos_url: "https://api.github.com/users/fulano/repos",
  events_url: "https://api.github.com/users/fulano/events{/privacy}",
  received_events_url: "https://api.github.com/users/fulano/received_events",
  type: "User",
  site_admin: false,
  name: "Fulano",
  company: "Google",
  blog: "https://fulano.github.io",
  location: "Brasil",
  email: "fulano@email.com",
  hireable: true,
  bio: "Descrição de fulano",
  twitter_username: "fulano_twitter",
  public_repos: 53,
  public_gists: 0,
  followers: 19,
  following: 20,
  created_at: "2017-08-29T11:25:49Z",
  updated_at: "2022-04-29T16:55:15Z",
} as UserProps;

describe("Profile Component", () => {
  it("should render a full profile component", () => {
    render(<Profile user={userMock} />);
    expect(screen.getByText("Fulano")).toBeInTheDocument();
    expect(screen.getByText("19 Seguidores • 20 Seguindo")).toBeInTheDocument();
    expect(screen.getByText("fulano")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
    expect(screen.getByText("fulano@email.com")).toBeInTheDocument();
    expect(screen.getByText("https://fulano.github.io")).toBeInTheDocument();
    expect(screen.getByText("Brasil")).toBeInTheDocument();
    expect(screen.getByText("fulano_twitter")).toBeInTheDocument();
    expect(screen.getByText("Descrição de fulano")).toBeInTheDocument();
  });
});
