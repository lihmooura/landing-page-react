import React from 'react';
import './CardBlog.css';


const CardBlogs = ({title, image, imageId, author}) => {
    
    return (
        <div className='card-wrapper'>       
    <div className='card'>
        <img src ={`${image}`} className='card-img' />
        <h5 class='card-title'>{ title }</h5>
        <div className='card-Id'>
        <img src = {`${imageId}`} className='card-imgId'/>
        <p>{ author }</p>
        </div>
        </div>
        </div>
    )  
}

export default CardBlogs;
