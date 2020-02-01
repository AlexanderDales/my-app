import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Work from './components/pages/work';
import Footer from './components/footer/footer';
import caseStudy1 from './components/pages/caseStudy1';
import caseStudy2 from './components/pages/caseStudy2';
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
            <Route exact path="/caseStudy1" component={caseStudy1} />
            <Route exact path="/caseStudy2" component={caseStudy2} />
          </Switch>
      </Router>
    );
  }
}

export default App;
