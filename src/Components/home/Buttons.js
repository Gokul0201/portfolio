import React from 'react'
import CV from '../../Assets/gokul resume.pdf'

const Buttons = () => {
  return <>
      <div className="buttons">
      <a href={CV} download className='btn'>Download CV</a> 
      <a href='#contact' className='btn btn-primary'>Hire me</a>
      </div>
  </>
    
}

export default Buttons