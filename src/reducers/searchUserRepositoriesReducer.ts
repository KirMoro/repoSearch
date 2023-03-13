import {SEARCH_USER_INFO, SEARCH_USER_REPOSITORIES} from "../config";
import {Repository} from "../types";
import {searchUserRepositories} from "../actions/setSearchUserRepositories";

interface SearchUserRepositoriesState {
    loading: boolean;
    items: Repository[];
    error: string | null;
}

const initialState: SearchUserRepositoriesState = {
    loading: false,
    items: [],
    error: null,
};

export const searchUserRepositoriesReducer = (state = initialState, action: searchUserRepositories): SearchUserRepositoriesState => {
    switch (action.type) {
        case SEARCH_USER_REPOSITORIES:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
            };
        case SEARCH_USER_INFO:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
            };
        default:
            return state;
    }
};

