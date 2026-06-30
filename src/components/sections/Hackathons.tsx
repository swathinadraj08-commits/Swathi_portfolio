"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Lightbulb, MonitorPlay, Users, Target } from "lucide-react";

const hackathons = [
  {
    title: "National-level 24hr Hackathon",
    desc: "Built Intelligent API Orchestrator.",
    icon: <Code className="w-5 h-5 text-accent-blue" />
  },
  {
    title: "MIT Hackathon",
    desc: "Prototype solution for the deaf and mute community.",
    icon: <Users className="w-5 h-5 text-accent-purple" />
  },
  {
    title: "Smart India Hackathon",
    desc: "National level government problem statement solving.",
    icon: <Trophy className="w-5 h-5 text-accent-blue" />
  },
  {
    title: "PSG iTech Pitch Fest",
    desc: "AI startup pitch presentation.",
    icon: <Lightbulb className="w-5 h-5 text-accent-purple" />
  },
  {
    title: "Intra-institution Hackathon",
    desc: "Competitive internal problem solving.",
    icon: <MonitorPlay className="w-5 h-5 text-accent-blue" />
  },
  {
    title: "CodeZap Hackathon",
    desc: "Built a real-world functional solution.",
    icon: <Target className="w-5 h-5 text-accent-purple" />
  }
];

export default function Hackathons() {
  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Hackathons & Competitions
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {hackathons.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-card/45 backdrop-blur-xl border border-white/5 rounded-2xl p-6 hover:border-accent-blue/20 transition-all duration-300 flex items-start gap-4 h-full"
            >
              <div className="p-3 rounded-lg bg-white/5 group-hover:bg-accent-blue/10 transition-colors shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold mb-1 text-sm md:text-base leading-snug">{item.title}</h3>
                <p className="text-muted text-xs md:text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
