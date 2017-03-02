import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import { Button } from 'react-bootstrap';
import Header from './components/Header.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
