import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>FitFlex</h5>
        </span>
        <h2><b className='txt-color1'>FitFlex Chronicles: </b> Bend with Power Burn with Purpose <b>Become </b> <b className='txt-color2'> Legendary !</b></h2>
        


        <a href="#search"><button>View more</button></a>
      </div>
    </div>
  )
}

export default Hero