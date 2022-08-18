import React from 'react'
import './about.css'
import image from '../../Assets/images/pp.jpg'

const About = () => {
  return (
  <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={image} alt=''/>
        </div>
      </div>
     
      <div className="about_content">
        <div className="about_Cards">
        {/* <article className="about_card">
          <FaAward className='about_icons'/>
          <h5>Exprience</h5>
          <small>2+ years working </small>
        </article> */}
        </div>
        <p>Goal-oriented full stack developer with a passion for working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend. My core competency lies in developing applications from its inception.

       I primarily work with MERN stack among the full stack technologies. As a full stack developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to revolutionize the project I work on.

        </p>
        <a href='#projects' className='btn'>View Projects</a>
      </div>
      </div>
  </section>
  )
}

export default About