
import './Footer.css';
import AnimateOnView from '../AnimateOnView/AnimateOnViewProps'; // Adjust the path as needed


const Footer = () => {
  return (
    <footer className="footer" id="Contact">
      <AnimateOnView
        animationProps={{
          initial: { opacity: 0, y: -50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
        }}
      >
        <div className="footerTitle">
          <h3>Connect With Me</h3>
        </div>
      </AnimateOnView>

      <div className='footerContent'>
        <AnimateOnView
          animationProps={{
            initial: { opacity: 0, x: -50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.2 },
          }}
        >
          <div className="footerbox">
            <h3 className='footerboxh3'>Open to roles in web development</h3>
            <p>Seeking new opportunities</p>
          </div>
        </AnimateOnView>
        <AnimateOnView
          animationProps={{
            initial: { opacity: 0, scale: 0.8 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.4 },
          }}
        >
          <div className="footerbox">
            <h3 className='footerboxh3'>Interested in challenging projects</h3>
            <p>Exploring potential challenge.</p>
          </div>
        </AnimateOnView>
        <AnimateOnView
          animationProps={{
            initial: { opacity: 0, x: 50 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 0.5, delay: 0.6 },
          }}
        >
          <div className="footerbox">
            <h3 className='footerboxh3'>Let's build something great</h3>
            <p>Collaborate on your next project</p>
          </div>
        </AnimateOnView>
      </div>

      <AnimateOnView
        animationProps={{
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.3 },
        }}
      >
        <div className="footerBottom">

          <div className='footeranchors'>
          <li><a className='footerBtn' href="https://www.linkedin.com/in/carlos-lichowski" target="_blank"><h2>LinkedIn</h2></a></li>     
          <li><a className='footerBtn' href="https://github.com/CarlosLichowski" target="_blank"><h2>Github</h2></a></li>
          </div>

        </div>


      </AnimateOnView>
          <h3 className='footerEmail'>Email: carlosjlicho@gmail.com</h3>
    </footer>
  );
};

export default Footer;