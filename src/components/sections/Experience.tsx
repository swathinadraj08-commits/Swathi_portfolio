"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    role: "Embedded AI Intern",
    company: "STMicroelectronics × DigiToad Technologies",
    location: "Bangalore, India",
    duration: "15-Day Offline Internship",
    techStack: ["STM32CubeIDE", "NanoEdge AI Studio", "Embedded Systems", "Edge AI"],
    highlights: [
      "Developed embedded AI applications",
      "Worked with STM32 microcontrollers & sensors",
      "Explored Edge AI using NanoEdge AI Studio",
      "Built intelligent embedded system prototypes"
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Experience
          </h2>
        </motion.div>

        <div className="relative pl-8">
          {/* Glowing vertical line on the left */}
          <div className="absolute left-4 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-accent-blue/40 via-accent-purple/20 to-transparent -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Animated Node on the line */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                className="absolute left-4 top-7 w-2.5 h-2.5 bg-white rounded-full z-10 shadow-[0_0_6px_rgba(255,255,255,0.6)] -translate-x-1/2"
              />

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-card/45 backdrop-blur-xl p-8 rounded-2xl border border-white/5 hover:border-accent-blue/20 transition-all duration-300 relative group ml-4"
              >
                <div className="relative z-10">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-accent-blue font-bold text-lg">{exp.year}</span>
                    <span className="text-[10px] font-semibold bg-white/5 border border-white/10 text-muted px-3 py-1 rounded-full">
                      {exp.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 font-heading">{exp.role}</h3>
                  <h4 className="text-muted font-semibold text-base mb-1">{exp.company}</h4>
                  <div className="text-xs text-muted/50 mb-6">{exp.location}</div>
                  
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="text-[10px] font-bold text-accent-purple bg-accent-purple/5 px-2.5 py-1 rounded-full border border-accent-purple/15">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights list */}
                  <ul className="space-y-3 text-sm text-muted/80 leading-relaxed list-disc pl-4">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="hover:text-white transition-colors duration-200">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
