import React, { Component } from 'react';
import './navbar.css';
import personalLogo from '../images/personalLogo.svg';
import PDF from "../images/AlexDales_Resume.pdf";
import './navbar.css';

class Navbar extends Component {

  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container padded">
      <a className="navbar-brand" href="#"><img src={personalLogo} id="navLogo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
          <div className="collapse navbar-collapse mr-right" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Work <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href={PDF} target="blank_">Resume <span className="sr-only">(current)</span> </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="mailto:contact@alexdales.com">Contact</a>
              </li>
            </ul>
          </div>
          </div>
      </nav>

    );
  }
}

export default Navbar;
