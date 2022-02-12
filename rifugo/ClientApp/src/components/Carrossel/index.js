import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      adaptiveHeight:true
    };
    return (
      <div>
        <h2> </h2>
        <Slider {...settings}>
          <div>
           <img src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HrpX679LRxXT7MSqREQ4Fw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=228.94951&pitch=0&thumbfov=100"/>
          </div>
          <div>
          <img src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=hDqOtc504ULHY_kOmY2qAw&cb_client=search.gws-prod.gps&w=408&h=240&yaw=162.32686&pitch=0&thumbfov=100"/>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}