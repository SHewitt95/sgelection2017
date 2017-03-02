import React, { Component } from 'react';
import Menu from './Menu.js';


class Header extends Component {

  render() {
    return (
      <div className="Header">
        <a target="_blank" href="http://www.themiamihurricane.com/"><img src="img/election-cover3.png" alt="Test"/></a>
        <h2 className="callToAction">Click the buttons to swap pages.</h2>
        <Menu/>
        <h2 className="pageTitle">Story Feed</h2>
      </div>
    );
  }
}

export default Header;