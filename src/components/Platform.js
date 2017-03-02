import React, { Component } from 'react';

class Platform extends Component {
  render() {
    return (
    <div className="Platform">
        <h2 className="platTitle">{this.props.ticket}</h2>
        {this.props.initiatives.map(function(init, index) {
            return <div key={index} className="init"><b><p>{init.title}</p></b> <p>{init.info}</p></div>
        })}
        <p>Read more about the initiatives <a target="_blank" href="http://www.themiamihurricane.com/2017/02/22/candidates-announced-for-student-government-president-vp-and-treasurer/">here</a>.</p>
    </div>
    );
  }
}

export default Platform;