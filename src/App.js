import React, { Component } from 'react';
import './App.css';
import NavMenu from './components/nav/nav.js'
import About from './components/about/about.js'
import Footer from './components/footer/footer.js'
import Showcase from './components/showcase/showcase.js'
import Portfolio from './components/portfolio/portfolio.js'
import Contact from './components/contact/contact.js'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavMenu />
        <Showcase />
        <Portfolio />
        <About />
        <Contact />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
