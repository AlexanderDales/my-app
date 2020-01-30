import React, { Component } from 'react';
import './projects.css';
import dailysum from '../images/dailysum.png';

class Projects extends Component {
  render() {
    return (
      <div>
<div className="container featured">
  <div className="row">

    <div class="col-lg-7 my-auto p-0">
     <img src={dailysum} class="img-fluid"/>
    </div>

    <div class="col-lg-5 text-left my-auto">
     <span><h5>Sprout at Work</h5></span>
     <h4 class="study-header">Apps and Devices</h4>
     <a href="#"><div class="view-btn-alt">Read More</div></a>
    </div>
  </div>
</div>

<div className="container featured">
  <div className="row">

    <div class="col-lg-7 my-auto p-0">
     <img src={dailysum} class="img-fluid"/>
    </div>

    <div class="col-lg-5 text-left my-auto">
     <a href="#"><div class="view-btn-alt">Read More</div></a>
    </div>
  </div>
</div>

<div className="container featured">
  <div className="row">

    <div class="col-lg-7 my-auto p-0">
     <img src={dailysum} class="img-fluid"/>
    </div>

    <div class="col-lg-5 text-left my-auto">
     <span><h5>Mobile Android Application</h5></span>
     <h4 class="study-header">New Night</h4>
     <a href="#"><div class="view-btn-alt">Read More</div></a>
    </div>
  </div>
</div>
</div>
);
}
}

export default Projects;
