import Navbar from "./Components/Navbar";
import Contact from "./sections/Contact";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCard from "./sections/FeatureCard";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import LogoSection from "./sections/LogoSection";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStack from "./sections/TechStack";
import Testimonials from "./sections/Testimonials";


function App() {
 

  return (
    <>
    <Navbar />
     <Hero />
     <ShowcaseSection />
     <ExperienceSection />
     <TechStack />
     <LogoSection />
     {/* <Testimonials /> */}
      <FeatureCard />
      
     <Contact />
     <Footer />
       
       </>
  )
}

export default App
