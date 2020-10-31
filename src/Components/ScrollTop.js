import React, { Component } from 'react'
import ArrowSVG from '../Assets/icons/arrow-up.svg'

export default class ScrollTop extends Component {
   scrollToTop = () => {
      console.log(window.location.hash)
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }
   render() {
      return (
         <div className='scroll-top top' onClick={() => this.scrollToTop()}>
            <img src={ArrowSVG} alt="arrow" />
         </div>
      )
   }
}
