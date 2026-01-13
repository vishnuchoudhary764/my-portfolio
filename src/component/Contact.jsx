import React from 'react'
import insta from '../assets/insta.jpg'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import whatsapp from '../assets/whatsapp.png'

import "./Contact.css"
const Contact = () => {
  return (
    <div >
      <div class="logos">
        <div class="whatsapp">
          <a
            href="https://wa.me/917877691126"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img data-aos="fade-right" src={whatsapp} alt="WhatsApp" />
          </a>
        </div>

        <div class="linkedin">
          <a
           href="https://www.linkedin.com/in/vishnuchoudhary764/"
            target="_blank" >
              <img data-aos="fade-up" src={linkedin} alt="LinkedIn" />
              </a>
        </div>

        <div class="insta">
          <a
           href="https://www.instagram.com/vishnu_choudhary764/"
            target="_blank"
            >
              <img data-aos="fade-up" src={insta} alt="Instagram" />
              </a>
        </div>

        <div class="mail">
          <a
           href="mailto:vasanaram162@gmail.com"
            target="_blank"
            >
              <img data-aos="fade-left" src={mail} alt="Mail" />
              </a>
        </div>

      </div>
      <div class="madeby">
        <div>
          <p>Made by vishnu with ❤️ Love All rights reserved by crazyXdeveloper</p>
        </div>
      </div>


    </div>
  )
}

export default Contact
