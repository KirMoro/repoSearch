import './RepositoryDetails.css';
import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

export const RepositoryDetails = () => {
  const {id} = useParams<{ id: string }>();
  const navigate = useNavigate();

  const repositoriesData = useSelector(state => state.search.items.filter(item => item.id === id));
  const userRepositoriesData = useSelector(state => state.userRepositories.items);

  const repositoryToRender = repositoriesData ? Object.assign({}, ...repositoriesData) : Object.assign({}, ...userRepositoriesData);

  return (
    <div className="repositoryDetails">
      <button onClick={() => navigate(-1)}>
        Вернуться назад
      </button>
      <div className="repositoryDetails__header">
        <h1 className="repositoryDetails__title">{repositoryToRender.name}</h1>
        <h2 className="repositoryDetails__text">Stars</h2>
        <p className="repositoryDetails__text">{repositoryToRender.stargazerCount}</p>
      </div>
      <div className="repositoryDetails__main">
        <div className="repositoryDetails__user">
          <img className="repositoryDetails__image" src={repositoryToRender.owner.avatarUrl}/>
          <a className="repositoryDetails__text"
             href={repositoryToRender.owner.url}>{repositoryToRender.owner.login}</a>
        </div>
        <div className="repositoryDetails__description">
          <h3 className="repositoryDetails__subtitle">Description</h3>
          <p className="repositoryDetails__text">{repositoryToRender.description}</p>
          <h3 className="repositoryDetails__subtitle">Last update</h3>
          <p className="repositoryDetails__text">{repositoryToRender.updatedAt}</p>
        </div>
        <h3 className="repositoryDetails__subtitle">languages</h3>
        <ul className="repositoryDetails__list">
          {repositoryToRender.languages.nodes.map((language) => (
            <li key={language.name}>
              <p className="repositoryDetails__text">{language.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
