import { useEffect, useState } from 'react';
import '../Styles/index.css';
import '../Styles/projects.css';

function Projects() {
    return(
        <main className="project-page">
                    <h2>These are the projects I've been working on!</h2>

          <div className='project-grid'>
            <div className='project-class'>
              This is a project
            </div>
                  <div className='project-class'>
              This is a project
            </div>
          </div>

        </main>
    )
}

export default Projects;