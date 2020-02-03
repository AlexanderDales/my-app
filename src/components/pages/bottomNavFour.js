import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './bottomNav.css'

class BottomNavFour extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <Link to="/" className="bottomText" id="home">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="bottomText">/</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/caseStudy2" className="bottomText" id="project">Next Project</Link>
          </div>
        </div>
      </div>
    );
    }
  }

  export default BottomNavFour;
