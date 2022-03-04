import React from 'react';
import './CSS/Card.css'
import './CSS/Card-responsive.css'
import { Card, Button, Image} from 'react-bootstrap';

const CardFood = ({title, image}) => {

    return (
        <div className='Card'>
            <Image className='Card-img' src = {`${image}`} />
            <div className='Card-info'>
                <Card.Title className='Card-title'>{ title }</Card.Title>
                <Button className='Card-button'>See recipe</Button>
            </div>
            </div>
    )
}

export default CardFood;