import React from "react";
import {
  FaRocket,
  FaCode,
  FaLayerGroup,
  FaChartLine,
  FaShieldAlt,
  FaMobile,
} from "react-icons/fa";
import TitleHeader from "../components/TitleHeader";

const FeatureCard = () => {
  const features = [
    {
      icon: <FaRocket className="text-4xl text-cyan-400" />,
      title: "Rapid Development",
      desc: "Deliver high-quality solutions faster with modern frameworks and optimized workflows.",
    },
    {
      icon: <FaCode className="text-4xl text-purple-400" />,
      title: "Clean Code",
      desc: "Maintainable, scalable code following best practices and SOLID principles.",
    },
    {
      icon: <FaLayerGroup className="text-4xl text-blue-400" />,
      title: "Full-Stack Expertise",
      desc: "End-to-end solutions from database design to pixel-perfect UIs.",
    },
    {
      icon: <FaChartLine className="text-4xl text-green-400" />,
      title: "Performance Focused",
      desc: "Optimized applications that load quickly and run smoothly.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-400" />,
      title: "Secure Solutions",
      desc: "Built with security best practices to protect your data and users.",
    },
    {
      icon: <FaMobile className="text-4xl text-pink-400" />,
      title: "Responsive Design",
      desc: "Flawless experiences across all devices and screen sizes.",
    },
  ];

  return (
    <div id="features" className="relative section-padding overflow-hidden">
     

      <div className="relative z-10 container mx-auto px-5 md:px-10">
        <TitleHeader
          title="My Capabilities"
          sub="🎖️What I Bring To The Table"
          titleClass="text-white text-center"
          subClass="text-gray-400 text-center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-cyan-400/30 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-6 p-4 bg-gray-800/50 rounded-full group-hover:bg-cyan-900/20 transition-colors duration-500">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default FeatureCard;
