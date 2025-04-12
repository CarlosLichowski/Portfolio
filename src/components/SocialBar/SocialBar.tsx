import Whatsapp from '../../assets/whatappicon.png'
import Instagram from '../../assets/instagramicon.png'
import Youtube from '../../assets/youtubeicon.png'
import Facebook from '../../assets/facebookicon.png'

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

    <a href="https://www.youtube.com/@sanacionescuanticas-j6g">
      <img src={Instagram} alt="youtube" />
    </a>

    <a href="https://www.instagram.com/sanacionescuanticas/">
      <img src={Facebook} alt="instagram" />
    </a>
  </div>

  <div className="NavSocialIconsContainerMobile">
          <a href="#" onClick={handleWhatsAppClick}>
            <img src={Whatsapp} alt="whatsapp" />
          </a>

          <a href="https://www.youtube.com/@sanacionescuanticas-j6g">
          <img src={Youtube} alt="youtube" />
        </a>

          <a href="https://www.instagram.com/sanacionescuanticas/">
            <img src={Instagram} alt="instagram" />
          </a>
        </div>
      </div>
  
  
  )
}

export default SocialBar