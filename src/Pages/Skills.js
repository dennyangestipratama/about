import React, { Component } from 'react'
import Skeleton from 'react-loading-skeleton'
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

import firebase from '../Services/Firebase'
import { ReactComponent as CodeSVG } from '../Assets/icons/code.svg'

export default class Skills extends Component {
   constructor(props) {
      super(props)

      this.state = {
         skills: [],
         isLoading: true
      }
   }

   componentDidMount() {
      this.fetchSkills()
   }

   fetchSkills = () => {
      firebase.database().ref('skills').on('value', (snapshot) => {
         const databaseSkills = snapshot.val()
         this.setState({
            skills: databaseSkills,
            isLoading: false
         })
      })
   }

   render() {
      const { isLoading, skills } = this.state
      return (
         <section id='section-skill' className="section section-skills">
            {isLoading ? null : <CodeSVG />}
            <header>
               <div className="section-title">
                  <div className="title-line"></div>
                  <Fade left distance={'30px'} duration={1800} delay={200}>
                     <h1>Skills</h1>
                  </Fade>
               </div>
               <Fade top distance={'30px'} duration={1800}>
                  <h2>These all my current skills and framework that I use as a Frontend Developer to build a website fully works.</h2>
               </Fade>
            </header>
            {isLoading ?
               <body className="loading-skills">
                  {Array.apply(null, Array(10)).map(() => (
                     <Skeleton />
                  ))}
               </body> :
               <body className='skills'>
                  {skills?.map(skill => {
                     return (
                        <Flip left duration={2200}>
                           <div className="skills-card">
                              <div className="skills-image-wrapper">
                                 <div className="skills-image"></div>
                                 <img src={skill.image} alt={skill.name} />
                              </div>
                              <h4>{skill.name}</h4>
                           </div>
                        </Flip>
                     )
                  })}
               </body>
            }
         </section>
      )
   }
}
