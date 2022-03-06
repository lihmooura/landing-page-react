import React from 'react';
import bg from './Assets/bg.svg';
import './CSS/BestService.css';
import './CSS/BestServices-responsive.css'


const BestServices = () => {

    return (
        <div className='BestService'>
        
            <img className='BestService-img' src={bg} alt="bg"/>

            <div className='BestService-text'>

            <h2>The best services ready<br/>
             To serve you</h2>

            <p>Far far away, behind the word mountains, far from<br />
                the countries Vakalia and Consonatia, there live the <br />
                blind texts.</p>
            <p>Separated they lived in Bookmarksgrave right at the <br/>
                coast of the Semantics, a large language ocean.</p>
            <p>A small river named Duden flows by their place and <br/>
                supplies it with the necessary regelialia.</p>
            <button>Know more</button>
          
            </div>
        </div>
    )
}

export default BestServices;