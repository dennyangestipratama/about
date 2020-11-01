import React, { Component } from 'react'

import UnderConstructionIMG from '../../../Assets/icons/construction.svg'
import WarningIMG from '../../../Assets/icons/warning.svg'

export default class UnderConstruction extends Component {
   render() {
      return (
         <div className='under-construction'>
            <div className="under-construction-title">Coming Soon</div>
            <div className="under-construction-subtitle">This project are still on development, please come back later</div>
            <img src={UnderConstructionIMG} alt="construction" className="construction" />
            <img src={WarningIMG} alt="warning" className="warning" />
         </div>
      )
   }
}
