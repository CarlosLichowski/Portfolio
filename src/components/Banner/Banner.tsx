import './Banner.css';
import logo2 from '../../assets/logo2.png'

const Banner = () => {
  return (
   
      <section className='banner' id='home'>
              <div className='bannerText'>
              <h3>Frontend WebDeveloper <span className="wrap"> </span></h3>
              <h1><span>Carlos Julian</span><span>Lichowski</span> </h1>
              <p>Crafting functional, high-performance web experiences through the lens of architectural precision and mountaing-deep digital resilience </p>
              {/* <p>I am a calm person with a deep connection to nature and an enthusiastic cyclist. I value harmony and balance within teamwork. My calm nature promotes a serene and productive collaborative environment</p> */}
              <a href="#Contact" onClick={(e) => {
e.preventDefault();
document.getElementById('Projects')?.scrollIntoView({ behavior: 'smooth' });
}}>Explore My Work</a>
              
              </div>

                            <div className='bannerImgContainer'>
                  <img className='bannerImg' src={logo2}/>
              </div>
            

          
       
      </section>
    
  );
};
export default Banner;