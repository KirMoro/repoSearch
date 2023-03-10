import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {SearchForm} from "./components/SearchForm/SearchForm";
import { RepoItemList } from './components/RepoItemList/RepoItemList';
import { GITHUB_CLIENT_ID } from './config';
import {useDispatch} from "react-redux";
import {setAccessToken} from "./actions/setAccessToken";
import {GraphQlResponse, Repository, SearchRepositoriesData} from "./types";
import {searchRepositoriesSuccess} from "./actions/setSearchRepositories";

function App() {
  const [rerender, setRerender] = useState(false);
  const [token, setToken] = useState<string>('');

    const dispatch = useDispatch();

    function loginWithGithub() {
        window.location.assign("https://github.com/login/oauth/authorize?client_id=" + GITHUB_CLIENT_ID)
    }

    async function getUserData() {
      await fetch("http://localhost:4000/userData?accessToken=" + localStorage.getItem("accessToken"))
          .then((res) => {
              return res.json();
          })
          .then((data) => {
              console.log(data)
          })
    }

    async function searchRepositories(query: string): Promise<Repository[]> {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ` + localStorage.getItem("accessToken"),
            },
            body: JSON.stringify({
                query: `
        query SearchRepositories($query: String!) {
          search(query: $query, type: REPOSITORY, first: 10) {
            nodes {
              ... on Repository {
                name
                description
                url
                stargazers {
                  totalCount
                }
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      `,
                variables: { query },
            }),
        });

        const result: GraphQlResponse<SearchRepositoriesData> = await response.json();
        const repositories = result.data.search.nodes;

        return repositories ?? [];
    }

    async function handleSearch(searchData) {
       const searchResult = await searchRepositories(searchData.request);

        dispatch(searchRepositoriesSuccess(searchResult));

        return searchResult;
    }

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const codeParams = urlParams.get('code');

        if (codeParams && (localStorage.getItem("accessToken")) === null) {
            async function getAccessToken() {
                await fetch("http://localhost:4000/accessToken?code=" + codeParams, {
                    method: "GET"
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.access_token) {
                            localStorage.setItem('accessToken', data.access_token);
                            console.log('predisp')
                            dispatch(setAccessToken(token));
                            setRerender(!rerender);
                        }
                    })
            }
            getAccessToken();
        }
    }, [])

  return (
          <div className="app">
              <button onClick={loginWithGithub}>
                  LOGIN
              </button>
              <button onClick={getUserData}>
                  GET USER DATA
              </button>
              <button onClick={() => searchRepositories('react')}>
                  GET REPO DATA
              </button>

              <SearchForm
              onSearch={handleSearch}
              />
              <RepoItemList />
              <div>
                  <a href="https://vitejs.dev" target="_blank">
                      <img src="/vite.svg" className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://reactjs.org" target="_blank">
                      <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
              </div>
              <h1>Vite + React</h1>
              <div className="card">
                  <p>
                      Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
              </div>
              <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
              </p>
          </div>
  )
}

export default App
