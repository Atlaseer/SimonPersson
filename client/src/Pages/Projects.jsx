import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/index.css';
import '../Styles/projects.css';
import projectPic1 from '../assets/woods.jpg'
import projectPic2 from '../assets/woods2.jpg'
import projectPic3 from '../assets/woods3.jpg'


function Projects() {
    return(
        <main className="project-page">
                    <h2>These are some of the projects I've been working on!</h2>

          <div className='project-grid'>
            
            <div className='project-class'>
              <h2 className='project-title'>Work-It</h2>
              <img src={projectPic1} alt="project-pic" />
              <p className='location'>Project: Hobby</p>
              <p className='description'>Workout app that allows a user to create a profile and add workouts.
              <br /> Currently in development
              </p>
              <p className='learn'>What I learned: </p>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>FoodLovers</h2>
              <img src={projectPic2} alt="project-pic" />
              <p className='location'>Project: Kristianstad University</p>
              <p className='description'>Food-related app developed in a team using MERN-stack</p>
              <p className='learn'>What I learned: </p>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>Calculator</h2>
              <img src={projectPic3} alt="project-pic" />
              <p className='location'>Project: Practice</p>
              <p className='description'>Introduction to HTML, CSS and Javascript</p>
              <p className='learn'>What I learned: </p>

            </div>

          </div>

        </main>
    )
}

export default Projects;