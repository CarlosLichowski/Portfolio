
import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import MyWorks from "./components/MyWorks/MyWorks";
import NavBar from "./components/Navbar/Navbar";
import SocialBar from "./components/SocialBar/SocialBar";
import './App.css';
import AnimateOnView from "./components/AnimateOnView/ScrollReveal";

function App() {
  return (
    <>
      <NavBar />
      <div className="AppContainer">
        <AnimateOnView animationProps={{ initial: { opacity: 0, y: 75 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: 0.25 } }}>
          <div className="section"><SocialBar /></div>
        </AnimateOnView>
        <AnimateOnView animationProps={{ initial: { opacity: 0, y: 75 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.65 } }}>
          <div className="section"><Banner /></div>
        </AnimateOnView>
        <AnimateOnView animationProps={{ initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5, delay: 0.65 } }}>
          <div className="section"><MyWorks /></div>
        </AnimateOnView>
        <AnimateOnView animationProps={{ initial: { opacity: 0, x: -50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.55 } }}>
          <div className="section"><AboutMe /></div>
        </AnimateOnView>
        <AnimateOnView animationProps={{ initial: { opacity: 0, y: 100 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.65 } }}>
          <div className="section"><Footer /></div>
        </AnimateOnView>
      </div>
    </>
  );
}

export default App;