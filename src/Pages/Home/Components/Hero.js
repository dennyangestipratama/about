import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import Nav from '../../../Layouts/Nav'

export default class Hero extends Component {
   render() {
      return (
         <section className="section hero">
            <header>
               <Fade right distance={'30px'} duration={1800} delay={200}>
                  <div className='hero-title'>Denny Angesti<br />Pratama</div>
               </Fade>
               <div className="line-hero"></div>
               <Fade left distance={'30px'} duration={1800} delay={600}>
                  <div className='hero-sub'>Frontend Developer<br />UI Designer</div>
               </Fade>
            </header>
            <Nav />
         </section>
      )
   }
}
