export interface  PhotoState {
    photo: any[],
    error: string | null,
    page: number,
    
}

export interface PhotoFetch {
    id: number,
    title: string,
    url: string
  }

export enum PhotoActionType {
    FETCH_PHOTO = "FETCH_PHOTO",
    FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS",
    FETCH_PHOTO_ERROR = "FETCH_PHOTO_ERROR",
    SET_PHOTO_PAGE = "SET_PHOTO_PAGE",
}

interface FetchPhotoAction {
    type: PhotoActionType.FETCH_PHOTO,
}

interface FetchPhotoSuccessAction {
    type: PhotoActionType.FETCH_PHOTO_SUCCESS,
    payload: any[]
}

interface FetchPhotoErrorAction {
    type: PhotoActionType.FETCH_PHOTO_ERROR,
    payload: string
}

interface SetPhotoPage {
    type: PhotoActionType.SET_PHOTO_PAGE,
    payload: number
}

export type PhotoAction = FetchPhotoAction | FetchPhotoSuccessAction | FetchPhotoErrorAction | SetPhotoPage ;