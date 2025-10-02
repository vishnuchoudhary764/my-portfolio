import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className='home-page'>
                <h1>Vishnu Choudhary  </h1>
                <h2 className='typewritter'>Frontend Developer</h2>
                <p className='passion'>I'm a frontend developer with strong foundation in HTML, CSS, JavaScript, and modern frameworks like React.js. Skilled in building responsive, user-friendly web interfaces with a focus on performance and accessibility.Eager to contribute to dynamic teams, continuously learn new technologies.Let's start scrolling and learn more about me.</p>
                <div className="btns">
                  
                    <a
                        href="/VASANA_RAM_RESUME.pdf"
                        download="Vishnu_Choudhary.pdf"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                    >
                         <button className='rbtn'>Resume</button>
                    </a>
                    <button className='hbtn'>Hire Me</button>
                </div>

            </div>
        </div>
    )
}

export default Home
