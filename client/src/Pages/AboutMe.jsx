import { useEffect, useState } from 'react';
import '../Styles/index.css';
import '../Styles/about.css'
import faceImg from '../assets/face-img.jpg'

function AboutMe () {
    return(
        <main className='about-page'>
            <div className='about-box'>
                <h1>Hello I'm Simon</h1>
                <div>
                    <img src={faceImg} alt="portrait-of-simon" className="corner-img" />
              </div>
            </div>
        </main>
    )
}

export default AboutMe;