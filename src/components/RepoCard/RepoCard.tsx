import './RepoCard.css';

export const RepoCard = ({repository, onSave
                     }) => {
    const handleClick = () => {
        // onSave(movie);
    }

    return (
        <li className="repocard">
            <div className="repocard__main">
                <div className="repocard__header">
                    <div>
                        <h2 className="repocard__title">{repository.name}</h2>
                    </div>
                    <div>
                        <span className="repocard__label">Stars</span>
                        <p className="repocard__text">{repository.stargazerCount}</p>
                    </div>
                </div>
                <span className="repocard__label">URL</span>
                <p className="repocard__text">{repository.url}</p>
                <span className="repocard__label">Последнее обновление</span>
                <p className="repocard__time">{repository.updatedAt}</p>

            </div>
        </li>
    );
};
