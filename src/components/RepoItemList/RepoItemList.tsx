import './RepoItemList.css';
import {RepoCard} from "../RepoCard/RepoCard";
import {repoData} from "../../__fixtures__/repoData.js";

export const RepoItemList = ({movies, onSave, searchError, searchSaveError }) => {

    const repositoriesData = repoData.data.search.nodes;

    // const [index, setIndex] = useState({
    //     start: constants.INITIAL_MOVIES_CARDS_L,
    //     load: constants.ADD_MOVIES_CARDS_L,
    // });
    // const [loadMore, setLoadMore] = useState(true);
    //
    // const location = useLocation();
    //
    // const handleRenderCounter = (movies) => {
    //     if (window.innerWidth > 1196) {
    //         setIndex({
    //             start: constants.INITIAL_MOVIES_CARDS_L,
    //             load: constants.ADD_MOVIES_CARDS_L,
    //         })
    //     }
    //
    //     if (window.innerWidth < 1200) {
    //         setIndex({
    //             start: constants.INITIAL_MOVIES_CARDS_M,
    //             load: constants.ADD_MOVIES_CARDS_M,
    //         })
    //     }
    //
    //     if (window.innerWidth < 767) {
    //         setIndex({
    //             start: constants.INITIAL_MOVIES_CARDS_S,
    //             load: constants.ADD_MOVIES_CARDS_S,
    //         })
    //     }
    // };
    //
    // const renderMovies = movies.slice(0, index.start);

    const handleHasMore = () => {
        setIndex({
            start: index.start + index.load,
            load: index.load,
        })

        if (renderMovies.length >= movies.length - index.load) {
            setLoadMore(false)
        }
    }

    // useEffect(() => {
    //     if (movies.length <= index.load) {
    //         setLoadMore(false)
    //     } else {
    //         setLoadMore(true)
    //     }
    //
    //     window.addEventListener("resize", handleRenderCounter);
    //
    //     return () => window.removeEventListener("resize", handleRenderCounter);
    // }, [movies, index.load]);

    return (
        <section className="repoitemlist">
                    <ul className="repolist">
                        {repositoriesData.map((repoItem, index) => (
                            // console.log('repo', repoItem)
                            <RepoCard
                                // onSave={onSave}
                                key={index}
                                repository={repoItem}
                            />
                        ))}
                    </ul>
        </section>
    );
};

