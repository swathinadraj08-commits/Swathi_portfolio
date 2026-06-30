"use client";

import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";
import { GraduationCap, MapPin, Languages, BrainCircuit } from "lucide-react";

const aboutCards = [
  {
    title: "Education",
    icon: <GraduationCap className="w-6 h-6 text-accent-blue" />,
    content: "Dr NGP Institute of Technology, B.Tech AI & Data Science, Final year, CGPA 8.31",
  },
  {
    title: "Location",
    icon: <MapPin className="w-6 h-6 text-accent-purple" />,
    content: "Tamil Nadu, India",
  },
  {
    title: "Languages",
    icon: <Languages className="w-6 h-6 text-accent-blue" />,
    content: "Tamil, English",
  },
  {
    title: "Interests",
    icon: <BrainCircuit className="w-6 h-6 text-accent-purple" />,
    content: "Agentic AI, Machine Learning, LLMs, Automation",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Turning ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">intelligent solutions</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            I am an AI Engineer specializing in building autonomous agents and machine learning pipelines that solve complex problems. With a deep focus on generative AI and natural language processing, I transform theoretical concepts into scalable, real-world applications that drive efficiency and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard glow className="h-full">
                <div className="mb-4 p-3 bg-white/5 rounded-lg inline-block">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.content}</p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
