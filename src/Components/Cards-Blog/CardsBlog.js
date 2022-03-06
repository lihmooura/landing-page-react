import React from 'react';
import './CardBlog.css';


const CardBlogs = ({title, image, imageId, author}) => {
    
    return (
        <div className='card-wrapper'>       
    <div className='card'>
        <img className='card-img' src ={`${image}`} />
        <h5 className='card-title'>{ title }</h5>
        <div className='card-Id'>
        <img className='card-imgId' src = {`${imageId}`}/>
        <p>{ author }</p>
        </div>
        </div>
        </div>
    )  
}

export default CardBlogs;
