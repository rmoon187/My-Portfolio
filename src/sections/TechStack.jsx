import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFirebase } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const TechStack = () => {
    const techStack = [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={40} /> },
        { name: 'Firebase', icon: <SiFirebase className="text-orange-400" size={40} /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" size={40} /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={40} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={40} /> }
    ];

    useGSAP(() => {
        gsap.fromTo('.tech-card',
            { y: 50, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }   
            }
        );
    }, []);

    return (
        <div id='skills' className="relative section-padding overflow-hidden">
            {/* Starry background elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div 
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.8 + 0.2,
                            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`
                        }}
                    />
                ))}
            </div>
            
            <div className="relative z-10 container mx-auto px-5 md:px-10">
                <TitleHeader
                    title="My Tech Stack"
                    sub="Tools & Technologies I Work With"
                    titleClass="text-white"
                    subClass="text-gray-400"
                />
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-12">
                    {techStack.map((tech, index) => (
                        <div 
                            key={tech.name}
                            className="tech-card bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-4xl">
                                    {tech.icon}
                                </div>
                                <h3 className="text-white font-medium text-center">{tech.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes twinkle {
                    0% { opacity: 0.2; }
                    100% { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default TechStack;