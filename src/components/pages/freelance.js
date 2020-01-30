import React, { Component } from 'react';
import './freelance.css';
import brandan from '../images/brendan.png';
import ar from '../images/ar.png';
import m6 from '../images/m6.png';
import swift from '../images/swift.png';
import dna from '../images/dna.png';
import crayon from '../images/crayon.png';
import pdc from '../images/pdc.png';
import flower from '../images/flower.png';
import ceye from '../images/ceye.png';
import tres from '../images/tres.png';
import twc from '../images/twc.png';
import nikko from '../images/nikko.png';
import csgocrave from '../images/csgocrave.png';
import mored from '../images/mored.png';
import astralis from '../images/astralis.png';
import jf from '../images/jf.png';
import hottshy from '../images/hottshy.png';
import as from '../images/as.png';
import interactivehome from '../images/interactivehome.png';


class Freelance extends Component {
  render() {
    return (
    <div class ="container-fluid">
      <div className="container Row freelanceText">
        Below are a collection of some logo designs.
      </div>

      <div class="container logos">

      <div class="row">
        <div class="col-sm">
          <img src={brandan} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={dna} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={ar} class="img-fluid dribbble"/>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <img src={m6} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={pdc} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={astralis} class="img-fluid dribbble"/>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <img src={jf} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={flower} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={twc} class="img-fluid dribbble"/>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <img src={tres} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={crayon} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={csgocrave} class="img-fluid dribbble"/>
        </div>
      </div>

      <div class="row">
        <div class="col-sm">
          <img src={as} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={hottshy} class="img-fluid dribbble"/>
        </div>
        <div class="col-sm">
          <img src={interactivehome} class="img-fluid dribbble"/>
        </div>
      </div>

      </div>

      <div className="container dribbbleTextBox">
        <div className="row dribbbleText text-xs-center">
        See more on <a href="https://dribbble.com/AlexDales" target="blank_" id="onlyDribbble">Dribbble </a>
        </div>
      </div>

      </div>

    );
  }
}

export default Freelance;
