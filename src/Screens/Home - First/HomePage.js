import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { GoSearch } from 'react-icons/go';
import './CSS/home-responsive.css'
import bg from './Assets/bg.svg'
import './CSS/HomePage.css'

const HomePage = () => {
    return (
        <div>
            <NavBar />
        <div className='Home'>
        <img className='home-image-background' src={bg} alt="bg" />
            </div>

            <div className='home-text-wrapper'>
            <div className='home-text'>
                <h2>Ready for <br/>
                 Trying a new <br/>
                 recipe?</h2> 
            </div>
                 <div className='home-search-input'>
                    <input type='text' placeholder='Search healthy recipe' />
                    <button><GoSearch/></button>
                 </div>
         </div>
         </div>
    )
}

export default HomePage;