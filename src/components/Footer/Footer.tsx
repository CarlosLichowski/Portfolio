
import './Footer.css'
import Email from './EmailForm';


const Footer = () => {

  return (
    <footer className="footer" id="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h3>Contacto</h3>
        <ul >
          <div className='footer1'>

          <li><strong>Email:</strong> carlosjlicho@gmail.com</li>
          <li><strong>phone:</strong> +54 9 1157993571</li>
          </div>
          
          <div className='footer2'>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/carlos-lichowski/">Carlos Lichowski</a></li>
          <li><strong>Instagram:</strong> <a href="https://www.instagram.com/">Carlos Lichowski</a></li>  
          </div>
        </ul>

       
      </div>
    </div>

    <Email/>
  </footer>
  );
};

export default Footer;


