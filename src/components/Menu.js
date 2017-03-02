import React, { Component } from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';

class Menu extends Component {

  swapPageTitle(e) {
    let elem = document.getElementsByClassName('pageTitle');
    let storyBox = document.getElementsByClassName('StoryBox');
    let ballotBox = document.getElementsByClassName('BallotBox');
    let platformBox = document.getElementsByClassName('PlatformBox');

    elem[0].innerText = e.target.innerText;

/*
    if (elem[0].innerText === "Story Feed") {
      ballotBox[0].className += " hide";
      storyBox[0].className = "StoryBox";
    } else {
      storyBox[0].className += " hide";
      ballotBox[0].className = "BallotBox";
    }
*/
    switch (elem[0].innerText) {
      case "Story Feed":
        ballotBox[0].className += " hide";
        platformBox[0].className += " hide";
        storyBox[0].className = "StoryBox";
        break;
      
      case "The Candidates":
        storyBox[0].className += " hide";
        platformBox[0].className += " hide";
        ballotBox[0].className = "BallotBox";
        break;

      case "Platforms":
        storyBox[0].className += " hide";
        ballotBox[0].className += " hide";
        platformBox[0].className = "PlatformBox";
        break;

      default:
        location.href="https://orgsync.com/81696/forms/246302/submission";
        break;
    }

  }

  render() {
    return (
     <div className="Menu">
      <ButtonToolbar onClick={this.swapPageTitle.bind(this)}>
        <Button>Story Feed</Button>
        <Button>The Candidates</Button>
        <Button>Platforms</Button>
        <Button>Vote!</Button>
      </ButtonToolbar>
     </div> 
    );
  }
}

export default Menu;