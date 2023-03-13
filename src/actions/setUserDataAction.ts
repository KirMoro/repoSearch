import {SEARCH_USER_INFO} from "../config";
import {User} from "../types";

interface SearchUserInformationAction {
    type: typeof SEARCH_USER_INFO;
    payload: { user: User };
}

export type SearchUserDataType = SearchUserInformationAction;

export const searchUserData = (user: User): SearchUserInformationAction => ({
    type: SEARCH_USER_INFO,
    payload: {user},
});

