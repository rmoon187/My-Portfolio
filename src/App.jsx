import React from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCard from "./sections/FeatureCard";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NightSky from "./threebg/NightSky";


function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden overflow-y-auto">
    {/* Background 3D Canvas */}
    {/* <div className="absolute inset-0 z-0">
      <NightSky />
    </div> */}

    {/* Foreground Website UI */}
    <div className="relative z-10">
      {/* <Navbar /> */}
      <Hero/>
      <Showcase/>
      <FeatureCard/>
      <TechStack/>
      <Contact/>
      <Footer/>
      {/* Add other components here */}
    </div>
  </div>
  );
}

export default App;
