import { PhotoAction, PhotoActionType, PhotoFetch } from './../../type/photo';
import { Dispatch } from 'react';
import { http } from '.';


export const FetchPhoto= (page: number = 1) => {
    return async (dispatch: Dispatch<PhotoAction>) => {
        try {
            dispatch({type: PhotoActionType.FETCH_PHOTO})
            const response = await http<PhotoFetch[]>(`https://jsonplaceholder.typicode.com/photos?_limit=1&_page=${page}`)
                dispatch({type: PhotoActionType.FETCH_PHOTO_SUCCESS, payload: response})
        }
        catch {
            dispatch({type: PhotoActionType.FETCH_PHOTO_ERROR,
                        payload: 'Произошла ошибка'})
        }
    }
}

export const SetPhotoPage = (page: number): PhotoAction => {
    return {type: PhotoActionType.SET_PHOTO_PAGE, payload: page}
}