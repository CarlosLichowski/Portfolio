import './Banner.css';
import aguila from '../../assets/png/aguila.png';
import AnimateOnView from '../AnimateOnView/AnimateOnViewProps';

const Banner = () => {
  return (
    <AnimateOnView animationProps={{ initial: { opacity: 0, y: 75 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.2, delay: 0.5 } }}>
      <section className='banner' id='home'>
        <div className="box1">
          <div className='BannerContainer' id="home">
            <div className='BannerColumn1'>
              <h3>Frontend WebDeveloper <span className="wrap"> </span></h3>
              <h1>Carlos Julian Lichowski</h1>
              <p>I am a calm person with a deep connection to nature and an enthusiastic cyclist. I value harmony and balance within teamwork. My calm nature promotes a serene and productive collaborative environment</p>
            </div>
            <div className='BannerColumn2'>
              <img src={aguila} className='BannerImg' alt="Águila" />
            </div>
          </div>
        </div>
      </section>
    </AnimateOnView>
  );
};
export default Banner;