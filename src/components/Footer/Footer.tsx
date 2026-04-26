
import './Footer.css';
import AnimateOnView from '../AnimateOnView/AnimateOnViewProps'; // Adjust the path as needed
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer" id="Contact">
      <div className='footerContent'>
        <AnimateOnView animationProps={{ initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.2 } }}>
          <div className="footerbox">
            <h3 className='footerboxh3'>{t('footer.title')}</h3>
            <p>{t('footer.description')}</p>
          </div>
        </AnimateOnView>
        <AnimateOnView animationProps={{ initial: { opacity: 0, x: 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.6 } }}>
          <button className='footerBtn'>{t('footer.btn')}</button>
        </AnimateOnView>
      </div>

      <AnimateOnView animationProps={{ initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.3 } }}>
        <div className="footerBottom">
          <div className='footeranchors'>
            <li><a className='footerBtn' href="https://www.linkedin.com/in/carlos-lichowski" target="_blank"><h2>{t('footer.linkedin')}</h2></a></li>
            <li><a className='footerBtn' href="https://github.com/CarlosLichowski" target="_blank"><h2>{t('footer.github')}</h2></a></li>
          </div>
        </div>
      </AnimateOnView>
      <h3 className='footerEmail'>Email: carlosjlicho@gmail.com</h3>
    </footer>
  );
};
export default Footer;