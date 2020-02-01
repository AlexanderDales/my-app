import React, { Component } from 'react';
import './caseStudy1.css';
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

class caseStudy1 extends Component {
  render() {
    return (
      <div>
      <Navbar />
        <div className="container">
        This is a test text.
        </div>
      <Footer />
      </div>
  );
  }
}


export default caseStudy1;
