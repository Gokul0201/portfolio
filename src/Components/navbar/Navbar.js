import {React,useState} from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {SiBookstack} from 'react-icons/si'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {AiOutlineMessage} from 'react-icons/ai'




const Navbar = () => {
  const [activeNav,setactiveNav] = useState("#")
  return (
    <nav>

    
     <a href="#" onClick={() => setactiveNav('#')} className={activeNav=== '#' ? 'active': '' }><AiOutlineHome/></a>
     <a href="#about" onClick={() => setactiveNav('#')} className={activeNav=== '#About' ? 'active': '' }><AiOutlineUser/></a>
     <a href="#skills"onClick={() => setactiveNav('#')} className={activeNav=== '#Skills' ? 'active': '' }><HiOutlineLightBulb/></a>
     <a href="#projects" onClick={() => setactiveNav('#')} className={activeNav=== '#Projects' ? 'active': '' }><SiBookstack/></a>
     <a href="#contact" onClick={() => setactiveNav('#')} className={activeNav=== '#Contact' ? 'active': '' }><AiOutlineMessage/></a>
    </nav>
   
  )
}

export default Navbar