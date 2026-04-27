import React, { useState, useEffect, useRef } from 'react';
import './MyWorks.css';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import WorkCard from './WorkCard/WorkCard';

// Imports de imágenes
import Rickandmorty from '../../assets/img/MyWork/rickandmorty.png';
import Innova from '../../assets/img/MyWork/Innova.png';
import codigochef from '../../assets/img/MyWork/codigochef.png';
import ramosmejia from '../../assets/img/MyWork/ramos mejia logo.png';

const MyWorks: React.FC = () => {
  const [ setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const mainControls = useAnimation();

  // Datos separados por tipo de sección
  const featuredProjects = [
    { title: 'Laboratorio Ramos Mejia', description: ['ReactJs', 'firebase'], imageSrc: ramosmejia, altText: 'ramosmejia', visitLink: 'https://labramos.web.app/' },
    { title: 'CodigoChef', gridClass: 'div4', description: ['Restaurant', 'ReactJs'], imageSrc: codigochef, altText: 'Restaurant web', visitLink: 'https://codigochef.netlify.app/' },

  ];

  const archiveProjects = [
    { title: 'RickandMorty Api', description: ['M.E.R.N'], imageSrc: Rickandmorty, altText: 'Rickandmorty', repoLink: 'https://github.com/Carlicho/RickandMorty' },
    { title: 'Innova', description: ['E-commerce', 'M.E.R.N'], imageSrc: Innova, altText: 'Innova', repoLink: 'https://github.com/Carlicho/Innova-Render' },

    
    // Puedes añadir más proyectos aquí en el futuro
  ];

  // Lógica de Auto-Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  useEffect(() => {
    if (isInView) mainControls.start('visible');
  }, [isInView, mainControls]);

  const projectData = [
    {
      title: 'Innova',
      gridClass: 'div1', 
      description: ['E-commerce', 'M.E.R.N'],
      imageSrc: Innova,
      altText: 'Innova',
      repoLink: 'https://github.com/Carlicho/Innova-Render',
      animationProps: {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, delay: 0.2 },
      },
    },
    {
      title: 'Laboratorio Ramos Mejia',
      gridClass: 'div2',
      description: ['ReactJs', 'firebase'],
      imageSrc: ramosmejia,
      altText: 'ramosmejia',
      visitLink: 'https://labramos.web.app/',
      repoLink: 'https://labramos.web.app/',
      animationProps: {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, delay: 0.4 },
      },
    },
    //     {
    //   title: 'Spotify Clone',
    //   gridClass: 'div2',
    //   description: ['ReactJs', 'Spotify Api'],
    //   imageSrc: Spotify,
    //   altText: 'Spotify',
    //   repoLink: 'https://github.com/Carlicho/SpotifyClone2',
    //   animationProps: {
    //     initial: { opacity: 0, x: 50 },
    //     animate: { opacity: 1, x: 0 },
    //     transition: { duration: 0.8, delay: 0.4 },
    //   },
    // },
     {
      title: 'RickandMorty Api',
      gridClass: 'div3',
      description: ['M.E.R.N'],
      imageSrc: Rickandmorty,
      altText: 'Rickandmorty',
      repoLink: 'https://github.com/Carlicho/RickandMorty',
      animationProps: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.5 },
      },
    },
    {
      title: 'CodigoChef',
      gridClass: 'div4',
      description: ['Restaurant', 'ReactJs'],
      imageSrc: codigochef,
      altText: 'Restaurant web',
      visitLink: 'https://codigochef.netlify.app/',
      animationProps: {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.6 },
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
    >
      <h2 className='worksmaincontainerh2'>Work</h2>
      <button >AllWork</button>
      
      <div className="worksContainer">
        {projectData.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>

        <button className='MoreProyectsBtn'><a href="#Contact" onClick={(e) => {
  e.preventDefault();
  document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
  }}>MoreProyects</a></button>
           
    </motion.div>
  );
};

export default MyWorks;