import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <div className="aboutContainer" id="about">
      <h1 className="aboutH1">About</h1>

      <div className="textColumn">
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
  );
};

export default AboutMe;
