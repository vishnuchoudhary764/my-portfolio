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
     <h2>Building Modern & Responsive Web Experiences</h2>
     <p>Dedicated Computer Science student and Full Stack (MERN + Next.js) Developer at Rajasthan Technical University, Kota, with hands-on experience in building responsive and scalable web applications. Skilled in HTML, CSS, JavaScript, React.js, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS. Focused on creating clean UI/UX designs and solving real-world problems through efficient web solutions.</p>
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
