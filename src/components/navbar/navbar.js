import React, { Component } from 'react';
import './navbar.css';
import personalLogo from '../images/personalLogo.svg';
import PDF from "../images/AlexDales_Resume.pdf";
import './navbar.css';
import { Link } from "react-router-dom";

class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container padded">
      <Link to="/" className="navbar-brand"><img src={personalLogo} id="navLogo" /></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse mr-right" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">Work <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PDF} target="blank_">Resume <span className="sr-only">(current)</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:ackdales@uwaterloo.ca">Contact</a>
              </li>
            </ul>
          </div>
          </div>
      </nav>

    );
  }
}

export default Navbar;
