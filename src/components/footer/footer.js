import React, { Component } from 'react';
import './footer.css';
import dribbbleLogo from '../images/dribbble.svg';
import linkedinLogo from '../images/linkedin.svg';
import instagramLogo from '../images/instagram.svg';
import twitterLogo from '../images/twitter.svg';

class Footer extends Component {
  render() {
    return (
    <div className="Wrapper">
      <div className="container-fluid" id="footer">
        <div className="container footer">

          <div className="row justify-content-center">
            <a href="https://www.linkedin.com/in/alexdales/" target="_blank"><img src={linkedinLogo} id="socialIcon" /> </a>
            <a href="https://dribbble.com/AlexDales" target="_blank"><img src={dribbbleLogo} id="socialIcon" /></a>
            <a href="https://www.instagram.com/whateverdales/" target="_blank"><img src={instagramLogo} id="socialIcon" /></a>
            <a href="https://twitter.com/byalexdales" target="_blank"><img src={twitterLogo} id="socialIcon" /></a>
          </div>

          <div className="row justify-content-center" id="footerText">Designed & developed by Alex Dales</div>
        </div>
      </div>
    </div>
  );
  }
}

export default Footer;
