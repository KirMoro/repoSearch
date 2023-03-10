import {SET_ACCESS_TOKEN} from "./config";

interface SetAccessTokenAction {
    type: typeof SET_ACCESS_TOKEN;
    payload: string;
}

export type AuthActionTypes = SetAccessTokenAction;
