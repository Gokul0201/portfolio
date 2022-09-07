import React from 'react'
import './project.css'
import IMG1 from '../../Assets/inventory-analysis-optimize-operations-header-image-2x-us-en.jpg'
const Projects = () => {
  const data=[
    {
      id:'1',
      image:IMG1,
      title:'Inventory Billing',
      github:'https://github.com/Gokul0201/Inventory-Billing-FE.git',
      demo:'https://inevntory-billing.netlify.app/'
    }
  ]
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>

      <div className="container projects_container">{
        data.map((e) => {
          return(
        <article key={e.id} className="project_item">
          <div className="project_item-image">
            <img src={e.image} alt=" "></img>
          </div>
          <h3>{e.title}</h3>
          <div className="project_item-link">
          <a href={e.github} className="btn" target='_blank' rel='noreferrer'>GIT HUB</a>
          <a href={e.demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
         </div>         
        </article>
        )})
      }
        
      </div>
    </section>
  )
}

export default Projects