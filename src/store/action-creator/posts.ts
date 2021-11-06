import { Dispatch } from 'react';
import { http } from '.';
import { PostAction, PostFetch, PostsActionType } from './../../type/posts';


export const FetchPosts = () => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostsActionType.FETCH_POSTS})
            const response = await http<PostFetch[]>('https://jsonplaceholder.typicode.com/posts/?_limit=10')
            setTimeout(() => {
                dispatch({type: PostsActionType.FETCH_POSTS_SUCCESS, payload: response})
            }, 1000)
        }
        catch {
            dispatch({type: PostsActionType.FETCH_POSTS_ERROR,
                        payload: 'Произошла ошибка'})
        }
    }
}


export const NewPost = (title: string | null, body: string | null, id: any = Date.now) => {
    const posts = {
        title,
        body,
        id
    }
    
    return ({type: PostsActionType.FETCH_NEW_POSTS, payload: posts})
}