import React, { useRef } from 'react';
import './MyWorks.css';
import Rickandmorty from '../../assets/img/MyWork/rickandmorty.png';
import Innova from '../../assets/img/MyWork/Innova.png';
import Spotify from '../../assets/img/MyWork/spotify.png';
import codigochef from '../../assets/img/MyWork/codigochef.png';
import WorkCard from './WorkCard/workCard'
import { useInView, useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';

const MyWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' }); // Ajusta el margen según necesites
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const projectData = [
    {
      title: 'Innova',
      description: ['E-commerce', 'M.E.R.N', 'Team Project'],
      imageSrc: Innova,
      altText: 'Innova',
      repoLink: 'https://github.com/Carlicho/Innova-Render',
      animationProps: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, delay: 0.2 },
      },
    },
    {
      title: 'Spotify Clone',
      description: ['ReactJs', 'Spotify Api'],
      imageSrc: Spotify,
      altText: 'Spotify',
      repoLink: 'https://github.com/Carlicho/SpotifyClone2',
      animationProps: {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.4, delay: 0.4 },
      },
    },
    {
      title: 'RickandMorty Api',
      description: ['M.E.R.N'],
      imageSrc: Rickandmorty,
      altText: 'Rickandmorty',
      repoLink: 'https://github.com/Carlicho/RickandMorty',
      animationProps: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4, delay: 0.6 },
      },
    },
    {
      title: 'CodigoChef',
      description: ['Restaurant', 'ReactJs', 'Freelance'],
      imageSrc: codigochef,
      altText: 'Restaurant web',
      visitLink: 'https://codigochef.netlify.app/',
      animationProps: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.4, delay: 0.8 },
      },
    },
  ];

  return (
    <motion.div
      ref={ref}
      className="worksmaincontainer"
      id="Projects"
      initial="hidden"
      animate={mainControls}
      variants={{
        hidden: {}, // No necesitamos animación aquí, la controlamos en las tarjetas
        visible: {},
      }}
    >
      <h2>Projects</h2>
      <div className="worksContainer">
        {projectData.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default MyWorks;