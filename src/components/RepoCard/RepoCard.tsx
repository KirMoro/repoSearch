import './RepoCard.css';
import {Link} from "react-router-dom";

export const RepoCard = ({repository
                     }) => {

    return (
        <li className="repocard">
            <div className="repocard__main">
                <div className="repocard__header">
                    <div>
                        <Link to={`/repositories/${repository.id}`}>
                            <h2 className="repocard__title">{repository.name}</h2>
                        </Link>
                    </div>
                    <div>
                        <span className="repocard__label">Stars</span>
                        <p className="repocard__text">{repository.stargazerCount}</p>
                    </div>
                </div>
                <span className="repocard__label">URL</span>
                <p className="repocard__url">{repository.url}</p>
                <span className="repocard__label">Последнее обновление</span>
                <p className="repocard__time">{repository.updatedAt}</p>
            </div>
        </li>
    );
};
