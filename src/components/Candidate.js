import React, { Component } from 'react';

class Candidate extends Component {
  render() {
    return (
      <div className="Candidate">
        <iframe height="315" src={this.props.video} frameBorder="0" allowFullScreen/>
        <h2>Name: {this.props.name}</h2>
        <p>Ticket: {this.props.ticket}</p>
        <p>Running as: {this.props.running_as}</p>
        <p>Year: {this.props.year}</p>
        <p>Major: {this.props.major}</p>
        <p>Experience: {this.props.exp}</p>
      </div>
    );
  }
}

export default Candidate;