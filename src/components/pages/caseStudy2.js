import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import newnightscreens from "../images/newnightscreens.png";
import newnightflow1 from "../images/newnightflow1.png";
import newnightflow2 from "../images/newnightflow2.png";
import newnightflow3 from "../images/newnightflow3.png";


class caseStudy2 extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="wrap">
        <div className="container-fluid">
          <div className="container topDescText">
            <div className="row" id="title" >
            Connecting an app during on-boarding
            </div>
              <div className="row" id="subTitle">
              Sprout Mobile Application (Co-op)
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

          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="roleHighlight"> Problem Statement </div>
              <div id="text"> For what reasons are users not connecting the native OS health application to Sprout's application during a section of on-boarding?
              </div>
            </div>
          </div>

          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight"> Application Goal </div>
              <div id="text"> The idea of this app was looking to help users find a venue for a night out in Toronto. More specifically,
              </div>
            </div>

            <div className="container highlightContent">
              <div className="row double">
                  <div class="col-lg-6 text-left my-auto">
                    <div className="title-text" id="roleHighlight"> Constraints </div>
                      <div id="text">
                        <ul>
                          <li>Designing using Goolge Material Design. This sets some limitations in terms of styling.</li>
                          <li>The biggest constraint</li>
                          <li>Designing using Goolge Material Design. This sets some limitations in terms of styling.</li>
                        </ul>
                      </div>
                  </div>

                  <div class="col-lg-6 text-left ">
                    <div className="title-text" id="roleHighlight"> Assumptions </div>
                      <div id="text">
                        <ul>
                          <li>Designing using Goolge Material Design. This sets some limitations in terms of styling.</li>
                        </ul>
                      </div>
                  </div>
              </div>
            </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight"> Process </div>
                <div id="text"> 1. Initial user flow
                </div>

                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow1} class="img-fluid"/>
                    </div>
                  </div>
                  <div id="text"> Text goes here </div>


                  <div id="text"> 2. Low-fidelity wireframe</div>
                    <div className="row">
                        <div class="col-lg-12">
                         <img src={newnightflow2} class="img-fluid"/>
                        </div>
                    </div>
                    <div id="text"> Text goes here </div>


                    <div id="text"> 3. Re-iterating</div>
                      <div className="row">
                          <div class="col-lg-12">
                           <img src={newnightflow2} class="img-fluid"/>
                          </div>
                      </div>
                      <div id="text"> Text goes here </div>

                      <div id="text"> 4. High-fidelity mockups</div>
                        <div className="row">
                            <div class="col-lg-12">
                             <img src={newnightflow3} class="img-fluid"/>
                            </div>
                        </div>
                        <div id="text"> Text goes here </div>


                        <div id="text"> 4. High-fidelity mockups</div>

                          <div id="text"> Text goes here </div>








              </div>
            </div>
          </div>
        </div>
      <Footer />
      </div>
  );
  }
}


export default caseStudy2;
