import React from 'react';
import bg from '../../Assets/background/servicesBg.svg';
import './CSS/BestService.css';
import './CSS/BestServices-responsive.css'


const BestServices = () => {

    return (
        <div className='service-wrapper'>
            <div className='service-image-wrapper'>
                 <img className='service-image' src={bg} alt="bg"/>
            </div>

            <div className='service-text-wrapper'>

                    <h2 className='large-text semibold'>The best services ready<br/>
                    To serve you</h2>
                    <p className='small-text regular'>Far far away, behind the word mountains, far from<br />
                        the countries Vakalia and Consonatia, there live the <br />
                        blind texts.</p>
                    <p className='small-text regular'>Separated they lived in Bookmarksgrave right at the <br/>
                        coast of the Semantics, a large language ocean.</p>
                    <p className='small-text regular'>A small river named Duden flows by their place and <br/>
                        supplies it with the necessary regelialia.</p>
                    <button>Know more</button>
                    
            </div>
        </div>
    )
}

export default BestServices;