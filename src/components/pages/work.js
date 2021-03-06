import React, { Component } from 'react';
import dailysum from '../images/dailysum.png';
import Projects from './projects';
import Freelance from './freelance';
import Photography from './photography';
import './work.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Work extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSection: 'projects',
      classNames: {
        projects: 'list-inline-item nav-title-selected',
        freelance: 'list-inline-item',
        photography: 'list-inline-item'
      }
    }
  }

  render() {

    return (
    <div>

    <Navbar />
    <div className="wrapper">
      <div className="container-fluid">
        <div className="container-fluid" id="topDescription">
          <div className="container" id="topDescText">
            <div className="row" id="topDescTitle">
            I'm Alex
            </div>
              <div className="row">
                Currently a Product Design Intern at Shopify. I will be entering my 2B term of studying Systems Design Engineering at the University of Waterloo this fall.
              <br/><br/>
              </div>
        </div>

        <div className="container">
          <div class="row secondNav">
            <div class="list-inline text-center ">
              <div class={this.state.classNames.projects}ß
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'projects',
                      classNames: {
                        projects: 'list-inline-item nav-title-selected',
                        freelance: 'list-inline-item',
                        photography: 'list-inline-item'
                      }
                    })}>Product</div>
              <div class={this.state.classNames.freelance}
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'freelance',
                      classNames: {
                        projects: 'list-inline-item',
                        freelance: 'list-inline-item nav-title-selected',
                        photography: 'list-inline-item'
                      }
                    })}>Freelance</div>
              <div class={this.state.classNames.photography}
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'photography',
                      classNames: {
                        projects: 'list-inline-item',
                        freelance: 'list-inline-item',
                        photography: 'list-inline-item nav-title-selected'
                      }
                    })}>Photography</div>
              </div>
          </div>
        </div>

      {
        {
          'projects': <Projects />,
          'freelance': <Freelance />,
          'photography': <Photography />
        }[this.state.selectedSection]
      }

      </div>
    </div>
    </div>
    <Footer />
    </div>

  );
  }
}

export default Work;
