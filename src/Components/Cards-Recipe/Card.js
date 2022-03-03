import React from 'react';
import './Card.css'
import { Card, Button, Image} from 'react-bootstrap';

const CardFood = ({title, image}) => {

    return (
        <div className='CardFood'>
        <div className='Card'>
                <div className='Card-img'>
            <Image className='Card-img' src = {`${image}`} />
            </div>
            <div className='Card-info'>
                <Card.Title className='Card-title'>{ title }</Card.Title>
                <Button className='Card-button'>See recipe</Button>
            </div>
            </div>
            </div>
    )
}

export default CardFood;