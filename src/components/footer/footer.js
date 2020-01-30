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
            <img src={linkedinLogo} id="socialIcon" />
            <img src={dribbbleLogo} id="socialIcon" />
            <img src={instagramLogo} id="socialIcon" />
            <img src={twitterLogo} id="socialIcon" />
          </div>

          <div className="row justify-content-center" id="footerText">&copy; Alex Dales 2020 </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Footer;
