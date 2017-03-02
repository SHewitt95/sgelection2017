import React, { Component } from 'react';

class Story extends Component {
  render() {
    return (
    <a target="_blank" href={this.props.link}>
        <div className="Story">
            <img src={this.props.myIMG} alt=""/>
            <h2>{this.props.headline}</h2>
            <p>By {this.props.author}</p>
            <p>Published {this.props.date}</p>
            <p>{this.props.excerpt}</p>
        </div>
    </a>
    );
  }
}

export default Story;