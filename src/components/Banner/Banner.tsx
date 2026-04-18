import './Banner.css';
import logo2 from '../../assets/logo2.png';

const Banner = () => {
  return (
    <section className="banner" id="home">

      {/* 🔥 CONTENEDOR CENTRAL */}
      <div className="bannerContent">

        {/* TEXT */}
        <div className="bannerText">
          <h3>
            Frontend WebDeveloper <span className="wrap"></span>
          </h3>

          <h1>
            <span>Carlos Julian</span>
            <span>Lichowski</span>
          </h1>
          <h2>Fullstack developer and lab technician</h2>

          <p>
            Crafting functional, high-performance web experiences through the lens
            of architectural precision and mountain-deep digital resilience
          </p>

          <div className='BannerBtnContainer'>

                                <a
                    href="#Projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById('Projects')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Explore
                  </a>
                  
                            <a
                    href="#Projects"
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById('Projects')
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact
                  </a>

          </div>


        </div>

        {/* IMAGE */}
        <div className="bannerImgContainer">
          <img
            className="bannerImg"
            src={logo2}
            alt="Logo Carlos Lichowski"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;