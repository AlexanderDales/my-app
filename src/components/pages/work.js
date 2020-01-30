import React, { Component } from 'react';
import dailysum from '../images/dailysum.png';
import Projects from './projects';
import Freelance from './freelance';
import Photography from './photography';
import './work.css';

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
    <div className="wrapper">
      <div className="container-fluid">
        <div className="container-fluid" id="topDescription">
          <div className="container" id="topDescText">
            <div className="row" id="topDescTitle">
            I'm Alex -
            </div>
              <div className="row">
              I'm a product designer & systems design engineering student in my 2A term at the Univeristy of Waterloo. Formely, I was a product designer working in Toronto at Sprout on the mobile team.
              Prior to that, I was a UI/UX designer working at the Royal Bank of Canada at the RBC Waterpark builiding downtown Toronto. I am also a freelance designer, having worked with over 100 global clients to deliver brand solutions for
              different startups, clothing brands, personal brands and the list goes on.
              </div>
          </div>

        </div>

        <div className="container">
          <div class="row secondNav">
            <ul class="list-inline">
              <li class={this.state.classNames.projects}
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'projects',
                      classNames: {
                        projects: 'list-inline-item nav-title-selected',
                        freelance: 'list-inline-item',
                        photography: 'list-inline-item'
                      }
                    })}>Projects</li>
              <li class={this.state.classNames.freelance}
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'freelance',
                      classNames: {
                        projects: 'list-inline-item',
                        freelance: 'list-inline-item nav-title-selected',
                        photography: 'list-inline-item'
                      }
                    })}>Freelance</li>
              <li class={this.state.classNames.photography}
                  id="secondNavTitle"
                  onClick={() => this.setState({
                      selectedSection: 'photography',
                      classNames: {
                        projects: 'list-inline-item',
                        freelance: 'list-inline-item',
                        photography: 'list-inline-item nav-title-selected'
                      }
                    })}>Photography</li>
              </ul>
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
  );
  }
}

export default Work;
