import Email from '../../assets/gmailIcon.png'
import Linkedin from '../../assets/linkedinicon.png'
import GitHub from '../../assets/githubIcon.png'

import './SocialBar.css'



const SocialBar = () => {


    


  return (
    <div className="SocialContainer">   

         <div className="NavSocialIconsContainer">

         <a href="https://github.com/CarlosLichowski" >
      <img src={GitHub} alt="GitHub" />
    </a>
    
    <a href="https://www.linkedin.com/in/carlos-lichowski">
      <img src={Linkedin} alt="Linkedin" />
    </a>

    <a href="https://www.linkedin.com/in/carlos-lichowski">
      <img src={Email} alt="Email" />
    </a>


    



  </div>


  

  <div className="NavSocialIconsContainerMobile">
  <a href="https://www.linkedin.com/in/carlos-lichowski">
      <img src={Email} alt="Email" />
    </a>


    <a href="https://www.linkedin.com/in/carlos-lichowski">
      <img src={Linkedin} alt="Linkedin" />
    </a>
    
    <a href="https://github.com/CarlosLichowski" >
      <img src={GitHub} alt="GitHub" />
    </a>


        </div>
      </div>
  
  
  )
}

export default SocialBar