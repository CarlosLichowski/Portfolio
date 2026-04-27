import './Banner.css';
import logo2 from '../../assets/logo2.png';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();

  return (
    <section className="banner" id="home">
      <div className="bannerContent">
        <div className="bannerText">
          <h1>
            <span>Carlos Julian </span>
            <span>Lichowski</span>
          </h1>
          <h2>{t('banner.subtitle')}</h2>
          <p>{t('banner.description')}</p>

          <div className='BannerBtnContainer'>
            <button className='btnToExplore' onClick={(e) => {
                e.preventDefault();
                document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              {t('banner.explore')}
            </button>
            <button className='btnToContact' onClick={(e) => {
                e.preventDefault();
                document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
              }}>
              {t('banner.contact')}
            </button>
          </div>
        </div>

        <div className="bannerImgContainer">
          <img className="bannerImg" src={logo2} alt="Logo Carlos Lichowski" />
        </div>
      </div>
    </section>
  );
};
export default Banner;