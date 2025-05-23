import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const containerRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);

  useGSAP(() => {
    // Container animation
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });

    // Project animations with staggered delays
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];

    projects.forEach((project, index) => {
      gsap.from(project, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        delay: index * 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Add hover animations
      gsap.to(project.querySelector(".project-image"), {
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: project,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    // Button animations
    gsap.from(".tech-btn", {
      x: -20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      delay: 1,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    });
  }, []);

  return (
    <section
      id="work"
      className="w-full py-20 px-5 md:px-10 lg:px-20"
      
    >
      <div className="max-w-7xl mx-auto" ref={containerRef}>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-white text-center">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Projects
          </span>
        </h2>

        <div className="space-y-28 md:space-y-36">
          {/* Project 1 */}
          <div
            ref={project1Ref}
            className="project-item group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/20"
          >
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              <div className="lg:w-1/2">
                <div className="project-image overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:shadow-blue-500/30">
                  <img
                    src="/images/project1.png"
                    alt="Ryde App"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                  <span className="text-sm font-medium text-blue-400">
                    WEB APP
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  RecomHub – Product Recommendation Platform
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                 RecomHub is a responsive web platform that allows users to post product queries, recommend alternatives, and engage in discussions with secure authentication. 
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    React Router
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Axios
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    TailwindCSS
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Firebase
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all">
                   <a href="https://fir-first-p.web.app/" target="_blank" rel="noopener noreferrer" >View Project</a>
                  </button>
                  <button className="px-6 py-3 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800 transition-all">
                    <a href="https://github.com/rmoon187/ass-11-client" target="_blank" rel="noopener noreferrer">Source Code</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div
            ref={project2Ref}
            className="project-item group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20"
          >
            <div className="flex flex-col lg:flex-row-reverse gap-8 md:gap-12">
              <div className="lg:w-1/2">
                <div className="project-image overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:shadow-purple-500/30">
                  <img
                    src="/images/project2.png"
                    alt="Library Management"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-purple-500"></span>
                  <span className="text-sm font-medium text-purple-400">
                    WEB PLATFORM
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Library Management System
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  A comprehensive digital solution for library administration
                  with inventory management, member tracking, and analytics
                  dashboard.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    React
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Node.js
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    MongoDB
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    GraphQL
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                    <a href="https://ass-10-sol.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                  </button>
                  <button className="px-6 py-3 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800 transition-all">
                    <a href="https://github.com/rmoon187/a-10-client" target="_blank" rel="noopener noreferrer">Source Code</a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div
            ref={project3Ref}
            className="project-item group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-pink-500/20"
          >
            <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
              <div className="lg:w-1/2">
                <div className="project-image overflow-hidden rounded-xl shadow-2xl transition-transform duration-500 group-hover:shadow-pink-500/30">
                  <img
                    src="/images/project3.png"
                    alt="YC Directory"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-4 h-4 rounded-full bg-pink-500"></span>
                  <span className="text-sm font-medium text-pink-400">
                    WEB APP
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                  YC Directory - Startup Showcase
                </h3>
                <p className="text-gray-300 mb-6 text-lg">
                  A curated directory of Y Combinator startups with advanced
                  search, filtering, and analytics features for investors and
                  entrepreneurs.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Next.js
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    TypeScript
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Supabase
                  </span>
                  <span className="tech-btn px-4 py-2 bg-gray-800 rounded-full text-white text-sm font-medium">
                    Framer Motion
                  </span>
                </div>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-pink-500/30 transition-all">
                    <a href="https://assignment-09-7dcc7.web.app/" target="_blank" rel="noopener noreferrer">View Project</a>
                  </button>
                  <button className="px-6 py-3 border border-gray-700 rounded-lg text-white font-medium hover:bg-gray-800 transition-all">
                   <a href="https://github.com/rmoon187/ass-09-sol" target="_blank" rel="noopener noreferrer">Source Code</a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
