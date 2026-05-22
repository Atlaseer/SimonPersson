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
                </div>

                <div className='about-text'>
                    <h3>About me</h3>
                    <p>I'm a passionate developer 
                        with experience in creating engaging software solutions with results.<br/>
                           I have a strong foundation in software engineering 
                        from a bachelor's degree in computer science!</p>
                </div>


                <div className='about-text'>
                    <h3>Experience</h3>
                    <p>Initially I started working with service related jobs such as a restaurant worker, bartender, <br/> 
                    and site responsible. <br/>
                    Later on after studying to be an assistance nurse, I worked within the healthcare system at elderly care homes, <br/> 
                    </p>
                </div>
                <div className='about-text'>
                    <h3>Skills & Technologies</h3>
                    <p><b>Languages:</b> Python, Java, C#, Javascript, Kotlin, C++<br/>
                    <b>Frontend:</b> HTML, CSS, React<br/>
                    <b>Backend:</b> Node.js, Express.js<br/>
                    <b>Databases:</b> MYSQL, MongoDB, Firebase<br/>
                    <b>Tools:</b> Git, Github, Postman, Jira, VsCode, IntelliJ, Rider
                    </p>
            </div>

            </div>
            <div className='about-box'>
                <p><b>Feel free to contact me on any of my socialmedia platforms!</b><br/>
                <b>LinkedIn: </b><a href="https://www.linkedin.com/in/simon-persson-2b3b3919b/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a><br/>
                <b>Mail: </b><a href="mailto:simonpersson@outlook.com">simonpersson@outlook.com</a><br/>
                <b>Instagram: </b><a href="https://www.instagram.com/simonpers/" target="_blank" rel="noopener noreferrer">Instagram Profile</a><br/>
                <p></p>
                </p>
            </div>
        </main>
    )
}

export default AboutMe;