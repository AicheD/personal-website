import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

export default function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div style={{ height: '7vh' }}></div>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}