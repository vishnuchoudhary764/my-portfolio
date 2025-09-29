import React from 'react'
import "./Skill.css"
import react from "../assets/react.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import css from "../assets/css.png"
import github from "../assets/github.png"


const Skill = () => {
  return (
    <div>
      <h1 className='shead'>Skills</h1>
    <div className='skill-page'>
      <div className="sbox">
        <img data-aos="fade-right" src={react} alt="" />
        <h2>REACT</h2>
      </div>
      <div className="sbox">
        <img data-aos="fade-up-right" src={js} alt="" />
        <h2>JavaScript</h2>
      </div>
      <div className="sbox">
        <img data-aos="zoom-in" src={css} alt="" />
        <h2>CSS</h2>
      </div>
      <div className="sbox">
        <img data-aos="fade-down-left" src={html} alt="" />
        <h2>HTML</h2>
      </div>
      <div className="sbox">
        <img data-aos="fade-left" src={github} alt="" />
        <h2>GitHub</h2>
      </div>
      

    </div>
</div>
  )
}

export default Skill
