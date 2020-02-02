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
import dailySum1 from "../images/dailySum1.png";

import BottomNavThree from './bottomNavThree';

class caseStudy3 extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="wrap">
        <div className="container-fluid">
          <div className="container topDescText">
            <div className="row" id="title" >
            Redesigning the Daily Activity Feature
            </div>
              <div className="row" id="subTitle">
              Sprout Native Mobile Application
              </div>
              <div className="row" id="desc"> The Daily Summary is a block on the Sprout mobile ‘Home’ page under the dashboard and before the user stream.
              Currently, this block serves the purpose of providing the user with information about their day.
              </div>
        </div>
        </div>

        <div className="container content">
          <div id="roleHighlight">Previous Design</div>
          <div className="row top-photo">
              <div class="col-lg-12">
               <img src={dailySum1} class="img-fluid"/>
              </div>
            </div>
          <div className="container para">
          <div id="role">My Role</div>
            <div id="text">The Daily Summary is a block on the Sprout mobile ‘Home’ page under the dashboard and before the user stream. Currently, this block serves the purpose of providing the user with information about their day, specifically:</div>
          </div>
          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="problem"> Problem Statement </div>
              <div id="text">How can the ‘Daily summary’ aim to increase user engagement and return rate, through a more insightful representation of a user’s daily activity by displaying more relevant information about their daily activity?
              </div>
            </div>
          </div>


          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight">User Interviews</div>
              <div id="text">
              </div>
            <div className="row">
                <div class="col-lg-12">
                 <img src={userInterviews1} class="img-fluid"/>
                </div>
            </div>
            </div>


            <div className="container highlightContent">
              <div id="roleHighlight">Interview take-aways - User Assumptions</div>
              <div id="text">
              <ul>
                <li>Users cannot quickly take-away information from the current daily summary</li>
                <li>Users do not clearly understand the raltionship between the progress bars and strings</li>
                <li>Users are scrolling past the daily activity block</li>
                <li>Users do not know what they are working towards</li>
                <li>Users do not understand what metrics have earned them these points</li>
              </ul>
              </div>
            </div>



            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight">Product Criteria</div>
                <div id="text">

                  <ul>
                  <br/><li>Interaction and styling had to follow Google Material Design</li>
                  <li>Google's Places API only returned certain data about venues</li>
                  </ul>
                  The biggest constraint throughout this project was what was possible in terms of development. I had all of these ideas for the sort of details I wanted the design to show for venues, but these were limited by the API's capability.
                  Moreover, there were certain features, transitions and designs that I wanted implemented, but they were too difficult to implement as my classmate was solo-developing the app. I quickly learned that I had to have more realistic design features
                  that could be implemented based on the API and my classmate's ability.
                </div>
              </div>
            </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight"> Process </div>
                <div id="step"> 1. Information Wireframing<br/></div>
                <div id="step-description"> The first step for me was to block out the general flow I had in mind for the application. I listed the general information/interactions that I had in mind for the different steps throughout
                the user’s interaction with the app. I knew that I wanted a dedicated home screen, which then took the user through different steps of choosing their preferences and finally returning results based on the filters they just selected. </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow1} class="img-fluid"/>
                    </div>
                </div>

                <div id="step" className="step-nt"> 2. Wireframing<br/></div>
                <div id="step-description">Once I had an idea of the different information I wanted to display, I built out wireframes. In the wireframes, I created specific screens for the venue type and music type filters, with the other filters combined into one screen.
                As a user, I felt as though the venue type and the music type were the most important filters throughout the process, which was why I seperated them into individual screens.
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow2} class="img-fluid"/>
                    </div>
                </div>

                <div id="step" className="step-nt"> 3. Reiterating<br/></div>
                <div id="step-description">Since this project was collaborative, it was important as a designer to gain feedback from my classmate. After I had created the initial wireframes, he was able to point out some suggestions and set some constraints in
                terms of what would be possible to develop. Based on his feedback I noted some of the changes to be made:
                <ul>
                <br/><li>Combine all of the filters into one page to simplify user flow, seperate screens is unnecessary</li>
                <li>Remove the filter tags at the top of the results screen</li>
                <li>A vertical list for the 'Top Results' would be easier to implement over the horizontal option</li>
                <li>The 'Randomize location' button on the results page was not a prioritized feature for the inital stage of developing the app</li>
                <li>In the next iteration I added a wireframe for the result details</li>
                </ul>
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow21} class="img-fluid"/>
                    </div>
                </div>


                <div id="step" className="step-nt"> 4. Final Mockups<br/></div>
                <div id="step-description">The final mockups, as well as the different fidelity of wireframes, were all created using Sketch. Since the design followed Google Material Design, I was able to leverage the material design components file in order to
                design the high fidelity mockups using the correct grid, font/icon sizes, colors, selection lists, images, etc. In addition, I created mockups that included all spacing measurements, icon/font sizes and design properties (not pictured).
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow3} class="img-fluid"/>
                    </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      <BottomNavThree />
      <Footer />
      </div>
  );
  }
}

export default caseStudy3;
