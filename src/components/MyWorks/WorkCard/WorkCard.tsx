import React from 'react';
import './WorkCard.css';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // 1. Importa el hook

interface WorkCardProps {
  title: string;
  gridClass: string;
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
  const { t } = useTranslation(); // 2. Inicializa el hook

  return (
    <motion.div className={`workContainer ${gridClass}`} {...animationProps}>
      <div className='workImageContainer'>
        <img className="workImage" src={imageSrc} alt={altText} />
        
      </div>

      <div className="workDescription">
        <ul className="description">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className='workRepository'>
          <h2 className="CardTitleH2">{title}</h2>
        {repoLink && (
          <a href={repoLink} target="_blank" rel="noopener noreferrer">
            {/* 3. Traducción de botones */}
            <button className="repositoryBtn">{t('work.repo')}</button>
          </a>
        )}
        {visitLink && (
          <a href={visitLink} target="_blank" rel="noopener noreferrer">
            {/* 3. Traducción de botones */}
            <button className="repositoryBtn">{t('work.visit')}</button>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default WorkCard;