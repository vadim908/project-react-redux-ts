import React, { useEffect } from "react";
import { UseActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/userTypeSelector";

export function Users():React.ReactElement {


    const {users, error, loading} = useTypedSelector(state => state.users)
    const {FetchUsers, NewUser} = UseActions();

    useEffect(() => {
        FetchUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(loading) {
        return <h1>Идет загрузка</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

   
    

    return(
        <div className="users">
            <h1>Пользователи</h1>
            <div className="users__container">
                {users.map(user => 
                    <div key={user.id} className="users__container-user">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <p>{user.website}</p>
                    </div>)}
            </div>
            
            <button onClick={() => NewUser(prompt(), prompt(), prompt())} className="users__button">Добавить пользователя</button>
            
        </div>
    )
}