import {React}from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
// import emailjs from 'emailjs';


const Contact = () => {
   
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
              <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gokulakrishnan.kumaravel02@gmail.com</h5>
            <a href='mailto:gokulakrishnan.kumaravel02@gmail.com'>Send a message</a>
          </article>
          <article className='contact_option'>
              <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 9159550219</h5>
            <a href='https://api.whatsapp.com/send?phone=9159550219'>Send a message</a>
          </article>
        </div>
        <form action=''>
          <label for="name">Name </label> 
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Your Email"  required/>  
          <label for="message">Message</label>
          <textarea name="message" placeholder="Your Message"cols="20" rows="7" required></textarea>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact