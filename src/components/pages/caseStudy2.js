import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import newnightscreens from "../images/newnightscreens.png";
import newnightflow1 from "../images/newnightflow1.png";
import newnightflow2 from "../images/newnightflow2.png";
import newnightflow21 from "../images/newnightflow2.1.png";
import newnightflow3 from "../images/newnightflow3.png";
import userInterviews1 from "../images/userInterviews1.png";
import apps1 from "../images/apps1.png";
import apps2 from "../images/apps2.png";
import apps3 from "../images/apps3.png";
import apps4 from "../images/apps4.png";
import apps5 from "../images/apps5.png";
import apps6 from "../images/apps6.png";
import apps7 from "../images/apps7.png";
import apps8 from "../images/apps8.png";

import BottomNavTwo from './bottomNavTwo';

class caseStudy2 extends Component {
  render() {
    return (
      <div>

      <Navbar />
      <div className="wrap">
      <div className="container-fluid">
        <div className="container topDescText">
          <div className="row" id="title" >
          Connecting an App or Device
          </div>
            <div className="row" id="subTitle">
            Sprout Native Mobile Application
            </div>
            <div className="row" id="desc">The native Sprout mobile application allows users to connect their OS health app (Apple Health, Google Fit, Samsung Health) and their wearable devices (Fitbit, Garmin, Strava), so that they can more easily track activity and earn points.
             Users are able to connect these external applications primarily through a section of on-boarding and once in the app through the dashboard.
            </div>
      </div>
      </div>

      <div className="container-fluid highlight">
        <div className="container highlightContent">
          <div id="problem"> My Role </div>
          <div id="text">For this feature, I re-designed the user experience of connecting external applications to Sprout's application during on-boarding and while in the app. I followed requirements that were pre-established by the mobile product owner and helped me develop user assumptions, all the way through to wireframes and the final design flow.
          I considered all the different uses cases and looked at different situations when the user tries to connect the external applications. Finally, I prepared all of my designs for developers who implemented the design changes.
          </div>
        </div>
      </div>

      <div className="container content">
        <div id="roleHighlight">Data Collection</div>
        <div id="text">
          The first step I took while starting this process was to get more insights into how many users have already connected the OS health application to Sprout’s.
          After data collection, I found that 64.2% of users had connected their OS health application to Sprout’s application. My re-design increased this percentage to 75%.
        </div>
        </div>


          <div className="container-fluid highlight">
          <div className="container highlightContent">
            <div id="problem">Use Cases</div>
            <div id="text">
            <ol>
              <br/><li>User connects to OS health app during the on-boarding process.</li>
              <li>User skips on-boarding process (whole process or Connect Apps and devices section) and connects to OS health app through Me > Profile > Apps and devices</li>
              <li>User skips on-boarding process (whole process or Connect Apps and devices section) and connects to OS health app through top left corner icon on dashboard (subject to change) </li>
              <li>User skips on-boarding process (whole process or Connect Apps and devices section) and connects to OS health app through the card carousel on the ‘Home Page’</li>
            </ol>
            </div>
          </div>
          </div>

          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight">Old On-boarding flow</div>
              <div id="text">

              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps1} class="img-fluid"/>
                  </div>
                  </div>
            </div>
          </div>

          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight">Old In-app screen</div>
              <div id="text">

              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps2} class="img-fluid"/>
                  </div>
                  </div>
            </div>
          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="problem">Problem Statement </div>
              <div id="text">For what reasons are users not connecting the OS health app to the Sprout mobile application?
              </div>
            </div>
          </div>

          <div className="container-fluid">
          <div className="container">
            <div id="problem">User Assumptions</div>
            <div id="text">
              Based on the users interviews I conducted, I was able to list the user assumptions:
            <ul>
              <br/><li>Users do not understand the advantages of connecting the OS health app to the application</li>
              <li>Users do not know what the OS health app does or what it is</li>
              <li>The OS health app is currently is only shown as equally important as all other available apps and devices, when it should be a priority </li>
              <li>Users are concerned about their privacy and what information is being shared with the application</li>
            </ul>
            </div>
          </div>
          </div>


          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight"> Process </div>
              <div id="step"> - Wireframing<br/></div>
              <div id="step-description">From all of the user assumptions that I had gathered through discussions with the mobile product owner and another senior designer, I moved forward into creating the screen wireframes. Usually I will create very basic wireframes with text, however I skipped this step of the process for this feature, since I felt as though I already had a good idea for some of the changes I wanted to make to the existing process and it would have been unnecessary. Therefore, I went straight into creating view wireframes for the different use cases.
              </div>
              <div id="step">i) On-boarding<br/></div>
              <div id="step-description">While wireframing the on-boarding process, the main change that I wanted to make to this process was to add a dedicated screen during the process for the OS health application. The purpose behind this screen is to put more emphasis on prompting the user to connect the OS app, by giving it a dedicated view. In addition, this would allow me to add more information about the OS health application to the user, as to why they should connect this app. From this screen, the user can continue to see all of the available apps and devices, as shown in the flow below.
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps3} class="img-fluid"/>
                  </div>
              </div>

              <div id="step" className="step-nt">ii) Handling Permissions<br/></div>
              <div id="step-description">While the user is connecting the app during on-boarding, the user has to allow the OS health app to connect to Sprout’s application. For this process, it is important to understand what process the user would go through if they were to ‘Accept’ or ‘Deny’
              these permissions and what appears in the Sprout app after that decision has been made.
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps4} class="img-fluid"/>
                  </div>
              </div>

              <div id="step" className="step-nt">iii) In-app<br/></div>
              <div id="step-description">The final wireframe I created was for the in-app section of connecting an app or device to the Sprout application. Again, there needed to be more emphasis on connecting the OS health app versus all of the other available apps or devices to connect.
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps5} class="img-fluid"/>
                  </div>
              </div>

              <div id="step" className="step-nt">- High-Fidelity Mockups/Flow<br/></div>
              <div id="step" className="step">i) On-boarding<br/></div>
              <div id="step-description">
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps6} class="img-fluid"/>
                  </div>
              </div>

              <div id="step" className="step">ii) In-app<br/></div>
              <div id="step-description">
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps7} class="img-fluid"/>
                  </div>
              </div>

              <div id="step" className="step-nt">- Dev handoff<br/></div>
              <div id="step-description">
              </div>
              <div className="row">
                  <div class="col-lg-12">
                   <img src={apps8} class="img-fluid"/>
                  </div>
              </div>


            </div>
          </div>
        </div>

      <BottomNavTwo />
      <Footer />
      </div>
  );
  }
}

export default caseStudy2;
