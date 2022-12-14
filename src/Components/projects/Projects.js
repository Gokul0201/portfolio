import React from 'react'
import './project.css'
import IMG1 from '../../Assets/inventory-analysis-optimize-operations-header-image-2x-us-en.jpg'
import IMG2 from '../../Assets/Chat-by-back1design1-580x416.png'
import IMG3 from '../../Assets/unnamed.png'
import IMG4 from '../../Assets/unnamed (1).jpg'
import IMG5 from '../../Assets/download (1).jfif'
const Projects = () => {
  const data=[
    {
      id:'1',
      image:IMG1,
      title:'Inventory Billing',
      description:"Inventory Billing app is app that helps to create Billing & Inventory Management easily.",
      github_FE:'https://github.com/Gokul0201/Inventory-Billing-FE.git',
      github_BE:'https://github.com/Gokul0201/Inventory-billing-BE.git',
      demo:'https://inevntory-billing.netlify.app/'
    },
    {
      id:'2',
      image:IMG2,
      title:'POSTBOX',
      description:"PostBox app allows you to communicate with your contacts through chat. It enables you to send and receive messages.",
      github_FE:'https://github.com/Gokul0201/Postbox-chat-FE.git',
      github_BE:'https://github.com/Gokul0201/PostBox_chat-BE.git',
      demo:'https://postbox-chat.netlify.app/'
    },
    {
      id:'3',
      image:IMG3,
      title:'WEB SCRAPPING',
      description:"Web scraping is an automatic method to obtain large amounts of data from websites .Data extracted from websites like Flipkart,Snapdeal.",
      github_FE:'https://github.com/Gokul0201/WebScrapper-Ecommerce-frontend.git',
      github_BE:'https://github.com/Gokul0201/WebScrapper-Ecommerce-backend.git',
      demo:'https://webscrape-ecommerce.netlify.app/'
    },
    {
      id:'4',
      image:IMG4,
      title:'TENTKOTTA',
      description:"Tentkotta App is an movie ticket booking app.In this app Admin Control also used ",
      github_FE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-FE.git',
      github_BE:'https://github.com/Gokul0201/Tentkotta-movie-booking-app-BE.git',
      demo:'https://tentkotta-01.netlify.app/'
    }
  ]
  return (
    <section id="projects">
      <h5>My recent work</h5>
      <h2>Projects</h2>
     <div className='credentials'>
     <h5>Credentials</h5>
      <h5>User: (username:demo123,password:12345678)</h5>
      <h5>Admin: (username:admin,password:12345678)</h5>
      </div>
      <div className="container projects_container">{
        data.map((e) => {
          return(
        <article key={e.id} className="project_item">
          <div className="project_item-image">
            <img src={e.image} alt=" "></img>
          </div>
          <h3>{e.title}</h3>
          <p className="description">{e.description}</p>
          <div className="project_item-link">
          <a href={e.github_FE} className="btn" target='_blank' rel='noreferrer'>Front End</a>
          <a href={e.github_BE} className="btn" target='_blank' rel='noreferrer'>Back End</a>
          <a href={e.demo} className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
         </div>        
        </article>
        )})
      }
         <article  className="project_item">
          <div className="project_item-image">
            <img src={IMG5} alt=" "></img>
          </div>
          <h3>RazorPay</h3>
          <p className="description">Simple Razorpay Gateway App</p>
          <div className="project_item-link">
          <a href="https://github.com/Gokul0201/Razorpay-Gateway.git" className="btn" target='_blank' rel='noreferrer'>Front End</a>
          <a href="https://tentkotta.netlify.app/" className="btn btn-primary" target='_blank' rel='noreferrer'>Live Demo</a>
         </div>        
        </article>
      </div>
    </section>
  )
}

export default Projects