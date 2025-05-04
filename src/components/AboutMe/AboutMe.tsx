import React from 'react';
import './AboutMe.css';
import ReactIcon from '../../assets/png/tech/React.png'
import Bootstrap from '../../assets/png/tech//Bootstrap-icon.png'
import NodeJs from '../../assets/png/tech/node-icon.png'
import Github from '../../assets/png/tech/github icon.png'
import Python from '../../assets/png/tech/python.png'
import Postgre from '../../assets/png/tech/postgre-icon.png'

const AboutMe: React.FC = () => {
  return (
    <div className="aboutContainer" id="About">

      <div className='textColumnContainer'>

      <div className="textColumn">
      <h2 className="aboutH2
      ">About</h2>
        <p className="text1">
          As a developer, I strive to create beautiful websites with stunning design and great performance.
          I enjoy creating extremely visual and interactive experiences using any technology that will deliver the best results.
        </p>

        <p className="text2">
          Having a background of 10 years experience in a hospital, I also developed my soft skills.
          I consider myself a proactive listener and a good team worker.
        </p>
      </div>
      </div>

      <div className='skillsIconsContainer' id='Skills'>
        <div className='SkillsColumn'>

        <h2>Skills</h2>
        
        <div className='skillsIcons' >
        <img src={ReactIcon} alt='React Icon'/>
        <img src={Python} alt='Python Icon'/>
        <img src={NodeJs} alt='NodeJs Icon'/>
        <img src={Postgre} alt='Postgre Icon'/>
        <img src={Github} alt='Github Icon'/>
        <img src={Bootstrap} alt='Bootstrap Icon'/>


        
        </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
