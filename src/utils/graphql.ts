import {GraphQlResponse, Repository, SearchRepositoriesData} from "../types";

export async function searchRepositories(query: string): Promise<Repository[]> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: `
        query SearchRepositories($query: String!) {
          search(query: $query, type: REPOSITORY, first: 100) {
            nodes {
              ... on Repository {
                name
                id
                description
                url
                stargazerCount
                updatedAt
                owner {
        avatarUrl
        login
        url
      }
       languages(first: 10) {
        nodes {
          name
        }
      }
      description
              }
            }
          }
        }
      `,
      variables: {query},
    }),
  });

  const result: GraphQlResponse<SearchRepositoriesData> = await response.json();
  const repositories = result.data.search.nodes;

  return repositories ?? [];
}

export async function getUserRepositories(login: string): Promise<any> {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ` + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify({
      query: `
        query UserRepositories($login: String!) {
  user(login: $login) {
    repositories(first: 100) {
      nodes {
        name
        id
        description
        createdAt
        updatedAt
        stargazerCount
        forkCount
      }
    }
  }
}
      `,
      variables: {
        login
      }
    })
  });

  const data = await response.json();

  return data;
}
