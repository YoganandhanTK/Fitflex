import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/About.css'
import aboutImg from '../assets/about-Img.png'

function About() {
const navigate = useNavigate();

  // const handleJoinClick = () => {
  //   navigate('/'); // Works if Router is present
  // };

  return (
    <div className='about-container' id='about'>

      <div className="about-image">
          <img src={aboutImg} alt="" />
      </div>

      <div className="about-text">
          <span>
            <div className="about-line" />
            <h5>About Us</h5>
          </span>
          <h3>Welcome to FitFlex</h3>
         <p>At FitFlex, fitness is more than just workouts — it’s a journey to discover your strength and confidence.We’re a community that moves together, grows together, and supports each step of your fitness story.Whether you’re stretching, sweating, or smashing goals, FitFlex helps you move better and feel stronger every day.</p>
          {/* <p><b onClick={handleJoinClick}>Join us</b> and flex your way to a healthier, happier you.</p> */}
          <p><b>Join us</b> and flex your way to a healthier, happier you.</p>

      </div>

    </div>
  )
}

export default About