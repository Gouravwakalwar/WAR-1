import React from 'react';
import './header.css'; 
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header =() => {
  return (
      <div className='war1__header section__padding ' id='home'>
        <div className="war1__header-content">
          <h1 className="gradient__text"> Let's Build Something amazing with WAR-1 OpenAI</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise.
             Indulgence way everthing joy alteration boisterous.
              Party we years to order allow asked of.</p>
        <div className="war1__header-content__input">

          <input type="email" placeholder='Your Email Addres' />
          <button type='butten'>Get started</button>
          </div>
          <div className="war1__header-content__people">
            <img src={people} alt='people' />
            <p>1,600 people requested access a visit in last 24 hours</p>
         </div>

          </div>
         <div className="war1__header-image">
          <img src={ai} alt="ai" />
         </div>
        
      </div>
  )
}

export default Header;