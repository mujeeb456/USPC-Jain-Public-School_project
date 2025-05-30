import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoSection from "./components/InfoSection";
import Features from "./components/Features";
import SchoolInfo from "./components/SchoolInfo";
import PhotoGallery from "./components/PhotoGallery";
import ResourcesSection from "./components/ResourcesSection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <InfoSection />
      <Features />
      <SchoolInfo />
      <PhotoGallery />
      <ResourcesSection />
    </div>
  );
}

export default App;
