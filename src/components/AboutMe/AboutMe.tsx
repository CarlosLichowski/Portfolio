  import React from 'react';
  import './AboutMe.css';
  import ReactIcon from '../../assets/png/tech/React.png'
  import Bootstrap from '../../assets/png/tech//Bootstrap-icon.png'
  import NodeJs from '../../assets/png/tech/node-icon.png'
  import Github from '../../assets/png/tech/github icon.png'
  import Python from '../../assets/png/tech/python.png'
  import Postgre from '../../assets/png/tech/postgre-icon.png'
  import Perfil from '../../assets/png/perfil.png'
  import Firebase from '../../assets/png/tech/firebase.png'
import { useTranslation } from 'react-i18next';

  const AboutMe: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContainer" id="About">
      <div className='textColumnContainer'>
        <img src={Perfil} alt="Perfil"/>
        <div className='textcontainer'>
          <h2 className="aboutH2">{t('aboutPage.title')}</h2>
          <p className="text1">{t('aboutPage.text1')}</p>
          <p className="text2">{t('aboutPage.text2')}</p>
        </div>
      </div>
      
      <div className='skillsIconsContainer' id='Skills'>
        <h2 className="skillsH2">{t('about.skills')}</h2>
        <div className='skillsIcons' >
          <img src={ReactIcon} alt='React Icon'/>
          <img src={Python} alt='Python Icon'/>
          <img src={NodeJs} alt='NodeJs Icon'/>
          <img src={Postgre} alt='Postgre Icon'/>
          <img src={Github} alt='Github Icon'/>
          <img src={Bootstrap} alt='Bootstrap Icon'/>
          <img src={Firebase} alt='Firebase Icon'/>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;