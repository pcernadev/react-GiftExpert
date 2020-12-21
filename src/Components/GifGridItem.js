import React from 'react'

export const GifGridItem = ({url,title}) => {
    
   // console.log(id,url,title);

    return (
        <div className ='card animate__animated animate__fadeIn'>
            <img src={url}  alt={title}/>
            <p>{title}</p>
        </div>
    )
}
