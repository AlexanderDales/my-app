import React, { Component } from 'react';
import './projects.css';
import caseStudy1 from './caseStudy1.js';
import dailysum from '../images/dailysum.png';
import appsanddevices from "../images/appsanddevices.png";
import newnightcover from "../images/newnightcover.png";

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
             <span><h5>Mobile Android Application</h5></span>
             <h4 class="study-header">New Night</h4>
             <Link to="/caseStudy1">More on this case study</Link>
          </div>
        </div>
        </div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={appsanddevices} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
             <span><h5>Sprout at Work</h5></span>
             <h4 class="study-header">Re-designing Daily Activity</h4>
             <Link to="/caseStudy1">More on this case study</Link>
          </div>
        </div>
        </div>

        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={appsanddevices} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
             <span><h5>Sprout at Work</h5></span>
             <h4 class="study-header">Re-designing Daily Activity</h4>
             <Link to="/caseStudy1">More on this case study</Link>
          </div>
        </div>
        </div>


        <div className="container featured">
          <div className="row">

            <div class="col-lg-7 my-auto p-0">
             <img src={appsanddevices} class="img-fluid"/>
            </div>

            <div class="col-lg-5 text-left my-auto">
             <span><h5>Royal Bank of Canadak</h5></span>
             <h4 class="study-header">Re-designing Daily Activity</h4>
             <Link to="/caseStudy1">More on this case study</Link>
          </div>
        </div>
        </div>




    </div>

);
}
}

export default Projects;
