import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
import Fade from 'react-reveal/Fade';

import firebase from '../../../Services/Firebase'
import Button from '../../../Components/Button'
import { ReactComponent as WorkSVG } from '../../../Assets/icons/work.svg'

export default class Projects extends Component {
   constructor(props) {
      super(props)

      this.state = {
         projects: [],
         isLoading: true
      }
   }

   componentDidMount() {
      this.fetchProjects()
   }

   fetchProjects = () => {
      firebase.database().ref('projects').on('value', (snapshot) => {
         const databaseProjects = snapshot.val()
         this.setState({
            projects: databaseProjects,
            isLoading: false
         })
      })
   }

   render() {
      const { isLoading, projects } = this.state
      return (
         <section id='section-project' className="section section-projects">
            {isLoading ? null : <WorkSVG />}
            <header>
               <div className="section-title">
                  <div className="title-line"></div>
                  <Fade left distance={'30px'} duration={1800} delay={200}>
                     <h1>Project</h1>
                  </Fade>
               </div>
               <Fade top distance={'30px'} duration={1800}>
                  <h2>These all my current work, some of them are still developing or still on progress.</h2>
               </Fade>
            </header>
            {isLoading ?
               <body className="loading-projects">
                  {Array.apply(null, Array(6)).map(() => (
                     <Skeleton />
                  ))}
               </body> :
               <body className='projects'>
                  {projects?.map(project => {
                     return (
                        <Fade bottom distance={'30px'} duration={2200} delay={200}>
                           <div className="projects-card">
                              <img className="projects-card-logo" src={project.logoIMG} alt={`${project.name}-logo`} />
                              <img className="projects-card-text" src={project.textIMG} alt={`${project.name}-text`} />
                              <h3>{project.description}</h3>
                              <Button
                                 arrow={true}
                                 text={project.completed ? "See Detail" : "On Progress"}
                                 to={`/project/${project.name}`}
                              />
                           </div>
                        </Fade>
                     )
                  })}
               </body>
            }
         </section>
      )
   }
}
