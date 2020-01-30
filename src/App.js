import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Work from './components/pages/work';
import Footer from './components/footer/footer';


class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Navbar />
        <Work />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
