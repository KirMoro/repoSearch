import {useEffect, useState} from 'react'
import './App.css'
import {SearchForm} from "./components/SearchForm/SearchForm";
import { RepoItemList } from './components/RepoItemList/RepoItemList';
import { GITHUB_CLIENT_ID } from './config';
import {useDispatch, useSelector} from "react-redux";
import {setAccessToken} from "./actions/setAccessToken";
import {searchRepositoriesRequest, searchRepositoriesSuccess} from "./actions/setSearchRepositories";
import {Pagination} from "./components/Pagination/Pagination";
import {searchUserData} from "./actions/setUserDataAction";
import {Route, Routes} from "react-router-dom";
import {RepositoryDetails} from "./components/RepositoryDetails/RepositoryDetails";
import {getUserRepositories, searchRepositories} from "./utils/graphql";

function App() {
  const [rerender, setRerender] = useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [repositoriesPerPage] = useState<number>(10);

  const repositories = useSelector(state => state.search.items);

  const lastRepositoriesIndex = currentPage * repositoriesPerPage;
  const firstRepositoryIndex = lastRepositoriesIndex - repositoriesPerPage;
  const currentRepositories = repositories.slice(firstRepositoryIndex, lastRepositoriesIndex);
  const setPaginate = (pageNumber) => {
      setCurrentPage(pageNumber);
      localStorage.setItem('currentPage', pageNumber);
  }

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
              localStorage.setItem('userLogin', data.login);
              dispatch(searchUserData(data));
          })
    }

    async function handleSearch(searchData) {
       const searchResult = await searchRepositories(searchData.request);

        localStorage.setItem('searchRequest', searchData.request);
        localStorage.setItem('searchResult', JSON.stringify(searchResult));

        dispatch(searchRepositoriesRequest(searchData.request));
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
                        if (data.access_token) {
                            localStorage.setItem('accessToken', data.access_token);
                            dispatch(setAccessToken(data.access_token));
                            setRerender(!rerender);
                        }
                    })
            }
            getAccessToken();
        }

        getUserData();

        const saveRepositories = JSON.parse(localStorage.getItem('searchResult'));

        if (saveRepositories) {
            dispatch(searchRepositoriesSuccess(saveRepositories));

            const previousPage = localStorage.getItem('currentPage');
            if (previousPage) {
                setCurrentPage(previousPage)
            }
        } else {
            const userLogin = localStorage.getItem('userLogin');
            getUserRepositories(userLogin)
                .then(data => {
                    dispatch(searchRepositoriesSuccess(data.data.user.repositories.nodes));
                })
        }

    }, [])

  return (
          <div className="app">
              <Routes>
                  <Route path="/" element={[<button className="app__btn" onClick={loginWithGithub}>
                      Login first
                  </button>, <SearchForm
                      onSearch={handleSearch}
                  />, <RepoItemList
                      repositories={currentRepositories}
                  />,  <Pagination
                      repositoriesPerPage={repositoriesPerPage}
                      currentPage={currentPage}
                      setPaginate={setPaginate}
                  />]} />
                  <Route path="/repositories/:id" element={<RepositoryDetails />} />
              </Routes>
          </div>
  )
}

export default App
