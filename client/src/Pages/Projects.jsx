import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/index.css';
import '../Styles/projects.css';
import progressionPic from '../assets/progression.png'
import calcPic from '../assets/calc.png'
import foodloversPic from '../assets/foodlovers.png'


function Projects() {
    return(
        <main className="project-page">
                    <h2>These are some of the projects I've been working on!</h2>

          <div className='project-grid'>
            
            <div className='project-class'>
              <h2 className='project-title'>Progression</h2>
              <a href="https://github.com/Atlaseer/Progression"
              target='_blank'
              rel='noopener noreferrer'>
              <img className='img' src={progressionPic} alt="project-pic" />
              </a>

              <p className='location'>Project: Hobby</p>
              <p className='description'>Workout app that allows a user to create a profile and add workouts.
              <br /> Currently in development
              </p>
              <p className='learn'>What I learned: </p>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>FoodLovers</h2>
              <a href="https://fullstackproject-clientside.onrender.com/"
              target='_blank'
              rel='noopener noreferrer'>
              <img className='img' src={foodloversPic} alt="project-pic" />
              </a>
              <p className='location'>Project: Kristianstad University</p>
              <p className='description'>Food-related app developed in a team using MERN-stack</p>
              <p className='learn'>What I learned: </p>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>Calculator</h2>
              <a href="https://github.com/Atlaseer/calculator">
              <img className='img' src={calcPic} alt="project-pic" />

              </a>
              <p className='location'>Project: Practice</p>
              <p className='description'>Introduction to HTML, CSS and Javascript</p>
              <p className='learn'>What I learned: </p>

            </div>

          </div>

        </main>
    )
}

export default Projects;