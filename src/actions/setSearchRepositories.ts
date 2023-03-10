import {SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_REQUEST} from "../config";
import {Repository} from "../types";

interface SearchRepositoriesRequestAction {
    type: typeof SEARCH_REPOSITORIES_REQUEST;
}

interface SearchRepositoriesSuccessAction {
    type: typeof SEARCH_REPOSITORIES;
    payload: {
        items: Repository[];
    };
}

export type SearchRepositoriesAction =
    | SearchRepositoriesRequestAction
    | SearchRepositoriesSuccessAction;

export const searchRepositoriesRequest = (): SearchRepositoriesRequestAction => ({
    type: SEARCH_REPOSITORIES_REQUEST,
});

export const searchRepositoriesSuccess = (items: Repository[]): SearchRepositoriesSuccessAction => ({
    type: SEARCH_REPOSITORIES,
    payload: { items },
});

