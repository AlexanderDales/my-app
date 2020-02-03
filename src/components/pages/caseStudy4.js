import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import rbcx1 from "../images/rbcx1.png";
import rbcx2 from "../images/rbcx2.png";
import rbcx3 from "../images/rbcx3.png";
import rbcx4 from "../images/rbcx4.png";
import turba from "../images/turba.png";
import xpo1 from "../images/xpo1.jpeg";
import xpo2 from "../images/xpo2.jpg";
import xpo3 from "../images/xpo3.png";
import rbcfinal from "../images/rbcfinal.png";




import FaLock from 'react-icons/lib/fa/lock';

import BottomNavFour from './bottomNavFour';

class caseStudy4 extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="wrap">
        <div className="container-fluid">
          <div className="container topDescText">
            <div className="row" id="title" >
            Royal Bank of Canada
            </div>
              <div className="row" id="subTitle">
              My Co-op Experience
              </div>
              <div className="row" id="desc">
              My co-op term at RBC was my first co-op experience through the University of Waterloo’s Engineering program. During my term I was a UI/UX designer on a program team for an internal innovation program at the bank, called RBCx. I was working downtown Toronto at the RBC Waterpark location. Apart from all of the work experience and professional development I gained, it was also a big learning experience living together with one of my classmates in the city. I was very excited to
              be working in the heart of Toronto, while doing my passion as a job. This page talks about the RBCx program, how I contributed as a designer and a reflection on my term at the bank.
            </div>
        </div>
        </div>

        <div className="container content">
        <div className="row top-photo">
            <div class="col-lg-12">
             <img src={rbcx1} class="img-fluid"/>
            </div>
          </div>


          <div className="container para">
          <div id="role">What is RBCx?</div>
            <div id="text">The RBCx Program is an intrapreneuship program that brings together RBC employees from across the organization to be placed into 7 teams that each had to solve a sponsored challenge given by the different departments in the bank. These challenges were real internal issues that these lines of business were facing and wanting to solve. The program brings in around 30 employees from across the bank, who apply for the program. They are then placed into teams, that undergo a 9-week process of solving their business challenge. At the end of the 9 weeks, all the teams present their solutions at the RBCxpo, in the auditorium at RBC Waterpark Place, downtown Toronto. This event brought together over 250 guests, including department executives.</div>
          </div>
          </div>

          <div className="container-fluid highlight">
            <div className="container highlightContent">
              <div id="problem"> My Role </div>
              <div id="text">As one of the UI/UX designers on the program team for RBCx, I took on many different responsibilities as a designer. I was in charge of designing the branding associated with the RBCxpo and RBCx brand for the current season, as well as redesigning the internal RBCx webpage. The most interesting part of my job was when I got to work with three different RBCx participant groups to create interactive high-fidelity prototypes of their business solution products. Throughout this process, I designed different web and a mobile designs in Sketch and used Figma to demonstrate interactive capabilities. I was also exposed to developing in HTML and CSS for the first time while implementing the new internal RBCx webpage.
              </div>
            </div>
          </div>


          <div className="container highlightContent">
            <div id="roleHighlight">RBCx Internal Webpage Redesign</div>
            <div className="no-step" id="step-description">
              My redesign below for the internal RBCx webpage became the 4th most visited webpage witin two months of my co-op term ending. It also doubled the number of applicants for the next season to over 250 RBC employees.
              <br /><br/>
              The design had to be implemented within the internal webapage framework, which limited design capabilities and freedom. As a result, I came up with a design that addressed the most important information about the program with
              a stronger emphasis on applying to the program. My design provided more resources for candidates to learn about past solutions and what the program offers.
            </div>

          <div className="row">
              <div class="col-lg-12">
               <img src={rbcx4} class="img-fluid"/>
              </div>
          </div>
          </div>
          </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="roleHighlight">RBCx High-Fidelity Prototyping</div>
                <div id="text">
                  Towards week 6 of the 9-week program, I started to work more closely with the RBCx teams to design prototypes based on the product they had in mind, which the goal of solving the idea that they had came up with.
                  Due to confidential reasons, I am only allowed to share some of the screens I designed for the prototypes and I cannot explicity state what internal problems these products were for. If you are interested in viewing the interaction prototypes in Figma, please contact me.
                </div>
              </div>
            </div>

            <div className="container-fluid" id="underHighlight">
              <div className="container highlightContent">
                <div id="step"> 1. CAre Path<br/></div>
                <div id="step-description">CAre path is an internal web application that allows client advisors to find different career paths, by assessing their skills, personality and goals. The challenge for this team was sponsored by P&CB (Personal & Commercial Banking).</div>
                <button type="button" className="btn btn-primary" id="above-photo"><FaLock/>&nbsp;&nbsp;&nbsp;Figma Interaction Prototype</button>
                <div className="row">
                    <div className="col-lg-12">
                     <img src={rbcx3} className="img-fluid"/>
                    </div>
                </div>

                <div className="container-fluid" id="underHighlight">
                  <div className="container highlightContent">
                    <div id="step"> 2. RoleEX<br/></div>
                    <div id="step-description">The team worked on this challenge for I&TS (Investor & Treasury Services). RoleEX is an internal web application that allows RBC employees in I&TS to find open role opportunities based on their preferences within the bank.</div>
                    <button type="button" className="btn btn-primary" id="above-photo"><FaLock/>&nbsp;&nbsp;&nbsp;Figma Interaction Prototype</button>
                    <div className="row">
                        <div className="col-lg-12">
                         <img src={rbcx2} className="img-fluid"/>
                        </div>
                    </div>
                  </div>

                  <div className="container-fluid" id="underHighlight">
                    <div className="container highlightContent">
                      <div id="step"> 3. Turba<br/></div>
                      <div id="step-description">This product was sponsored by RBC Ventures, which is group in the bank focused on creating inovating products. For this project the team I worked with had to come up with a product that used data for the greater good.
                      The design below is a mobile application providing users with unique insights about their commute to work.
                       </div>
                      <button type="button" className="btn btn-primary" id="above-photo"><FaLock/>&nbsp;&nbsp;&nbsp;Figma Interaction Prototype</button>
                      <div className="row">
                          <div className="col-lg-12">
                           <img src={turba} className="img-fluid"/>
                          </div>
                      </div>
                    </div>

                <div className="container highlightContent">
                  <div id="roleHighlight">The RBCxpo</div>
                  <div className="no-step" id="step-description">
                  After the 9 weeks, all of the hard work that was put in by the 7 teams was finally shown off at the RBCxpo. All of the teams, the RBCx program team and over 250 guests gathered in the auditorium at RBC Waterpark Place, where the teams pitched their solutions. Among the crowd were executives, past RBCx alumni, and other RBC employees who were invited. During the event, the interaction prototypes that had created for the teams were shown off in their presentations along with the process that the teams had followed to come up with their solutions. The solutions are to be eventually implemented by the lines of business that sponsored the different business challenges that were solutioned by the teams. I was very thrilled to have experienced bringing the teams’ ideas into feasible design products that solved different internal business problems.
                  <br/><br/>Leading up to the event, I had the opportunity to design some of the branding elements for the xpo. This included the signage, the information booklet and swag that was given to all guests. In addition, I was able to help with the event planning and making sure that things were running smoothly day of.

                  <div className="row xpo">
                      <div className="col-lg-12">
                       <img src={xpo3} className="img-fluid"/>
                      </div>
                  </div>
                  <div className="row xpo">
                      <div className="col-lg-12">
                       <img src={xpo2} className="img-fluid"/>
                      </div>
                  </div>
                  <div className="row xpo">
                      <div className="col-lg-12">
                       <img src={xpo1} className="img-fluid"/>
                      </div>
                  </div>
                  </div>


                  <div className="container-fluid" id="underHighlight">
                    <div className="container highlightContent">
                      <div id="roleHighlight">Reflection</div>
                      <div id="text">
                        My experience working at RBC was a lot different than I had initially expected at the start of the co-op term. Not knowing where I was going to fit in to such a large company was overwhelming at first, but I was quickly welcomed by the RBCx program team and its participants. Throughout the four months I developed skills in Sketch and Figma, through the design of different web and mobile interfaces. More importantly, I had the opportunity to work with lots of different people from all across the bank. I was able to get to know some of these people on a more personal level through lots of conversations. There were 30 participants in the RBCx program, in which the majority I was able speak with over the 9 weeks. It was truly a unique experience and I am grateful to have worked with such a great team. Special thanks to my managers, Jason Graham and Jordan Borges, for mentoring me during my time at RBC.
                      </div>
                    </div>
                  </div>


                  <div className="row xpo">
                      <div className="col-lg-12">
                       <img src={rbcfinal} className="img-fluid"/>
                      </div>
                  </div>



                </div>
                </div>

              </div>
              </div>
      <BottomNavFour />
      <Footer />
      </div>
      </div>
  );
  }
}

export default caseStudy4;
