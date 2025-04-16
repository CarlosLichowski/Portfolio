import React from 'react';
import './MyWorks.css';
import Rickandmorty from '../../assets/img/MyWork/rickandmorty.png';
import Innova from '../../assets/img/MyWork/Innova.png';
import Spotify from '../../assets/img/MyWork/spotify.png';
import codigochef from '../../assets/img/MyWork/codigochef.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const MyWorks: React.FC = () => {

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center center'], 
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="worksmaincontainer"
      id="Projects"
    >
      <h2>Projects</h2>
      <div className="worksContainer">
        <div className='workContainer'> 
        
        <img className="workImage" src={Innova} alt="Innova" />
        <div className="workDescription">
          <h2 className="descriptionH2">Innova</h2>
          <ul className="description">
            <li>E-commerce</li>
            <li>M.E.R.N</li>
            <li>Team Project</li>
          </ul>
          <a href="https://github.com/Carlicho/Innova-Render" target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Repository</button>
          </a>
        </div>
      
      </div>

      <div className="workContainer">
        <img className="workImage" src={Spotify} alt="Spotify" />
        <div className="workDescription">
          <h2 className="descriptionH2">Spotify Clone</h2>
          <ul className="description">
            <li>ReactJs</li>
            <li>Spotify Api</li>
          </ul>
          <a href="https://github.com/Carlicho/SpotifyClone2" target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Repository</button>
          </a>
        </div>
      </div>

      <div className="workContainer">
        <img className="workImage" src={Rickandmorty} alt="Rickandmorty" />
        <div className="workDescription">
          <h2 className="descriptionH2">RickandMorty Api</h2>
          <ul className="description">
            <li>M.E.R.N</li>
          </ul>
          <a href="https://github.com/Carlicho/RickandMorty" target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Repository</button>
          </a>
        </div>
      </div>

      <div className="workContainer">
        <img className="workImage" src={codigochef} alt="Restaurant web" />
        <div className="workDescription">
          <h2 className="descriptionH2">CodigoChef</h2>
          <ul className="description">
            <li>Restaurant</li>
            <li>ReactJs</li>
            <li>Freelance</li>
          </ul>
          <a href="https://codigochef.netlify.app/" target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Visit Page</button>
          </a>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default MyWorks;
