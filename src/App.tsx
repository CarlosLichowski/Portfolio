
import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MyWorks from "./components/MyWorks/MyWorks";
import NavBar from "./components/Navbar/Navbar";
import SocialBar from "./components/SocialBar/SocialBar";
import './App.css';

function App() {
  return (
    <>
      <div className="view">
        <div className="block">
          <NavBar />
        </div>
        <div className="block">
          <SocialBar />
        </div>
        <div className="block">
          <Banner />
        </div>
        <div className="block">
          <MyWorks />
        </div>
        <div className="block">
          <AboutMe />
        </div>
        <div className="block">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;