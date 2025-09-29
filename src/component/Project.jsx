import React from 'react'
import "./Project.css"
import ttt from '../assets/tttgame.png'
import sacimg from '../assets/sacimg.jpg'
import wbg from '../assets/wbg.png'



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
            <a href="https://weather-app-xi-six-99.vercel.app/" target="blank">
              <img className='wbg' src={wbg} alt="" />
            </a>
          </div>
          <div data-aos="fade-up" className="ab">
            <h1>Weather-App</h1>
            <p>This project is a beginner-friendly weather application built with React.js. It showcases the
              use of useState for handling user input and conditional rendering, along with API data fetching
              to display live weather conditions.</p>
            <h4>Technology used - React.js</h4>
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
