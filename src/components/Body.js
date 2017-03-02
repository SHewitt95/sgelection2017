import React, { Component } from 'react';
import Story from './Story.js';
import Candidate from './Candidate.js';
import Platform from './Platform.js';

const stories = [
    {
      headline:"Unlimited wins Student Government election, HP referendum passes",
      author:"Marcus Lim",
      excerpt:"Juniors Adrian Nuñez, Coleman Reardon and Emily Bajalia were announced as the 2017-2018 Student Government (SG) executive board on Wednesday afternoon at the Lakeside Patio.",
      image:"http://www.themiamihurricane.com/wp-content/uploads/2017/03/NEWS_SG-Results_VM.jpg",
      link:"http://www.themiamihurricane.com/2017/03/01/unlimited-wins-student-government-election-hp-referendum-passes/",
      category:"",
      date:"March 1, 2017"
  },
    {
      headline:"‘Unlimited’ ticket runs uncontested on platforms of practical amenities",
      author:"Marcus Lim",
      excerpt:"It started with four student candidates vying to be the leaders of Student Government (SG) and kicking off their campaigns at 8 a.m. Wednesday. By evening, one candidate had dropped out.",
      image:"http://www.themiamihurricane.com/wp-content/uploads/2017/02/unlimited.jpg",
      link:"http://www.themiamihurricane.com/2017/02/22/candidates-announced-for-student-government-president-vp-and-treasurer/",
      category:"",
      date:"Feb. 22, 2017"
  },
  {
      headline:"Referendum up for vote would increase fees, attract bigger artists",
      author:"Marcus Lim",
      excerpt:"A referendum Hurricane Productions (HP) Concerts is proposing could invite “bigger names” to play at the Watsco Center for Homecoming concerts by raising student activity fees by $7.",
      image:"http://www.themiamihurricane.com/wp-content/uploads/2014/03/web-widgets-01.png",
      link:"http://www.themiamihurricane.com/2017/02/22/referendum-up-for-vote-would-increase-fees-attract-bigger-artists/",
      category:"",
      date:"Feb. 22, 2017"
  },
  {
      headline:"Candidates announced for Student Government president, VP and treasurer",
      author:"Marcus Lim",
      excerpt:"Voting will be open at the SG Elections Commission booth in the University Center Breezeway from 10 a.m. to 4 p.m. Monday, Feb. 27 through Wednesday, March 1.",
      image:"http://www.themiamihurricane.com/wp-content/uploads/2016/02/NEWS_True-to-U-Wins_HM.jpg",
      link:"http://www.themiamihurricane.com/2017/02/22/candidates-announced-for-student-government-president-vp-and-treasurer/",
      category:"",
      date:"Feb. 22, 2017"
  }
];

const candidates = [
    {
        name: "Adrian Nuñez",
        running_as: "President",
        year: "Junior",
        major: "Management and political science",
        experience: "Founder of TEDxUMiami, commuter senator in SG Senate, project coordinator in Freshman Leadership Council, President’s 100, Homecoming Executive Committee, Department of Orientation",
        ticket: "Unlimited",
        video: "https://www.youtube.com/embed/8lkP8hFxsCc"
    },
    {
        name: "Coleman Reardon",
        running_as: "Vice President",
        year: "Junior",
        major: "Public relations and political science",
        experience: "SG executive-at-large-internal, Homecoming Executive Committee, President’s 100, Freshman Leadership Council, Residential Assistant at Hecht Residential College",
        ticket: "Unlimited",
        video: "https://www.youtube.com/embed/ctP5USRZq6c"
    },
    {
        name: "Emily Bajalia",
        running_as: "Treasurer",
        year: "Junior",
        major: "Marketing",
        experience: "Homecoming Executive Committee, Zeta Tau Alpha Homecoming chair, Zeta Tau Alpha Director of Philanthropy President’s 100, U Outreach committee, Panhellenic",
        ticket: "Unlimited",
        video: "https://www.youtube.com/embed/QIAuRKb7y6w"
    }
];

const platforms = [
  {
    ticket: "Unlimited",
    initiatives: [
      {
        title: "Parking Pass System Reform",
        info: "Getting a parking pass has been “a huge endeavor” for students over the years, the candidates said. Reforming the system would increase convenience for students. Preliminary thoughts work the same way how students enroll for class, depending how many credits a student has, that is the order in which he or she would get a parking pass."
      },
      {
        title: "Speaker Series",
        info: "Unlimited would bring “larger speakers” to campus – as the university has done before with Sen. Hillary Clinton and the Dalai Lama– for students to learn from."
      },
      {
        title: "Subsidize Cost of Uber",
        info: "Uber has been a big part of student life on campus for a few years now, and Unlimited plans to make an arrangement with the company to make it much more affordable to UM students. Preliminary plans are to take portions of costs from shuttles to cut a deal with Uber. "
      },
      {
        title: "It’s on Us and Just Ask Campaigns",
        info: "Raising awareness on sexual assault by continuing the It’s On Us campaign the university began under the President’s Coalition on Sexual Violence Prevention and Education, and increase exposure on mental health resources available on campus. Unlimited hopes to eliminate the negative stigma attached to both issues with the campaigns."
      },
      {
        title: "Improved Tailgating Experience",
        info: "Unlimited will balance and compromise student concerns and regulations made by administration and Hard Rock Stadium. Last year, there was a ban on explicit music and DJ-ing during tailgates, and students were not happy. "
      },
    ]
  }
];

class Body extends Component {
  render() {
    return (
      <div className="Body">
        <div className="StoryBox">
          {stories.map(function(story, index) {
            return <Story 
            key={index} 
            headline={story.headline} 
            author={story.author} 
            excerpt={story.excerpt} 
            myIMG={story.image}
            link={story.link}
            date={story.date} />
          })}
        </div>
        <div className="BallotBox hide">
          {candidates.map(function(candidate, index) {
            return <Candidate 
            key={index}
            name={candidate.name}
            running_as={candidate.running_as}
            year={candidate.year}
            major={candidate.major}
            exp={candidate.experience}
            ticket={candidate.ticket}
            video={candidate.video}
            />
          })}
        </div>
        <div className="PlatformBox hide">
          {platforms.map(function(platform, index) {
            return <Platform 
            key={index}
            ticket={platform.ticket}
            initiatives={platform.initiatives}
            />
          })}
        </div>
      </div>
    );
  }
}

export default Body;