import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/index.css';
import '../Styles/projects.css';
import progressionPic from '../assets/progression.png'
import calcPic from '../assets/calc.png'
import foodloversPic from '../assets/foodlovers.png'
import machineLearning from '../assets/machineLearning.png'
import tsm from '../assets/tsm1.jpg'
import project from '../assets/project.png'


function Projects() {
    return(
        <main className="project-page">
                    <h2>These are some of the projects I've been working on!</h2>

          <div className='project-grid'>

            <div className='project-class'>
              <h2 className='project-title'>Mobile Application</h2>
              <a href="https://www.linkedin.com/feed/update/urn:li:activity:7401953612643352576/">
              <img className='img' src={tsm} alt="AppDev-pic" />

              </a>
              <p className='location'>Project: Kristianstad University and Combitech</p>
              <p className='description'>We developed an app designed to increase public awareness and confidence around Sweden's total defense. We used gamification to engage the user in quizzes and info</p>
              <p className='learn'>What I learned: Kotlin in Jetpack Compose, Firebase, MVVM Architechture</p>

            </div>

            <div className='project-class'>
              <h2 className='project-title'>Machine Learning - Prediction Model</h2>
              <a href="https://github.com/Atlaseer/MachineLearning-ModelTraining">
              <img className='img' src={machineLearning} alt="machineLearning-pic" />

              </a>
              <p className='location'>Project: Kristianstad University</p>
              <p className='description'>We created a custom logistical regression model with the goal to predic the winner in the UFC competition based of a dataset of previous matches</p>
              <p className='learn'>What I learned: Training, testing and validating a custom logistical regression model</p>

            </div>

            <div className='project-class'>
              <h2 className='project-title'>FoodLovers</h2>
              <a href="https://fullstackproject-clientside.onrender.com/"
              target='_blank'
              rel='noopener noreferrer'>
              <img className='img' src={foodloversPic} alt="project-pic" />
              </a>
              <p className='location'>Project: Kristianstad University</p>
              <p className='description'>Food-related website developed in a team using MERN-stack</p>
              <p className='learn'>What I learned: MERN-stack, primarily backend and cooperating in a team</p>
            </div>
            
            <div className='project-class'>
              <h2 className='project-title'>Progression</h2>
              <a href="https://github.com/Atlaseer/Progression"
              target='_blank'
              rel='noopener noreferrer'>
              <img className='img' src={progressionPic} alt="project-pic" />
              </a>

              <p className='location'>Project: Hobby</p>
              <p className='description'>Workout app that allows a user to create a profile and add workouts. Utilizes a MERN-stack
              <br /> Currently in development
              </p>
              <p className='learn'>What I learned: Fullstack, React, interactive and visual design</p>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>Calculator</h2>
              <a href="https://github.com/Atlaseer/calculator">
              <img className='img' src={calcPic} alt="project-pic" />

              </a>
              <p className='location'>Project: Practice</p>
              <p className='description'>Calculator, my first introduction to frontend</p>
              <p className='learn'>What I learned: HTML, CSS and JavaScript</p>

            </div>



          </div>

        </main>
    )
}

export default Projects;