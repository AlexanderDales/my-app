import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './bottomNav.css'

class BottomNavTwo extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <Link to="/" className="bottomText" id="home">Home</Link>
          </div>
        </div>
      </div>
    );
    }
  }

  export default BottomNavTwo;
