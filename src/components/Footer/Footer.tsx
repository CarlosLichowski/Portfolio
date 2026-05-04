import { useState } from 'react';
import './Footer.css';
import AnimateOnView from '../AnimateOnView/AnimateOnViewProps';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const contactEmail = "carlosjlicho@gmail.com";
  const mailSubject = encodeURIComponent("Consulta desde carlosjlicho.com");

  const handleContactClick = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="footer" id="Contact">
      <div className='footerContent'>
        <AnimateOnView 
          animationProps={{ 
            initial: { opacity: 0, y: 30 }, 
            animate: { opacity: 1, y: 0 }, 
            transition: { duration: 0.8, ease: "easeOut" } 
          }}
        >
          <div className="footerbox">
            <h3 className='footerboxh3'>{t('footer.title')}</h3>
            <p className='footerDesc'>{t('footer.description')}</p>
            
            <a 
              href={`mailto:${contactEmail}?subject=${mailSubject}`} 
              className='footerMainBtn'
              onClick={handleContactClick}
            >
              {/* Usamos una nueva key para la traducción del estado copiado */}
              {copied ? t('footer.copied') : t('footer.btn')}
            </a>
          </div>
        </AnimateOnView>

        <div className="footerBottom">
          <ul className='footeranchors'>
            <AnimateOnView animationProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.4 } }}>
              <li>
                <a href="https://www.linkedin.com/in/carlos-lichowski" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            </AnimateOnView>
            <AnimateOnView animationProps={{ initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5 } }}>
              <li>
                <a href="https://github.com/CarlosLichowski" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </AnimateOnView>
          </ul>
          
          <div className="emailWrapper">
            <a 
              href={`mailto:${contactEmail}`} 
              className='footerEmail' 
              onClick={handleContactClick}
            >
              {contactEmail}
            </a>
            {/* Tooltip también traducido */}
            {copied && <span className="copyTooltip">{t('footer.copied')}</span>}
          </div>
        </div>
      </div>
      
      <p className="footerCopyright">
        © {new Date().getFullYear()} Carlos J. Lichowski. Built with precision.
      </p>
    </footer>
  );
};

export default Footer;