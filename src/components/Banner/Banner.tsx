import './Banner.css';
import aguila from '../../assets/png/aguila.png'
const Banner = () => {
  return (
    <section className='banner' id='home'>
      <div className="box1">

      <div className='BannerContainer' id="home">
                    <div className='BannerColumn1'>
                     
                      <h3>Frontend WebDeveloper  <span className="wrap"> </span></h3>
                      <h1>Carlos Julian Lichowski</h1>
                      <p>I am a calm person with a deep connection to nature and an enthusiastic cyclist. I value harmony and balance within teamwork. My calm nature promotes a serene and productive collaborative environment</p>
                       
                    </div>

        <div className='BannerColumn2'>
       
            <img src={aguila} className='aguila'/>
        </div>
      </div>
      </div>

    </section>
  );
};
export default Banner;