import React from 'react'
import "./Home.css"
const Home = () => {
    return (
        <div>
            <div className='home-page'>
                <h1>Vishnu Choudhary  </h1>
                <h2 className='typewritter'>Frontend Developer</h2>
                <p className='passion'>I'm a Passionate Computer Science student and Full Stack (MERN + Next.js) Developer with practical
                    experience in building and deploying modern web applications. Proficient in creating scalable
                    backend systems, REST APIs, and responsive frontends.</p>
                <div className="btns">

                    <button
                        onClick={() =>
                            window.open(
                                "/VISHNU_CHOUDHARY_RESUME.pdf"
                            )
                        }
                        className="rbtn"

                    >
                        Resume
                    </button>
                    <button
                        onClick={() =>
                            window.open(
                                "https://wa.me/917877691126?text=Hi%20I%20visited%20your%20portfolio%20and%20want%20to%20hire%20you",
                                "_blank"
                            )
                        }
                        className="hbtn"
                    >
                        Hire Me
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Home
