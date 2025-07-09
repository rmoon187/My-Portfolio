import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import img from "../assets/hero.png";
import "./styles/hero.css"; // Create this CSS file for additional styles
import { details } from "../constants";

gsap.registerPlugin(TextPlugin);

const Hero = ({ contactRef, showcaseRef }) => {
  const nameRef = useRef(null);
  const detailsRef = useRef(null);
  const imageRef = useRef(null);
  const heroRef = useRef(null);
  const cursorRef = useRef(null);

  
  

  useEffect(() => {
    // Name animation
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { duration: 1.5, opacity: 1, y: 0, ease: "power3.out" }
    );

    
    let currentIndex = 0;

    const animateText = () => {
      // Blink cursor animation
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.3,
        repeat: 1,
        yoyo: true,
        onComplete: () => {
          gsap.set(cursorRef.current, { opacity: 1 });

          // Text typing animation
          gsap.to(detailsRef.current, {
            duration: 2, // Increased duration for slower typing
            text: details[currentIndex],
            ease: "power2.inOut",
            onStart: () => {
              gsap.to(cursorRef.current, { opacity: 1 });
            },
            onComplete: () => {
              // Blink cursor while waiting
              gsap.to(cursorRef.current, {
                opacity: 0,
                duration: 0.5,
                repeat: 3,
                yoyo: true,
                onComplete: () => {
                  // Erase text animation
                  gsap.to(detailsRef.current, {
                    duration: 1.5, // Increased duration for slower erasing
                    text: "",
                    ease: "power2.in",
                    onComplete: () => {
                      currentIndex = (currentIndex + 1) % details.length;
                      animateText();
                    },
                  });
                },
              });
            },
          });
        },
      });
    };

    // animateText();

    // Image entrance animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 100, scale: 0.8 },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        scale: 1,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Float after appearing
          gsap.to(imageRef.current, {
            duration: 3,
            y: 20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        },
      }
    );

    // Background elements animation
    gsap.from(".hero-bg-element", {
      duration: 2,
      opacity: 0,
      stagger: 0.2,
      ease: "sine.inOut",
    });

  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      ref={heroRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-bg-element absolute top-20 left-20 w-64 h-64 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="hero-bg-element absolute bottom-20 right-20 w-72 h-72 bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="hero-bg-element absolute top-1/2 left-1/4 w-96 h-96 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-5 md:px-20 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero content */}
          <header className="md:w-1/2 w-full">
            <div className="mb-6">
              <span className="text-lg md:text-xl font-medium text-purple-400 mb-2 block">
                Hello, I'm
              </span>
              <h1
                ref={nameRef}
                className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-600 mb-4"
              >
                Rabiul Hasan Moon
              </h1>
              <div className="flex items-center">
                <div 
                  ref={detailsRef} 
                  className="text-2xl md:text-3xl font-mono font-semibold text-gray-300 h-8"
                ></div>
                <span 
                  ref={cursorRef}
                  className="ml-1 w-2 h-8 bg-purple-400 inline-block"
                ></span>
              </div>
            </div>

            <p className="text-gray-400 text-lg mb-8 max-w-lg">
              Crafting exceptional digital experiences with modern web
              technologies. Specializing in building scalable, performant
              full-stack applications.
            </p>

            <div className="flex gap-4">
              <button onClick={() => showcaseRef.current.scrollIntoView({ behavior: 'smooth' })}  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
                View Projects
              </button>
              <button onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-3 border border-purple-400 rounded-lg font-medium text-purple-400 hover:bg-purple-900/50 transition-all duration-300">
                Contact Me
              </button>
            </div>

            <div className="mt-12 flex gap-6">
              <div className="tech-icon">
                <i className="devicon-react-original colored text-3xl"></i>
              </div>
              <div className="tech-icon">
                <i className="devicon-nodejs-plain colored text-3xl"></i>
              </div>
              <div className="tech-icon">
                <i className="devicon-mongodb-plain colored text-3xl"></i>
              </div>
              <div className="tech-icon">
                <i className="devicon-javascript-plain colored text-3xl"></i>
              </div>
            </div>
          </header>

          {/* Hero image */}
          <figure className="md:w-1/2 w-full flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl opacity-70 blur-xl"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-purple-500/20">
                <img
                  ref={imageRef}
                  className="w-full max-w-md object-cover transform transition-all hover:scale-105 duration-500"
                  src={img}
                  alt="Rabiul Hasan - MERN Stack Developer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="inline-flex items-center px-4 py-2 bg-purple-600/80 backdrop-blur-sm rounded-full text-white font-medium">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    Available for work
                  </span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-0"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 z-0"></div>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
