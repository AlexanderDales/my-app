import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Work from './components/pages/work';
import Footer from './components/footer/footer';
import NewNight from './components/pages/NewNight';
import caseStudy2 from './components/pages/caseStudy2';
import caseStudy3 from './components/pages/caseStudy3';
import caseStudy4 from './components/pages/caseStudy4';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

class App extends Component {
  render() {
    return (
      <Router>
      <ScrollToTop />
        <Route exact path="/" component={Work} />
          <Switch>
            <Route exact path="/NewNight" component={NewNight} />
            <Route exact path="/caseStudy2" component={caseStudy2} />
            <Route exact path="/caseStudy3" component={caseStudy3} />
            <Route exact path="/caseStudy4" component={caseStudy4} />
          </Switch>
      </Router>
    );
  }
}

export default App;
