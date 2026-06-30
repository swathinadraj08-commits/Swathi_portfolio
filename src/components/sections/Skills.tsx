"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface SkillChipProps {
  name: string;
}

function SkillChip({ name }: SkillChipProps) {
  return (
    <div className="relative">
      <motion.div
        whileHover={{ y: -1, scale: 1.03 }}
        className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-white/5 border border-white/10 text-white/90 hover:border-accent-purple/40 hover:bg-accent-purple/5 transition-all duration-200 cursor-pointer select-none"
      >
        {name}
      </motion.div>
    </div>
  );
}

interface PlanetProps {
  name: string;
  skills: string[];
  angleOffset: number; // in degrees
}

export default function Skills() {
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null);
  
  // Minimal skills optimized for a fresher portfolio
  const planetData = [
    {
      name: "Programming Languages",
      skills: ["Python", "Java", "JavaScript"],
      angleOffset: 0,
    },
    {
      name: "Artificial Intelligence",
      skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "Agentic AI"],
      angleOffset: 45,
    },
    {
      name: "Machine Learning",
      skills: ["Regression", "Classification", "Clustering", "Random Forest", "Neural Networks"],
      angleOffset: 90,
    },
    {
      name: "Agentic AI",
      skills: ["LangChain", "LangGraph", "RAG", "AI Workflows", "Multi-Agent Systems"],
      angleOffset: 135,
    },
    {
      name: "Backend & Frontend",
      skills: ["FastAPI", "React", "REST APIs"],
      angleOffset: 180,
    },
    {
      name: "APIs & AI Models",
      skills: ["OpenAI API", "Gemini API", "Hugging Face"],
      angleOffset: 225,
    },
    {
      name: "Database & Cloud",
      skills: ["SQLite", "MySQL", "PostgreSQL", "Firebase"],
      angleOffset: 270,
    },
    {
      name: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "VS Code"],
      angleOffset: 315,
    },
  ];

  // Core central ecosystem skills
  const centralSkills = [
    "Python", "Java", "JavaScript", "Machine Learning", "Deep Learning",
    "NLP", "LLMs", "Agentic AI", "LangChain", "LangGraph", "AutoGen",
    "FastAPI", "React", "OpenAI API", "Gemini API", "SQLite", "Git", "Docker"
  ];

  // Animation Loop variables using Refs to prevent unnecessary React re-renders
  const containerRef = useRef<HTMLDivElement>(null);
  const planetRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hoverRef = useRef<boolean>(false);
  const angleRef = useRef<number>(0);

  useEffect(() => {
    let animationFrameId: number;
    
    const updateOrbit = () => {
      // Slow orbit speed if any planet is hovered
      const speed = hoverRef.current ? 0.03 : 0.09; 
      angleRef.current = (angleRef.current + speed) % 360;

      // Rotate the parent planetary container
      if (containerRef.current) {
        containerRef.current.style.transform = `rotate(${angleRef.current}deg)`;
      }

      // Rotate planets in the opposite direction to keep text horizontal
      planetRefs.current.forEach((planet) => {
        if (planet) {
          planet.style.transform = `translate(-50%, -50%) rotate(${-angleRef.current}deg)`;
        }
      });

      animationFrameId = requestAnimationFrame(updateOrbit);
    };

    animationFrameId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handlePlanetHoverStart = (idx: number) => {
    setHoveredPlanet(idx);
    hoverRef.current = true;
  };

  const handlePlanetHoverEnd = () => {
    setHoveredPlanet(null);
    hoverRef.current = false;
  };

  // Orbital settings
  const radius = 250; // Compact orbit radius

  return (
    <section id="skills" className="py-24 relative z-10 overflow-hidden">
      
      {/* Ambient Celestial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            AI Solar System
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Interactive representation of domains orbiting around an engineering core.
          </p>
        </motion.div>

        {/* 1. Desktop AI Solar System (>= 1024px) */}
        <div className="relative w-full h-[700px] hidden lg:flex items-center justify-center select-none">
          
          {/* Orbital Circle Guide */}
          <div 
            className="absolute rounded-full border border-white/5 pointer-events-none -z-10"
            style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
          />

          {/* Central Hub: CORE AI ECOSYSTEM */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute z-30 w-64 h-64 rounded-full bg-black/90 backdrop-blur-2xl border border-accent-blue/15 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(79,70,229,0.15)] cursor-default p-6"
          >
            <h3 className="text-[10px] font-bold tracking-widest text-white/90 font-heading mb-4 text-center">
              CORE AI ECOSYSTEM
            </h3>

            {/* Central Stack Mini-Chips */}
            <div className="flex flex-wrap justify-center gap-1.5 max-w-[95%]">
              {centralSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-1.5 py-0.5 text-[8px] font-medium rounded-full bg-white/5 border border-white/10 text-white/70 hover:border-accent-blue/40 transition-all duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Orbit Container (handles the rotation) */}
          <div ref={containerRef} className="absolute w-full h-full flex items-center justify-center">
            {planetData.map((planet, index) => {
              // Radial coordinates based on angle offset
              const rad = (planet.angleOffset * Math.PI) / 180;
              const xPos = radius * Math.cos(rad);
              const yPos = radius * Math.sin(rad);

              const isHovered = hoveredPlanet === index;

              return (
                <div
                  key={planet.name}
                  ref={(el) => {
                    planetRefs.current[index] = el;
                  }}
                  onMouseEnter={() => handlePlanetHoverStart(index)}
                  onMouseLeave={handlePlanetHoverEnd}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${xPos}px)`,
                    top: `calc(50% + ${yPos}px)`,
                  }}
                >
                  {/* Planet Body - w-44 h-44 for a cleaner, non-crowded look */}
                  <div
                    className={`w-44 h-44 rounded-full bg-black/75 backdrop-blur-xl border p-3 flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 relative group
                      ${isHovered ? 'border-accent-purple/50 scale-102 shadow-[0_0_25px_rgba(147,51,234,0.15)]' : 'border-accent-purple/15'}
                    `}
                  >
                    {/* Spin Ring SVG */}
                    <svg className="absolute inset-0 w-full h-full -z-10 rounded-full animate-[spin_30s_linear_infinite]" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="48" 
                        fill="none" 
                        stroke="currentColor" 
                        className={`text-accent-purple opacity-20 group-hover:opacity-60 transition-all duration-500`}
                        strokeWidth="0.5" 
                        strokeDasharray="4 6" 
                      />
                    </svg>

                    {/* Planet Title */}
                    <h4 className="text-[11px] font-bold text-white mb-2 font-heading tracking-wide group-hover:text-accent-blue transition-colors duration-300">
                      {planet.name}
                    </h4>

                    {/* Tech Chips */}
                    <div className="flex flex-wrap justify-center gap-1 max-w-[95%]">
                      {planet.skills.map((skill) => (
                        <SkillChip key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Responsive Mobile/Tablet Card Grid (< 1024px) */}
        <div className="lg:hidden flex flex-col gap-8">
          
          {/* Mobile Center Core Card */}
          <div className="w-full bg-[#0D1117]/80 backdrop-blur-xl border border-accent-blue/30 rounded-2xl p-6 text-center shadow-[0_0_30px_rgba(79,70,229,0.15)] flex flex-col items-center justify-center">
            <h3 className="text-base font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple font-heading text-glow mb-4">
              CORE AI ECOSYSTEM
            </h3>
            <div className="flex flex-wrap justify-center gap-1.5 max-w-[95%]">
              {centralSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-[9px] font-medium rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Mobile Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {planetData.map((planet, index) => (
              <motion.div
                key={planet.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/40 backdrop-blur-xl border border-accent-purple/20 rounded-2xl p-6 hover:border-accent-purple/50 transition-all duration-300"
              >
                <h4 className="text-base font-bold text-white mb-4 font-heading tracking-wide">
                  {planet.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {planet.skills.map((skill) => (
                    <SkillChip key={skill} name={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
