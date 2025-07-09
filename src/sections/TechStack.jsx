import React from 'react';
import TitleHeader from '../components/TitleHeader';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiFirebase, SiNextdotjs, SiTypescript, SiPostgresql, SiSupabase, SiStripe,  SiFramer, SiJsonwebtokens, SiClerk, SiExpress } from 'react-icons/si';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { TbBrandNextjs } from 'react-icons/tb';

const TechStack = () => {
    const categories = [
        {
            name: 'Animation',
            items: [
                { name: 'GSAP', icon: <div className="text-green-400 font-bold text-2xl">GSAP</div> },
                { name: 'Framer Motion', icon: <SiFramer className="text-[#0055FF]" size={40} /> }
            ]
        },
        {
            name: 'Frontend',
            items: [
                { name: 'React', icon: <FaReact className="text-[#61DAFB]" size={40} /> },
                { name: 'Next.js', icon: <SiNextdotjs className="text-white" size={40} /> },
                { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" size={40} /> },
                { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" size={40} /> }
            ]
        },
        {
            name: 'Backend',
            items: [
                { name: 'Node.js', icon: <FaNodeJs className="text-[#68A063]" size={40} /> },
                { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" size={40} /> },
                { name: 'Express.js', icon: <SiExpress className="text-[#47A248]" size={40} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#336791]" size={40} />, learning: true }
            ]
        },
        {
            name: 'Authentication',
            items: [
                { name: 'Firebase', icon: <SiFirebase className="text-orange-400" size={40} /> },
                { name: 'JWT', icon: <SiJsonwebtokens className="text-[#D63AFF]" size={40} /> },
                { name: 'Clerk', icon: <SiClerk className='text-violet-600' size={40}/> },
                { name: 'NextAuth', icon: <TbBrandNextjs className='' size={40}/> }
            ]
        },
        {
            name: 'Payment',
            items: [
                { name: 'Stripe', icon: <SiStripe className="text-[#635BFF]" size={40} /> },
                { name: 'SSLCommerz', icon: <div className="text-white font-bold text-xl">SSLCommerz</div> }
            ]
        },
        {
            name: 'Exploring',
            items: [
                { name: 'Convex', icon: <div className="text-white font-bold text-2xl">Convex</div>, learning: true },
                { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" size={40} />, learning: true },
                { name: 'Gemini AI', icon: <div className="text-white font-bold text-xl">Gemini</div>, learning: true }
            ]
        }
    ];

    useGSAP(() => {
        // Category title animation
        gsap.fromTo('.category-title', 
            { y: 30, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'back.out',
                stagger: 0.15,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 80%'
                }
            }
        );

        // Tech card animation
        gsap.fromTo('.tech-card',
            { y: 50, opacity: 0 },
            { 
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                stagger: 0.1,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top 70%'
                }   
            }
        );
    }, []);

    return (
        <div id='skills' className="relative section-padding overflow-hidden">                    
            <div className="relative z-10 container mx-auto px-5 md:px-10">
                <TitleHeader
                    title="My Tech Stack"
                    sub=" 🔨Tools & Technologies I Work With"
                    titleClass="text-white text-center"
                    subClass="text-gray-400 text-center"
                />
                
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {categories.map((category) => (
                        <div 
                            key={category.name} 
                            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                            <h2 className="category-title text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 pb-2 border-b border-gray-800">
                                {category.name}
                            </h2>
                            
                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((tech) => (
                                    <div 
                                        key={tech.name}
                                        className="tech-card group relative bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 overflow-hidden"
                                    >
                                        {tech.learning && (
                                            <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full">
                                                Learning
                                            </div>
                                        )}
                                        <div className="flex flex-col items-center gap-3">
                                            <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <h3 className="text-white font-medium text-sm text-center">{tech.name}</h3>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
        </div>
    );
};

export default TechStack;