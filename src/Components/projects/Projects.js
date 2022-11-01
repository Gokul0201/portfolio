import React from 'react'
import './project.css'
import IMG1 from '../../Assets/inventory-analysis-optimize-operations-header-image-2x-us-en.jpg'
import IMG2 from '../../Assets/Chat-by-back1design1-580x416.png'
import IMG3 from '../../Assets/unnamed.png'
import IMG4 from '../../Assets/unnamed (1).jpg'
const Projects = () => {
  const data=[
    {
      id:'1',
      image:IMG1,
      title:'Inventory Billing',
      github_FE:'https://github.com/Gokul0201/Inventory-Billing-FE.git',
      github_BE:'https://github.com/Gokul0201/Inventory-billing-BE.git',
      demo:'https://inevntory-billing.netlify.app/'
    },
    {
      id:'2',
      image:IMG2,
      title:'POSTBOX',
      github_FE:'https://github.com/Gokul0201/Postbox-chat-FE.git',
      github_BE:'https://github.com/Gokul0201/PostBox_chat-BE.git',
      demo:'https://postbox-chat.netlify.app/'
    },
    {
      id:'3',
      image:IMG3,
      title:'WEB SCRAPPING',
      github_FE:'https://github.com/Gokul0201/WebScrapper-Ecommerce-frontend.git',
      github_BE:'https://github.com/Gokul0201/WebScrapper-Ecommerce-backend.git',
      demo:'https://webscrape-ecommerce.netlify.app/'
    },
    {
      id:'4',
      image:IMG4,
      title:'TENTKOTTA',
      github_FE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-FE.git',
      github_BE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-BE.git',
      demo:''
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
          <p> Credentials:</p>
          <p>Username:demo123</p>
          <p>Password:12345678</p>
          <div className="project_item-link">
          <a href={e.github_FE} className="btn" target='_blank' rel='noreferrer'>Front End</a>
          <a href={e.github_BE} className="btn" target='_blank' rel='noreferrer'>Back End</a>
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