import React from 'react'
import "./Project.css"
import ttt from '../assets/tttgame.png'
import sacimg from '../assets/sacimg.jpg'
import wbg from '../assets/wbg.png'
import uniTalk from '../assets/uniTalk.png'





const Project = () => {

  return (
    <div>
      <div className='container'>
        <h1>Projects</h1>
        <div className="project project1">
          <div data-aos="fade-down-left" className="live">
            <a href="https://rtuclub.vercel.app/" target="blank">
              <img className='sacimg' src={sacimg} alt="" />
            </a>
          </div>
          <div data-aos="fade-down" className="ab">
            <h1>Sac-Rtu</h1>
            <p>Club & Events web application built with Next.js! , This app helps students explore clubs,
              register for events, and manage activities with a smooth, responsive interface for Desktop.</p>
            <h4>Technology used - NextJs , Tailwind css</h4>
          </div>

        </div>
         <div className="project project2">
            <div data-aos="fade-up-right" className="live">
              <a href="https://github.com/vishnuchoudhary764/unitalk-backend" target="blank">
                <img className='wbg' src={uniTalk} alt="" />
              </a>
            </div>
            <div data-aos="fade-up" className="ab">
              <h1>UniTalk - Chat App Backend</h1>
              <p>
                A backend system for a real-time chat application built with Node.js and Express.js.
                Features include RESTful APIs for user authentication using JWT, an email verification
                system via Nodemailer, and an anonymous chat system where identities are revealed only
                after mutual connection.
              </p>
              <h4>Technology used - Node.js, Express.js, MongoDB, JWT, Nodemailer</h4>
            </div>
          </div>
       
        <div className="project project3">
          <div data-aos="fade-up" className="ab">
            <h1>Tic-Tac-Toe Game </h1>
            <p>A fun project where players can play Tic Tac Toe directly in the browser. Developed using only HTML, CSS, and JavaScript – a great example of DOM manipulation and logic building. The project allows two players to take turns, includes a clean UI, turn-based logic,win or draw condition checking functionality.</p>
            <h4>Technology used - Html , Css , Javascript</h4>
          </div>
          <div data-aos="fade-up-right" className="live">
            <a href="https://vishnuchoudhary764.github.io/Tic-Tac-Toe-game/" target="blank">
              <img className='ttbg' src={ttt} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
