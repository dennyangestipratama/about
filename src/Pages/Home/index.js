import React, { Component } from 'react'
import ReactGA from 'react-ga';

import { MEASUREMENT_ID } from '../../Services/EmailJS'
import ScrollTop from '../../Components/ScrollTop'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

export default class index extends Component {
   constructor(props) {
      super(props)
      ReactGA.initialize(MEASUREMENT_ID)
      this.state = {

      }
   }

   componentDidMount() {
      window.scrollTo(0, 0)
      ReactGA.pageview(window.location.pathname + window.location.search)
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
