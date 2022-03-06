import React from 'react';
import bg from './Assets/bloco_final_image.svg';
import './CSS/JoinOurMembership.css';
import './CSS/JoinOurMembership-responsive.css';

const JoinOurMembership = () => {
    return (
        <div className='Join-page-wrapper'
        >

          <div className='Join-page-text'>  
             <h2>Join our membership <br/>
                to get a special offer <br/>
                </h2>  
              <div className='Join-page-input'>
                 <input type='text' placeholder='Enter your email address' />
                 <button>Join</button>

              </div>
              </div>
              <div className='Join-page-bg'>
              <img  src={bg} alt="bg" />
              
              </div>
              </div>

    )
}

export default JoinOurMembership;