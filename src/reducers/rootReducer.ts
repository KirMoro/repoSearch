import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import {searchRepositoriesReducer} from "./searchRepositoriesReducer";
import {searchUserRepositoriesReducer} from "./searchUserRepositoriesReducer";
import {searchUserDataReducer} from "./searchUserDataReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchRepositoriesReducer,
    userRepositories: searchUserRepositoriesReducer,
    userData: searchUserDataReducer,
});

export default rootReducer;
