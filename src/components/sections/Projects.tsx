"use client";

import { motion } from "framer-motion";
import TiltCard from "../ui/TiltCard";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Mental Health Monitoring System",
    problem: "Detects emotional distress/early mental-health risk from conversations for proactive intervention.",
    solution: "An NLP pipeline built on Fine-Tuned Transformers that extracts emotional semantics and flags warning signs in real-time.",
    tech: ["Python", "Transformers", "NLP", "Flask", "SQLite"],
    github: "https://github.com/swathinadraj08-commits",
    demo: "https://github.com/swathinadraj08-commits",
    image: "/project_mental_health.png"
  },
  {
    title: "Animal Disease Prediction System",
    problem: "Helps farmers/vets predict animal diseases early via ML, reducing diagnosis time.",
    solution: "An ensemble Random Forest model utilizing key animal health metrics to accurately classify symptoms and flag illnesses.",
    tech: ["Python", "Random Forest", "Scikit-learn", "Flask"],
    github: "https://github.com/swathinadraj08-commits/Animal-disease-prediction",
    demo: "https://github.com/swathinadraj08-commits/Animal-disease-prediction",
    image: "/project_animal_disease.png"
  },
  {
    title: "Intelligent API Orchestrator",
    problem: "Understands user requests, selects APIs, generates and executes multi-step automation workflows.",
    solution: "A LangGraph-based workflow engine that dynamically parses intent, invokes microservices, and resolves automation graphs.",
    tech: ["FastAPI", "React", "LangGraph", "SQLite", "OpenAI API"],
    github: "https://github.com/swathinadraj08-commits",
    demo: "https://github.com/swathinadraj08-commits",
    image: "/project_api_orchestrator.png"
  },
  {
    title: "Neuro AI",
    problem: "Conversational assistant with contextual reasoning, multi-turn dialogue, LLM-powered knowledge support.",
    solution: "An agentic chat assistant using the Gemini API with structured memory management and dynamic contextual response formatting.",
    tech: ["Gemini API", "Python", "Flask", "LLM"],
    github: "https://github.com/swathinadraj08-commits/Neuro-AI",
    demo: "https://github.com/swathinadraj08-commits/Neuro-AI",
    image: "/project_neuro_ai.png"
  },
  {
    title: "Multilingual Translator",
    problem: "Translates text across languages while preserving meaning and context.",
    solution: "A Flask-based translation service utilizing NLP translation models with semantic check systems for higher fidelity.",
    tech: ["Python", "Google Translate API", "Flask", "NLP"],
    github: "https://github.com/swathinadraj08-commits/speak-easy-translate",
    demo: "https://github.com/swathinadraj08-commits/speak-easy-translate",
    image: "/project_translator.png"
  },
  {
    title: "Real-Time Stock Monitoring System",
    problem: "Real-time price monitoring, trend visualization, and movement alerts.",
    solution: "A lightweight dashboard streaming real-time stock ticks via WebSockets, integrated with automated alert thresholds.",
    tech: ["Python", "FastAPI", "Alpha Vantage API", "Chart.js", "WebSockets"],
    github: "https://github.com/swathinadraj08-commits/Real-Time-Stock-Monitering",
    demo: "https://github.com/swathinadraj08-commits/Real-Time-Stock-Monitering",
    image: "/project_stock_monitor.png"
  },
  {
    title: "Document Analyzer Agent",
    problem: "AI agent that extracts information, answers questions, and summarizes long PDFs.",
    solution: "A RAG agent with FAISS vector indexing and LangChain to fetch relevant context and generate citations for user queries.",
    tech: ["LangChain", "OpenAI API", "Python", "FAISS", "FastAPI"],
    github: "https://github.com/swathinadraj08-commits/Document-Analyzer-agent",
    demo: "https://github.com/swathinadraj08-commits/Document-Analyzer-agent",
    image: "/project_document_analyzer.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Architecting intelligent systems that bridge the gap between research and real-world impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard glow className="h-full flex flex-col p-0 overflow-hidden group">
                <div className="h-48 w-full relative overflow-hidden border-b border-white/5">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/5 transition-colors duration-500" />
                  <div className="absolute inset-0 border-[2px] border-transparent group-hover:border-accent-blue/20 transition-colors duration-500 z-10" />
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-card/45 backdrop-blur-xl">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent-blue transition-colors font-heading tracking-wide">
                    {project.title}
                  </h3>
                  
                  {/* Problem & Solution block */}
                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent-blue block mb-1">Problem</span>
                      <p className="text-muted text-sm leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-accent-purple block mb-1">Solution</span>
                      <p className="text-white/80 text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-bold text-accent-purple bg-accent-purple/5 px-2.5 py-0.5 rounded border border-accent-purple/10">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {/* Code and Live Demo Links */}
                  <div className="flex items-center gap-6 mt-auto pt-5 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-white transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-muted hover:text-accent-blue transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
