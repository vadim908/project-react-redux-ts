import React, { useEffect } from "react";
import { UseActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/userTypeSelector";


export function Posts():React.ReactElement {

    const {posts, loading, error} = useTypedSelector(state => state.posts)
    const {FetchPosts, NewPost} = UseActions()

    useEffect(() => {
        FetchPosts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    if(loading) {
        return <h1>Идет загрузка</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }



    return(
        <div className="posts">
            <h1>Посты</h1>
            <div className="posts__container">
                {posts.map(post => 
                    <div key={post.id} className="posts__container-post">
                        <h3>title: {post.title}</h3>
                        <p>post: {post.body}</p>
                    </div>)}
            </div>
            
            <button onClick={() => NewPost(prompt(), prompt())} className="users__button">Добавить пост</button>
        </div>
    )
}