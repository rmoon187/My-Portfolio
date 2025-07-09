import React, { useRef } from "react";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import FeatureCard from "./sections/FeatureCard";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const contactRef = useRef(null);
  const showcaseRef = useRef(null);

  return (
    <div className="relative min-h-screen">
      {/* Optimized Starry background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
              animation: `twinkle ${Math.random() * 6 + 2}s infinite alternate`,
              transform: 'translateZ(0)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Hero contactRef={contactRef} showcaseRef={showcaseRef} />
        <div ref={showcaseRef}>
          <Showcase />
        </div>
        <FeatureCard />
        <TechStack />
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer />
      </div>
      <style>{`
        @keyframes twinkle {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
        html {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
          width: 100%;
        }
        .will-change-transform {
          will-change: transform, opacity;
        }
      `}</style>
    </div>
  );
}

export default App;