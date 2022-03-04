import React, {useState} from 'react';
import './CSS/NavBar.css';
import './CSS/navbar-responsive.css';


const NavBar = () => {
    const [click, setClick] = useState(false); 
    const handleClick = () => setClick(!click);

    return (
        <div className="Navbar">
            <div className='nav-logo'>
                <h2>Healthy Food</h2>
            </div>
            <div className="NavOptions">
                <a href='/'>HEALTHY RECIPES</a>
                <a href='/'>BLOG</a>
                <a href='/'>JOIN</a>
                <button href='/'>REGISTER</button>            
            </div>
            <div className='iconDrop' 
                onClick={handleClick}>
            <span className={click ? 'fa-2x fas fa-times' : 'fa-2x fas fa-bars'} />      
            </div>
            </div>
    )
}

export default NavBar;