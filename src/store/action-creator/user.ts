import { Dispatch } from 'react';
import { http } from '.';
import { UserAction, UserActionType, UserFetch } from './../../type/user';


export const FetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_USER})
            const response = await http<UserFetch[]>('https://jsonplaceholder.typicode.com/users')
                dispatch({type: UserActionType.FETCH_USER_SUCCESS, payload: response})
        }
        catch(e) {
            dispatch({type: UserActionType.FETCH_USER_ERROR, 
                    payload: 'Произошла ошибка'
            })
        }
    }
}

export const NewUser = ( name: string | null, email: string | null, website: string | null, id: any = Date.now) => {
    const users = {
        name,
        email,
        website,
        id
    }

    return ({type: "FETCH_NEW_USER", payload: users})
}