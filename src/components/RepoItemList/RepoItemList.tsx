import './RepoItemList.css';
import {RepoCard} from "../RepoCard/RepoCard";

export const RepoItemList = ({repositories }) => {

    return (
        <section className="repoitemlist">
                    <ul className="repolist">
                        {repositories.map((repoItem, index) => (
                            <RepoCard
                                key={index}
                                repository={repoItem}
                            />
                        ))}
                    </ul>
        </section>
    );
};

