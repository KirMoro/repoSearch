import {AuthActionTypes} from "../types";
import {SET_ACCESS_TOKEN} from "../config";

interface AuthState {
    accessToken: string | null;
}

const initialState: AuthState = {
    accessToken: null,
};

export const authReducer = (
    state = initialState,
    action: AuthActionTypes
): AuthState => {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
};
