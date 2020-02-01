import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import newnightscreens from "../images/newnightscreens.png";

class caseStudy1 extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="wrap">
        <div className="container-fluid">
          <div className="container topDescText">
            <div className="row" id="title" >
            New Night
            </div>
              <div className="row" id="subTitle">
              Mobile Android Application
              </div>
              <div className="row" id="desc"> New Night is a mobile Android application that helps users pick a venue for a night out in Toronto based on preferences such as:
              place type, music type, venue size, distance from current location and the dress code. The application uses Google’s Places API to
              return a list of results based on the user’s preferences. The user can then click into the different results to see more details,
              including most recent Google reviews, location on Google maps and other important details.
              </div>

        </div>
        </div>

        <div className="container content">

          <div className="row">
            <div class="col-lg-12">
             <img src={newnightscreens} class="img-fluid"/>
            </div>
            </div>
          <div id="role"> My Role </div>
          <div id="text"> New Night is a mobile Android application that helps users pick a venue for a night out in Toronto based on preferences such as:
          place type, music type, venue size, distance from current location and the dress code. The application uses Google’s Places API to
          return a list of results based on the user’s preferences. The user can then click into the different results to see more details,
          including most recent Google reviews, location on Google maps and other important details.
          </div>

          <a href="https://github.com/haydnwiese/New-Night" target="blank_"><button type="button" class="btn-primary">GitHub Repo</button></a>
          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
            <div id="roleHighlight"> Where did this idea come from? - The Problem </div>
            <div id="text"> New Night is a mobile Android application that helps users pick a venue for a night out in Toronto based on preferences such as:
            place type, music type, venue size, distance from current location and the dress code. The application uses Google’s Places API to
            return a list of results based on the user’s preferences. The user can then click into the different results to see more details,
            including most recent Google reviews, location on Google maps and other important details.
            </div>
            </div>



          </div>


        </div>
      <Footer />
      </div>
  );
  }
}


export default caseStudy1;
