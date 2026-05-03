import React, { useState, useEffect, useRef } from 'react';
import './MyWorks.css';
import { motion, AnimatePresence, useInView, useAnimation } from 'framer-motion';
import WorkCard from './WorkCard/WorkCard';

// Imports de imágenes
import Rickandmorty from '../../assets/img/MyWork/rickandmorty.png';
import Innova from '../../assets/img/MyWork/Innova.png';
import codigochef from '../../assets/img/MyWork/codigochef.png';
import ramosmejia from '../../assets/img/MyWork/ramos mejia logo.png';
import sanacionesCuanticas from '../../assets/img/MyWork/sanacionescuanticas.png';

const MyWorks: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' });
  const mainControls = useAnimation();

  // Datos de los proyectos
  const featuredProjects = [
    { title: 'Innova', description: ['E-commerce', 'M.E.R.N'], imageSrc: Innova, altText: 'Innova', repoLink: 'https://github.com/Carlicho/Innova-Render' },
    { title: 'Laboratorio Ramos Mejia', description: ['ReactJs', 'firebase'], imageSrc: ramosmejia, altText: 'ramosmejia', visitLink: 'https://labramos.web.app/' },
        { title: 'CodigoChef', gridClass: 'div4', description: ['Restaurant', 'ReactJs'], imageSrc: codigochef, altText: 'Restaurant web', visitLink: 'https://codigochef.netlify.app/' },

  ];

  const archiveProjects = [
        { title: 'RickandMorty Api', description: ['M.E.R.N'], imageSrc: Rickandmorty, altText: 'Rickandmorty', repoLink: 'https://github.com/Carlicho/RickandMorty' },
        { title: 'SanacionesCuanticas',  description: ['Web de Servicios', 'ReactJs'], imageSrc: sanacionesCuanticas, altText: ' web de Servicios', repoLink: 'https://github.com/CarlosLichowski/Client-SanacionesCuenticas' },

  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === featuredProjects.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  useEffect(() => {
    if (isInView) mainControls.start('visible');
  }, [isInView, mainControls]);

  return (
    <motion.div ref={ref} className="worksmaincontainer" id="Projects" initial="hidden" animate={mainControls}>
      <h2 className='worksmaincontainerh2'>Work</h2>

      <section className="featured-section">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            className="split-screen-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="split-image">
              <img src={featuredProjects[currentIndex].imageSrc} alt={featuredProjects[currentIndex].altText} />
            </div>
            <div className="split-content">
              <h3>{featuredProjects[currentIndex].title}</h3>
              <ul>
                {featuredProjects[currentIndex].description.map((desc, i) => <li key={i}>{desc}</li>)}
              </ul>
              
              {/* Lógica de botones corregida */}
              <div className="project-links">
                {featuredProjects[currentIndex].repoLink && (
                  <a href={featuredProjects[currentIndex].repoLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Ver Repositorio
                  </a>
                )}
                {featuredProjects[currentIndex].visitLink && (
                  <a href={featuredProjects[currentIndex].visitLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                    Visitar Sitio
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="archive-section">
        <h3 className='archive-title'>Archive</h3>
        <div className="worksContainer">
          {archiveProjects.map((project, index) => (
            <WorkCard key={index} {...project} animationProps={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }} />
          ))}
        </div>
      </section>


    </motion.div>
  );
};

export default MyWorks;