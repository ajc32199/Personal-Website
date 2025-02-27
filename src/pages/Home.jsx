import React from 'react'
import '../css/Home.css'
import Headshot from '../assets/headshot.jpg'

function Home () {
  return (
    <div className="home">
        <div>
          <h1 className="welcome">Welcome to my Website!</h1>
          <img src={Headshot} alt="Headshot" className='headshot'></img>
        </div>
        <div>
          <p className='home-desc'>
            Welcome to my personal site, built with ReactJS and NodeJS. I hope you take some time to look around and explore my projects, experience, and passions in the software world, as well as learn a little more about me!</p>
        </div>
    </div>
  )
}

export default Home 