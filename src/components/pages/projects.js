import React, { Component } from 'react';
import './projects.css';
import NewNight from './NewNight.js';
import caseStudy2 from './caseStudy2.js';
import dailysum from '../images/dailysum.png';
import appsanddevices from "../images/appsanddevices.png";
import newnightcover from "../images/newnightcover.png";
import dailyactivitycover from "../images/dailyactivitycover.png";
import rbcCover from "../images/rbcCover.png";

import { Link } from "react-router-dom";


class Projects extends Component {
  render() {
    return (
      <div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={newnightcover} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
            <div className="container rightSide">
             <span><div className="topText">Android Application</div></span>
             <h4 class="study-header">New Night</h4>
             <Link to="/NewNight" className="link">View project</Link>
             </div>
          </div>
        </div>
        </div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={dailyactivitycover} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
            <div className="container rightSide">
             <span><div className="topText">Product Designer at Sprout</div></span>
             <h4 class="study-header">Daily Activity</h4>
             <Link to="/caseStudy3" className="link">View case study</Link>
             </div>
          </div>
        </div>
        </div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={rbcCover} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
            <div className="container rightSide">
             <span><div className="topText">Royal Bank of Canada</div></span>
             <h4 class="study-header">Working as a UI/UX Designer</h4>
             <Link to="/caseStudy4" className="link">My work</Link>
             </div>
          </div>
        </div>
        </div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={appsanddevices} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
            <div className="container rightSide">
             <span><div className="topText">Product Designer at Sprout</div></span>
             <h4 class="study-header">Connceting an App/Device</h4>
             <Link to="/caseStudy2" className="link">View case study</Link>
             </div>
          </div>
        </div>
        </div>










    </div>

);
}
}

export default Projects;
