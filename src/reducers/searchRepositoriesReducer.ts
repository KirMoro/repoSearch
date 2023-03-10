import {SEARCH_REPOSITORIES, SEARCH_REPOSITORIES_REQUEST} from "../config";
import {SearchRepositoriesAction} from "../actions/setSearchRepositories";
import {Repository} from "../types";

interface SearchRepositoriesState {
    loading: boolean;
    items: Repository[];
    error: string | null;
}

const initialState: SearchRepositoriesState = {
    loading: false,
    items: [],
    error: null,
};

export const searchRepositoriesReducer = (state = initialState, action: SearchRepositoriesAction): SearchRepositoriesState => {
    switch (action.type) {
        case SEARCH_REPOSITORIES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case SEARCH_REPOSITORIES:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
            };
        default:
            return state;
    }
};
