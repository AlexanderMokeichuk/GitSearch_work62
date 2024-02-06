export interface User {
  login: string,
  avatar_url: string,
  html_url: string,
  repos_url: string,
  created_at: string,
  public_repos: number,
}

export interface Repository {
  id: number;
  name: string;
  language: string;
  html_url: string;
  visibility: string
}