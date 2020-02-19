import React, { Component } from 'react';
import instagramFeed from '../images/instagramFeed.png';
import './photography.css';
import one from '../images/one.png';
import two from '../images/two.jpg';
import three from '../images/three.png';
import five from '../images/five.png';
import eight from '../images/eight.png';
import nine from '../images/nine.png';
import ten from '../images/ten.png';
import eleven from '../images/eleven.png';
import twelve from '../images/twelve.png';
import thirteen from '../images/thirteen.png';
import fifteen from '../images/fifteen.png';
import sixteen from '../images/sixteen.png';
import eighteen from '../images/18.jpg';
import nineteen from '../images/19.png';
import twenty from '../images/20.png';
import tone from '../images/21.png';
import ttwo from '../images/22.png';
import tthree from '../images/23.png';
import tfour from '../images/24.png';

import BottomNavTwo from './bottomNavTwo';

class Photography extends Component {
  render() {
    return (
      <div>

      <div className="container photos">

      <div className="row photoText justify-content-centre">New York City, Sep. 2019 - Portra 400</div>

      <div class="row">
      <div class="col-sm">
        <img src={nine} class="img-fluid"/>
      </div>
      <div class="col-sm">
        <img src={ten} class="img-fluid"/>
      </div>
      <div class="col-sm">
        <img src={eleven} class="img-fluid"/>
      </div>
      </div>

        <div class="row">
          <div class="col-sm">
            <img src={one} class="img-fluid"/>
          </div>
          </div>

          <div class="row">
          <div class="col-sm">
            <img src={twelve} class="img-fluid"/>
          </div>
          <div class="col-sm">
            <img src={thirteen} class="img-fluid"/>
          </div>
        </div>

        <div class="row">
        <div class="col-sm">
          <img src={fifteen} class="img-fluid"/>
        </div>
        <div class="col-sm">
          <img src={sixteen} class="img-fluid"/>
        </div>
      </div>

          <div class="row">
          <div class="col-sm">
            <img src={five} class="img-fluid"/>
          </div>
        </div>


        <div className="row photoText justify-content-centre">London, England, Dec. 2018 - Canon 6D (50mm)</div>

        <div class="row">
          <div class="col-sm">
            <img src={eighteen} class="img-fluid"/>
          </div>
          </div>

          <div class="row">
          <div class="col-sm">
            <img src={nineteen} class="img-fluid"/>
          </div>
          <div class="col-sm">
            <img src={twenty} class="img-fluid"/>
          </div>
        </div>

        <div class="row">
          <div class="col-sm">
            <img src={tone} class="img-fluid"/>
          </div>
          </div>

          <div class="row">
          <div class="col-sm">
            <img src={ttwo} class="img-fluid"/>
          </div>
          <div class="col-sm">
            <img src={tthree} class="img-fluid"/>
          </div>
          <div class="col-sm">
            <img src={tfour} class="img-fluid"/>
          </div>
        </div>

        <div className="container instagramTextBox">
          <div className="row instagramText text-xs-center">See more on <a href="https://www.instagram.com/whateverdales/" target="blank_" id="onlyInstagram">my Instagram </a></div>
        </div>

      </div>
      </div> //wrap
    );
  }
}

export default Photography;
