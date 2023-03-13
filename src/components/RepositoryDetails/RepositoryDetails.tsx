import {useNavigate, useParams} from 'react-router-dom';
import {useSelector} from "react-redux";

export const RepositoryDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const repositoriesData = useSelector(state => state.search.items.filter(item => item.id === id))
    const repositoryToRender = Object.assign({}, ...repositoriesData);

    return (
        <div className="container">
            <button onClick={() => navigate(-1)}>
               Вернуться назад
            </button>
            <h1>{repositoryToRender.name}</h1>
            <p>{repositoryToRender.stargazerCount}</p>
            <a href={repositoryToRender.owner.url}>{repositoryToRender.owner.login}</a>
            <img src={repositoryToRender.owner.avatarUrl}/>
            <p>{repositoryToRender.updatedAt}</p>
            <p>{repositoryToRender.description}</p>
            <ul>
                {repositoryToRender.languages.nodes.map((language) => (
                    <li>
                        <p>{language.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
