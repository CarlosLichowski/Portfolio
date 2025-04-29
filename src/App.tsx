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
      <NavBar />
      <div className="AppContainer">
        <SocialBar />
        <Banner />
        <MyWorks />
        <AboutMe />
        <Footer />
      </div>
    </>
  );
}

export default App;