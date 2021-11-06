export interface UserState {
    users: any[],
    loading: boolean,
    error: string | null
}

export interface UserFetch {
    name: string,
    id: number,
    email: string,
    website: string,
}

export enum UserActionType {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR",
    FETCH_NEW_USER = "FETCH_NEW_USER"
}

interface FetchNewUser {
    type: UserActionType.FETCH_NEW_USER,
    payload: any[]
}

interface FetchUserAction {
    type: UserActionType.FETCH_USER,
    
}

interface FetchUserSuccessAction {
    type: UserActionType.FETCH_USER_SUCCESS,
    payload: any[]
}

interface FetchUserErrorAction {
    type: UserActionType.FETCH_USER_ERROR,
    payload: string
}

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorAction | FetchNewUser;