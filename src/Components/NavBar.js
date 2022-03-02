import React from 'react';

const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="Nav">
                <h2>Healthy Food</h2>
            </div>
            <div className="Nav2">
                <p>HEALTHY RECIPES</p>
                <p>BLOG</p>
                <p>JOIN</p>
                <button className='Nav2Button'>REGISTER</button>
            </div>
        </div>
    )
}

export default NavBar;