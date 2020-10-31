import React, { Component } from 'react'

import ScrollTop from '../../Components/ScrollTop'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default class index extends Component {
   componentDidMount() {
      window.scrollTo(0, 0)
   }

   render() {
      return (
         <div className='App'>
            <ScrollTop />
            <Hero />
            <Skills />
            <Projects />
            <Contact />
         </div>
      )
   }
}
