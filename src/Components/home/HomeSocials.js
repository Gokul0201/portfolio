import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'


const HomeSocials = () => {
  return (
    <div className='home__socials'>
         <a href="https://in.linkedin.com/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
         <a href="https://github.com/Gokul0201" target="_blank" rel='noreferrer'><FaGithub/></a>
    </div>
  )
}

export default HomeSocials;