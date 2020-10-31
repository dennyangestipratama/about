import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Carousel extends Component {
   render() {
      const settings = {
         dots: true,
         infinite: true,
         speed: 500,
         autoplay: true,
         autoplaySpeed: 3500,
         slidesToShow: 1,
         swipeToSlide: true,
         slidesToScroll: 1,
         arrows: false,
         adaptiveHeight: true
      };

      return (
         <Slider {...settings}>
            {this.props.children}
         </Slider>
      )
   }
}