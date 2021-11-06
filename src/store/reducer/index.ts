import { photoReducer } from './photoReducer';
import { postReducer } from './postsReducer';

import { userReducer } from './userReducer';
import { combineReducers } from "redux";


export const rootReducer = combineReducers({
    users: userReducer,
    posts: postReducer,
    photo: photoReducer,
})

export type RootState = ReturnType<typeof rootReducer>