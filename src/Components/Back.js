import React, { Component } from 'react'
import ArrowSVG from '../Assets/icons/arrow-left.svg'

export default class ScrollTop extends Component {
   goBack = () => {
      this.props.history.goBack()
   }
   render() {
      return (
         <div className='scroll-top back' onClick={() => this.goBack()}>
            <img src={ArrowSVG} alt="arrow" />
         </div>
      )
   }
}
