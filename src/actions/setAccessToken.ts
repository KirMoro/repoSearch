import {AuthActionTypes} from "../types";
import {SET_ACCESS_TOKEN} from "../config";

export const setAccessToken = (token: string): AuthActionTypes => ({
    type: SET_ACCESS_TOKEN,
    payload: token,
});
