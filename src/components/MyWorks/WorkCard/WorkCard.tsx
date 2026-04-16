import React from 'react';
import './WorkCard.css';
import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  gridClass: string; // Recibimos la posición del grid
  description: string[];
  imageSrc: string;
  altText: string;
  repoLink?: string;
  visitLink?: string;
  animationProps: any;
}

const WorkCard: React.FC<WorkCardProps> = ({
  title,
  gridClass,
  description,
  imageSrc,
  altText,
  repoLink,
  visitLink,
  animationProps,
}) => {
  return (
    <motion.div className={`workContainer ${gridClass}`} {...animationProps}>
      <div className='workImageContainer'>
        <img className="workImage" src={imageSrc} alt={altText} />
        <h2 className="CardTitleH2">{title}</h2>
      </div>

      <div className="workDescription">
        <ul className="description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='workRepository'>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Repository</button>
          </a>
        )}
        {visitLink && (
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            <button className="repositoryBtn">Visit Page</button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default WorkCard;