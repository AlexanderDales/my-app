import React, { Component } from 'react';
import instagramFeed from '../images/instagramFeed.png';
import './photography.css';
import one from '../images/one.png';
import two from '../images/two.png';



class Photography extends Component {
  render() {
    return (
      <div>
      <div className="container photos">
        <div class="row">
          <div class="col-sm">
            <img src={instagramFeed} class="img-fluid"/>
          </div>
        </div>

        <div className="container instagramTextBox">
          <div className="row instagramText text-xs-center">See more on <a href="https://www.instagram.com/whateverdales/" target="blank_" id="onlyInstagram">my Instagram </a></div>
        </div>

      </div>
      </div> //wrap
    );
  }
}

export default Photography;
