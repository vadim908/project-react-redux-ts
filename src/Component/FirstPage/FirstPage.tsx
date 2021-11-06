import React, { useEffect, useState } from "react";

import { UseActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/userTypeSelector";

export function FirstPage(): React.ReactElement {

    const {photo, page, error} = useTypedSelector(state => state.photo);
    const {FetchPhoto, SetPhotoPage} = UseActions()
    const [count, setCount] = useState(5)
    
    
   
    useEffect(() => {
        
        FetchPhoto(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const sliderAdd = () => {
        setCount(count + 1)
        SetPhotoPage(count)
    }


    const sliderBack = () => {
        setCount(count - 1)
        SetPhotoPage(count)
    }

    if(error) {
        return <h1>{error}</h1>
    }

    return(
        <section className="firstpage">
            <h1>Главная</h1>

            {photo.map((photo) => 

            <div key={photo.id} className="firstpage__slider">
                <img className="firstpage__slider-img" src={photo.url} alt="slider" />
                <h3 className="firstpage__slider-title">{photo.title}</h3>
            </div>
            )}

            <div className="firstpage__container">
                <button onClick={sliderBack} className="firstpage__container-button">Назад</button>
                <button onClick={sliderAdd} className="firstpage__container-button">Вперед</button>
            </div>


        </section>
    )
    
}