import {SET_ACCESS_TOKEN} from "./config";

interface SetAccessTokenAction {
    type: typeof SET_ACCESS_TOKEN;
    payload: string;
}

export type AuthActionTypes = SetAccessTokenAction;


export interface Repository {
    name: string;
    description: string;
    url: string;
    stargazers: {
        totalCount: number;
    };
    primaryLanguage: {
        name: string;
    };
}

export interface SearchRepositoriesData {
    search: {
        nodes: Repository[];
    };
}

export interface GraphQlResponse<T> {
    data?: T;
    errors?: GraphQLError[];
}

export interface GraphQLError {
    message: string;
}
