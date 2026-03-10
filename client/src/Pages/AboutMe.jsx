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
                    <h3>I'm a passionate developer 
                        with experience in creating engaging web applications.</h3>
                </div>
                <div className='about-text'>
                    <h3>Here's a bit about my background and skills:</h3>
                    <h3>I have a strong foundation in software engineering 
                        from a bachelor's degree in computer science!</h3>
                </div>

            </div>
        </main>
    )
}

export default AboutMe;