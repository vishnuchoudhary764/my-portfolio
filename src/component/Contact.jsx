import React from 'react'
import insta from '../assets/insta.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import "./Contact.css"
const Contact = () => {
  return (
    <div >
      <div className='contact-page'>
        <form action="post">
          <h2>Get In Touch</h2>
          <label htmlFor="name">Name : </label>
          <input type="text" id="name" />
          <label htmlFor="email">E-mail : </label>
          <input type="text" id="email" />
          <label for="message">Message : </label>
          <textarea id="message" name="message" rows="5" cols="33" placeholder=""></textarea>
          <div className='btnbox'>
            <button className='submit'>Submit</button>
          </div>
        </form>
      </div>
      <div class="logos">
        <div class="github">
          <a href=""><img data-aos="fade-right" src={github} alt="" /></a>
        </div>

        <div class="linkedin">
          <a href=""><img data-aos="fade-up" src={linkedin} alt="" /></a>
        </div>

        <div class="insta">
          <a href=""><img data-aos="fade-up" src={insta} alt="" /></a>
        </div>

        <div class="mail">
          <a href=""><img data-aos="fade-left" src={mail} alt="" /></a>
        </div>

      </div>
      <div class="madeby">
        <div>
          <p>Made by vishnu with ❤️ Love All rights reserved by MD WEB-DEVELOPERS</p>
        </div>
      </div>


    </div>
  )
}

export default Contact
