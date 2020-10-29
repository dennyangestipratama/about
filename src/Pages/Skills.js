import React, { Component, Fragment } from 'react'
import Skeleton from 'react-loading-skeleton'

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
         <section className="section section-skills">
            {isLoading ? null : <CodeSVG />}
            <header>
               <div className="section-title">
                  <div className="title-line"></div>
                  <h1>Skills</h1>
               </div>
               <h2>These all my current skills and framework that I use as a Frontend Developer to build a website fully works.</h2>
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
                        <div className="skills-card">
                           <div className="skills-image-wrapper">
                              <div className="skills-image"></div>
                              <img src={skill.image} alt={skill.name} />
                           </div>
                           <h4>{skill.name}</h4>
                        </div>
                     )
                  })}
               </body>
            }
         </section>
      )
   }
}
