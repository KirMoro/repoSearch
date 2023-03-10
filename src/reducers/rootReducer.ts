import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import {searchRepositoriesReducer} from "./searchRepositoriesReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    search: searchRepositoriesReducer
});

export default rootReducer;
