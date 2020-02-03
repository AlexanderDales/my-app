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
import dailySum2 from "../images/dailysum2.png";
import dailySum3 from "../images/dailysum3.png";
import dailySum4 from "../images/dailysum4.png";
import dailySum5 from "../images/dailysum5.png";
import dailySum6 from "../images/dailysum6.png";

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
              Currently, this block serves the purpose of providing the user with information about their day. After data collection, I found that Sprout users earned on average 521pts daily and this feature aimed to increase this number by 10% from the base metric.
              </div>
        </div>
        </div>

        <div className="container content">
          <div id="roleHighlight">Old Design</div>
          <div id="text">
          The old design specifically shared with the user:
          <ul>
            <br/><li>Total points earned today with a progress bar </li>
            <li>Average daily points with progress bar</li>
            <li>Most points earned in a day with a progress bar </li>
            <li>Activities that have been tracked for that day and the units associated with the activity</li>
          </ul>
          </div>
          <div className="row top-photo">
              <div class="col-lg-12">
               <img src={dailySum1} class="img-fluid"/>
              </div>
            </div>
          <div className="container para">
          <div id="role">My Role</div>
            <div id="text">For this feature, I led an end-to-end re-design of the Daily Activity feature, while consulting with a senior product designer and the mobile product owner. I conducted user interviews, established the problem, set requirements and then completed all the different
            levels of wireframing leading to the final design, ready to be implemented into the app. All designs were done in Sketch.</div>
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

          </div>

            <div className="container highlightContent">
              <div id="roleHighlight">User Interviews</div>
              <div className="no-step" id="step-description">
              One of the first steps I took during this process was to gain a better understanding of what current users thought of the daily summary. I interviewed people with different backgrounds, ranging from design, developers and client success. The interviews
              provided me with valuable feedback concerning what users currently liked and disliked about the feature. After that, I was able to establish the user pain points that would later help me set requirements.
              </div>
            <div className="row">
                <div class="col-lg-12">
                 <img src={userInterviews1} class="img-fluid"/>
                </div>
            </div>
            </div>


            <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="problem">User Assumptions</div>
              <div id="text">
                Based on the users interviews I conducted, I was able to list the user assumptions:
              <ul>
                <br/><li>Users cannot quickly take-away information from the current daily summary</li>
                <li>Users do not clearly understand the relationship between the progress bars and strings</li>
                <li>Users are scrolling past the daily activity block</li>
                <li>Users do not know what they are working towards</li>
                <li>Users do not understand what metrics have earned them these points</li>
              </ul>
              </div>
            </div>
            </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight">Requirements</div>
                <div id="text">
                   I discussed with the product owner all of the information I had gathered about users and the problem that this re-design was looking to solve. We were able to set acceptance criteria for the feature, which was also shared with the developers.
                  <ul>
                  <br/><li>Only if there are any activities or metrics recorded for the day do I see the my day summary</li>
                  <li>It is showing up as a card, but visually different from other cards in the feed</li>
                  <li>Total points earned so far today</li>
                  <li>Average daily points earned</li>
                  <li>Total steps I have taken today so far</li>
                  <li>Total calories consumed today so far</li>
                  <li>Total calories expanded today so far</li>
                  <li>Up to last three activities I tracked today and if there are more than three than indication of how many more (e.g., Walking (3450 steps), Strength Training (50mins), Cycling (20mins) and 3 more activities. Where the last part is a tappable link</li>
                  <li>When the information is being updated or fetched while the app loaded but the card is there, there is a good experience that shows information is being updated</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container highlightContent">
              <div id="roleHighlight">Constraints</div>
              <div id="text">
                The main constraint for this feature was that it had to be implemented using the existing data that was avaibale on the backend, while better representing the data. Since the feature was going to be implemented in the next mobile release, this limited the amount of time we had to
                deliver the feature.
              </div>
            </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight"> Process </div>
                <div id="step"> 1. Information Wireframing<br/></div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={dailySum2} class="img-fluid"/>
                    </div>
                </div>

                <div id="step" className="step-nt"> 2. Low-Fidelity Wireframing<br/></div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={dailySum3} class="img-fluid"/>
                    </div>
                </div>


                <div id="step" className="step-nt"> 3. High-Fidelity Design Options<br/></div>
                <div id="step-description">Moving forward, I chose to build out some design options that featured a new representation of daily points earned in a bar chart. This design could be implemented more easily than some of the others, since it did not include new features.
                It included a new representation of the same data that was available on the backend, which followed the design constraint I mentioned earlier.
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={dailySum4} class="img-fluid"/>
                    </div>
                </div>

                <div id="step" className="step-nt"> 4. Narrowed Design Options<br/></div>
                <div id="step-description">After gaining feedback and sharing the inital design options with a senior designer, he helped me narrow all of the options to three main designs:
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={dailySum5} class="img-fluid"/>
                    </div>
                </div>

                <div id="step" className="step-nt"> 5. Final Design Implemented<br/></div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={dailySum6} class="img-fluid"/>
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
