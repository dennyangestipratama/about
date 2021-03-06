import React, { Component, Fragment } from 'react'
import ReactGA from 'react-ga';

import { MEASUREMENT_ID } from '../../Services/EmailJS'
import firebase from '../../Services/Firebase'
import Carousel from '../../Components/Carousel'
import Back from '../../Components/Back'
import LiveSVG from '../../Assets/icons/live.svg'
import UnderConstruction from './Components/UnderConstruction'

export default class index extends Component {
   constructor(props) {
      super(props)
      ReactGA.initialize(MEASUREMENT_ID);
      this.state = {
         projectName: props.match.params.name,
         project: null,
         screenshots: [],
         isLoading: true
      }
   }

   componentDidMount() {
      window.scrollTo(0, 0)
      ReactGA.pageview(window.location.pathname + window.location.search)
      this.fetchProjects()
   }

   fetchProjects = () => {
      const { projectName } = this.state
      firebase.database().ref('projects').on('value', (snapshot) => {
         const databaseProjects = snapshot.val()
         const detailProject = databaseProjects.filter(filter => filter.name === projectName)
         detailProject.forEach(project => {
            this.setState({
               project: project,
               screenshots: project.screenshots,
               isLoading: false
            })
         })
      })
   }

   render() {
      const { project, screenshots, isLoading } = this.state
      console.log('project', project)
      return (
         <div className='project-detail'>
            <Back {...this.props} />
            {isLoading ? null :
               <div className='project-detail-map'>
                  <div className="project-detail-img">
                     <img src={project?.logoIMG} alt={`${project.name}-logo`} />
                     <img src={project?.textIMG} alt={`${project.name}-text`} />
                  </div>
                  {!screenshots ? <UnderConstruction /> :
                     <div className="project-detail-carousel">
                        <a href={project.url} target='_blank' rel="noopener noreferrer">
                           <img src={LiveSVG} alt="live" />
                        </a>
                        <Carousel>
                           {screenshots.map(screenshot => {
                              return (
                                 <Fragment>
                                    <img src={screenshot.imageURL} alt='screenshot' />
                                 </Fragment>
                              )
                           })}
                        </Carousel>
                     </div>
                  }
               </div>
            }
         </div>
      )
   }
}
