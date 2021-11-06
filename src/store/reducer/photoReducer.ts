import { PhotoAction, PhotoActionType } from './../../type/photo';
import { PhotoState } from "../../type/photo"



const defaultState: PhotoState = {
    photo: [],
    page: 1,
    error: null,
}

export const photoReducer = (state = defaultState, action: PhotoAction): PhotoState => {
        switch(action.type) {
            case PhotoActionType.FETCH_PHOTO:
                return {...state} 
            case PhotoActionType.FETCH_PHOTO_SUCCESS:
                return {...state, photo: action.payload}
            case PhotoActionType.FETCH_PHOTO_ERROR:
                return {...state, error: action.payload}
            case PhotoActionType.SET_PHOTO_PAGE:
                return {...state, page: action.payload}
            default: 
                return state
        }
}