import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export default class Nav extends Component {
   render() {
      return (
         <nav>
            <ul>
               <Fade top distance={'30px'} duration={2400} delay={300} >
                  <li><a href="#section-skill">Skill</a></li>
                  <li><a href="#section-project">Project</a></li>
                  <li><a href="#section-contact">Contact</a></li>
               </Fade>
            </ul>
         </nav>
      )
   }
}
