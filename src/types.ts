import {SET_ACCESS_TOKEN} from "./config";

interface SetAccessTokenAction {
    type: typeof SET_ACCESS_TOKEN;
    payload: string;
}

export type AuthActionTypes = SetAccessTokenAction;

export interface Repository {
    name: string;
    id: string;
    description: string;
    url: string;
    stargazerCount: number;
    updatedAt: string;
    owner: {
        avatarUrl: string;
        login: string;
        url: string;
    };
    languages: {
        nodes: {
            name: string;
        }[];
    };
}

export interface User {
    id: string;
    login: string;
    name: string;
    email: string;
    avatar_url: string;
    created_at: string;
    updated_at: string;
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
