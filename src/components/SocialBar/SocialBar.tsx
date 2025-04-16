import Whatsapp from '../../assets/whatappicon.png'
import Linkedin from '../../assets/linkedinicon.png'

import './SocialBar.css'



const SocialBar = () => {

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/+5491123048560/?text=urlencodedtext`; 
        window.open(whatsappUrl, '_blank'); 
      };
    


  return (
    <div className="SocialContainer">   

         <div className="NavSocialIconsContainer">
    <a href="#" onClick={handleWhatsAppClick}>
      <img src={Whatsapp} alt="whatsapp" />
    </a>

    <a href="https://www.linkedin.com/in/carlos-lichowski">
      <img src={Linkedin} alt="Linkedin" />
    </a>


  </div>

  <div className="NavSocialIconsContainerMobile">
          <a href="#" onClick={handleWhatsAppClick}>
            <img src={Whatsapp} alt="whatsapp" />
          </a>


        </div>
      </div>
  
  
  )
}

export default SocialBar