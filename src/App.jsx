import Stats from "./components/Stats"; 
import Hero from "./components/hero";
import About from "./components/About";
import SitePlan from "./components/SitePlan";
import ProjectStatus from "./components/ProjectStatus";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import LocationHighlights from "./components/LocationHighlights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EnquireNow from "./components/EnquireNow";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <SitePlan />
      <ProjectStatus />
      <Location />
      <Amenities />
      <LocationHighlights />
      <Contact />
      <EnquireNow />
      <Footer />
    </>
  );
}

export default App;