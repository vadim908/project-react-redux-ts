export interface  PostState {
    posts: any[],
    loading: boolean,
    error: string | null
}

export interface PostFetch {
    title: string,
    body: string,
    id: number,
}

export enum PostsActionType {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    FETCH_NEW_POSTS = "FETCH_NEW_POSTS"
}

interface FetchNewPosts {
    type: PostsActionType.FETCH_NEW_POSTS,
    payload: any[]
}

interface FetchPostsrAction {
    type: PostsActionType.FETCH_POSTS,
}

interface FetchPostsSuccessAction {
    type: PostsActionType.FETCH_POSTS_SUCCESS,
    payload: any[]
}

interface FetchPostsErrorAction {
    type: PostsActionType.FETCH_POSTS_ERROR,
    payload: string
}

export type PostAction = FetchNewPosts | FetchPostsrAction | FetchPostsSuccessAction | FetchPostsErrorAction;