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
