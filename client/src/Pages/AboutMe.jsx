import { useEffect, useState } from 'react';
import '../Styles/index.css';
import '../Styles/about.css'
import faceImg from '../assets/face-img.jpg'

function AboutMe () {
    return(
        <main className='about-page'>
            <div>
                    <img src={faceImg} alt="portrait-of-simon" className="corner-img" />
              </div>
            <div className='about-box'>
                <h1>Hello I'm Simon</h1>
                <div className="about-text">
                    <h3>Welcome to my portfolio!</h3> 
                    <p>In the Project tab you can see what I've been working on previously. <br/>
                        Most of the projects have been university related, but some are hobbies. <br/>
                        Feel free to reach out to me through my contact info if you have any questions or want to connect!</p>
                    <p> <br/>

                        I have a strong foundation in software engineering 
                        from a bachelor's degree in computer science!
                    </p>

                </div>

                <div className='about-text'>
                    <h3>About me</h3>
                    <p>I'm a passionate developer 
                        with experience in creating engaging software solutions with results.</p>
                </div>


                <div className='about-text'>
                    <h3>Experience</h3>
                    <p>Here's a bit about my background</p>
                </div>
                <div className='about-text'>
                    <h3>Skills & Technologies</h3>
                    <p>Here are my skills and technologies</p>
            </div>

            </div>
            <div className='about-box'>
                <p>Hello there</p>
            </div>
        </main>
    )
}

export default AboutMe;