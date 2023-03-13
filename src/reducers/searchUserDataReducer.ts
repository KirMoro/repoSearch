import {SEARCH_USER_INFO} from "../config";
import {User} from "../types";
import {searchUserData} from "../actions/setUserDataAction";

interface SearchUserDataState {
    loading: boolean;
    item: User;
    error: string | null;
}

const initialState: SearchUserDataState = {
    loading: false,
    items: {},
    error: null,
};

export const searchUserDataReducer = (state = initialState, action: searchUserData): SearchUserDataState => {
    switch (action.type) {
        case SEARCH_USER_INFO:
            return {
                ...state,
                loading: false,
                items: action.payload,
            };
        default:
            return state;
    }
};

