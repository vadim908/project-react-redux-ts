import { PostAction, PostState, PostsActionType } from './../../type/posts';


const defaultState: PostState = {
    posts: [],
    loading: false,
    error: null,
}

export const postReducer = (state = defaultState, action: PostAction): PostState => {
        switch(action.type) {
            case PostsActionType.FETCH_POSTS:
                return {loading: true, error: null, posts: []}
            case PostsActionType.FETCH_POSTS_SUCCESS:
                return {loading: false, error: null, posts: action.payload}
            case PostsActionType.FETCH_POSTS_ERROR:
                return {loading: false, error: action.payload, posts: []}
            case PostsActionType.FETCH_NEW_POSTS:
                return {loading: false, error: null, posts: [...state.posts, action.payload]}
            default: 
                return state
        }
}