import React from 'react'
import './home.css'
import Buttons from './Buttons'
import Image from '../../Assets/images/me.png'
import HomeSocials from './HomeSocials'
const Home = () => {
  return <>
  <header>
    <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Gokulakrishnan K</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <Buttons/>
      <HomeSocials/>

      <div className="me">
        <img src={Image} alt='me' />
      </div>
      <div><a href='#contact' className='scroll__down'>Scroll down --- </a></div>
    
  
    </div>
  </header>
  
  </>
   
  
}

export default Home