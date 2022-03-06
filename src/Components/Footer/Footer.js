import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='copyright-text'>
                <h3 className='small-text regular'>
                © Copyrights 2019 Stack. All Rights Reserved.
                </h3>
                </div>
                <div className='terms-text'>
                    <h4 className='small-text regular'>
                    Privacy Policy</h4>
                    <h4 className='small-text regular'>
                        Terms and Conditions
                    </h4>
                </div>
           
        </div>
    )
}

export default Footer;