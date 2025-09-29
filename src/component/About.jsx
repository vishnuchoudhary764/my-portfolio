import React from 'react'
import "./About.css"
import photo from '../assets/zara.jpg'

const About = () => {
  return (
    <>
    <div className='about-page'>
      <section data-aos="zoom-in-down" className='photo'>
        <img className='profile' src={photo} alt="my profile photo" />
      </section>
      <section className='bio'>
     {/* <h1>About Me</h1> */}
     <h2>Creating responsive UI/UX for better web experience</h2>
     <p>I am a dedicated and creative Frontend Developer currently pursuing a Bachelor of Technology in Computer Science from Rajasthan Technical University, Kota. With a strong grasp of HTML, CSS, JavaScript, and React.js. I’m also expanding my skills into backend technologies like Node.js and Java to grow into a full-stack developer. I value continuous learning, teamwork, and solving real-world problems through intuitive UI experiences.</p>
       <div className='edubox'>
         <h2 className='education'>Education </h2>
        <p data-aos="fade-up-left">B.Tech from Rajasthan Technical University, Kota <span>-----------</span><b>2023-2027</b></p>

        
        <p data-aos="fade-up-left"> 12th, Rajasthan Board of Secondary Education  <span>---------------</span><b>2021-2022</b></p>

        
       </div>
     
      </section>
    </div>
    </>
  )
}

export default About
