import { UserAction, UserActionType, UserState } from "../../type/user"

const defaultState: UserState = {
    users: [],
    loading: false,
    error: null,
}

export const userReducer = (state = defaultState, action: UserAction): UserState => {
        switch(action.type) {
            case UserActionType.FETCH_USER:
                return {loading: true, error: null, users: []}
            case UserActionType.FETCH_USER_SUCCESS:
                return {loading: false, error: null, users: action.payload}
            case UserActionType.FETCH_USER_ERROR:
                return {loading: false, error: action.payload, users: []}
            case UserActionType.FETCH_NEW_USER:
                return {loading: false, error: null, users: [...state.users, action.payload]}
            default: 
                return state
        }
}