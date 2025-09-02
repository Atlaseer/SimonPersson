import { useEffect, useState } from 'react';
import '../Styles/index.css';
import '../Styles/projects.css';
import projectPic1 from '../assets/woods2.jpg'

function Projects() {
    return(
        <main className="project-page">
                    <h2>These are some of the projects I've been working on!</h2>

          <div className='project-grid'>
            
            <div className='project-class'>
              <h2 className='project-title'>Project Title</h2>
              <img src={projectPic1} alt="project-pic" />
            </div>

            <div className='project-class'>
              <h2 className='project-title'>Project title</h2>
            </div>

            <div className='project-class'>
              <h2 className='project-title'>Project title</h2>
            </div>

          </div>

        </main>
    )
}

export default Projects;