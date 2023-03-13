import {SEARCH_USER_REPOSITORIES} from "../config";
import {Repository} from "../types";

interface SearchUserRepositoriesAction {
    type: typeof SEARCH_USER_REPOSITORIES;
    payload: {
        items: Repository[];
    };
}

export type SearchUserRepositoriesType = SearchUserRepositoriesAction;

export const searchUserRepositories = (items: Repository[]): SearchUserRepositoriesAction => (
  {
    type: SEARCH_USER_REPOSITORIES,
    payload: { items },
});
