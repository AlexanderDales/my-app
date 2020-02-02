import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import newnightscreens from "../images/newnightscreens.png";
import newnightflow1 from "../images/newnightflow1.png";
import newnightflow2 from "../images/newnightflow2.png";
import newnightflow21 from "../images/newnightflow2.1.png";
import newnightflow3 from "../images/newnightflow3.png";
import BottomNav from './bottomNav';

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
              Android Application
              </div>
              <div className="row" id="desc"> New Night is an Android application that helps users pick a venue for a night out in Toronto. The application allows users to select from different filtering preferences such as: the type of venue, the music played, the size of the venue, the dress code and the distance from their current location. The application uses Google’s Places API combined with a custom database to return a list of results based on the filters selected. Finally, the app let’s users click into different results in order to see more details about the venue, before choosing where they should spend their night out.
              </div>
        </div>
        </div>

        <div className="container content">

          <div className="row top-photo">
              <div class="col-lg-12">
               <img src={newnightscreens} class="img-fluid"/>
              </div>
            </div>
          <div className="container para">
          <div id="role"> My Role </div>
            <div id="text"> Throughout this project, I was in charge of creating all of the designs while considering user interaction. The app was created in collaboration with one of my classmates, who developed the app using Java. We completed the project during our previous co-op term, since we were eager to work on a personal project together that would allow us to develop our skills. For me this was different, since I followed Google Material Design for interaction and styling. This was the first time I experienced designing with these guidelines and it was something different compared to previous mobile and web projects I did. If you’re interested in seeing my classmate’s code, you can access the GitHub repository<a href="https://github.com/haydnwiese/New-Night" target="blank_" id="GitHub"> here.</a>
            </div>
          </div>
          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="problem"> The Problem & Idea </div>
              <div id="text">The idea for this app came about when my friends and I faced the challenge of finding the perfect place to spend a Saturday night out in downtown Toronto. A Google search or blogTO article was just not cutting it, since we could never decide on a venue that matched all of our needs. This is when my classmate and I came to the realization that we could develop an app that would aim to solve this exact problem. However, we needed to break this problem down further to understand the reasons why we were encountering this problem.

              </div>
            </div>
          </div>


          <div className="container-fluid" id="underHighlight">
            <div className="container highlightContent">
              <div id="roleHighlight">Pain Points </div>
              <div id="text">
              For this project, the pain points  listed reflect the feelings of my friends and I after we spent plenty of time on Google trying to find where to go.

              <ul>
                <br/><li>It was difficult to list all of our venue preferences in a Google search </li>
                <li>There were too many varied results with no clear suggestions from searches</li>
                <li>Specific details such as venue size or dress code were not explicitly listed</li>
              </ul>
              </div>
            </div>

            <div className="container-fluid highlight">
              <div className="container highlightContent">
                <div id="problem"> Constraints </div>
                <div id="text">There were two main constraints that I faced as a designer during this project:

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
                <div id="step"> 1. Initial User Flow<br/></div>
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
                design the high fidelity mockups using the correct grid, font/icon sizes, colors, selection lists, images, etc. In addition, I created mockups that included all spacing measurements, icon/font sizes and design properties (not pictured) that were handed off to my classmate for developing.
                </div>
                <div className="row">
                    <div class="col-lg-12">
                     <img src={newnightflow3} class="img-fluid"/>
                    </div>
                </div>

                <div id="roleHighlight">Live Demo </div>
                <div class="embed-responsive embed-responsive-16by9 youtubeVideo">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iRd9x843nxE" allowfullscreen></iframe>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      <BottomNav />
      <Footer />
      </div>
  );
  }
}

export default caseStudy1;
