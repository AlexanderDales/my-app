import React, { Component } from 'react';
import instagramFeed from '../images/instagramFeed.png';
import './photography.css';

class Photography extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <img src={instagramFeed} class="img-fluid"/>
        </div>



      <div className="container instagramTextBox">
          <div className="row instagramText text-xs-center">
                See more on <a href="https://www.instagram.com/whateverdales/" target="blank_" id="onlyInstagram">my Instagram </a>
          </div>
              </div>






      </div>



    );
  }
}

export default Photography;
