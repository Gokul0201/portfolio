import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import{FaGithub} from 'react-icons/fa'
import{BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Swipe Up</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
         <a href="http://linkedin.com/in/gokula-krishnan-9527b0183" target="_blank" rel='noreferrer'><BsLinkedin/></a>
         <a href="https://github.com/Gokul0201" target="_blank" rel='noreferrer'><FaGithub/></a>
         <a href="https://www.instagram.com/gokul2_/" target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>

    <div className='footer_copyright'>
      <small>&copy;Gokulakrishnan  Designed By Gokulakrishnan</small>
    </div>
    </footer>
  )
}

export default Footer