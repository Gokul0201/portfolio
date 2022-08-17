import React from 'react'
import './skill.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Skills = () => {
  return (
    <section id="skills"> 
      <h5> What Skills I have</h5>
     <h2> My Skills</h2>

     <div className='container skills_container'>
      <div className='skills_frontend'>
        <h3 >Frontend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>HTML</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>CSS</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>Javascript</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>React Js</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>Bootstrap</h4>
          </article>
          
      
        </div>
      </div>
      <div className='skills_backend'>
        <h3 >Backend Development</h3>
        <div className='skills_content'>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>NodeJs</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>MongoDB</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>ExpressJs</h4>
          </article>
          <article className='skills_details'>
          <BsPatchCheckFill />
          <h4>My SQL</h4>
          </article>
        </div>
      </div>

     </div>
    </section>
   
  )
}

export default Skills