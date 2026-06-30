"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import MagneticButton from "../ui/MagneticButton";
import { Mail, MapPin, Download, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS credentials later
    const serviceId = "YOUR_SERVICE_ID";
    const templateId = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";
    
    // Mocking submission for now if keys are not set
    if (serviceId === "YOUR_SERVICE_ID") {
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        console.error("Failed to send email:", err);
        alert("Failed to send email. Please try again.");
      });
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
            Let&apos;s build the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-purple">AI</span>
          </h2>
          <p className="text-xl text-muted">
            Open for opportunities, collaborations, and conversations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full"
          >
            <div className="bg-card border border-white/5 p-8 rounded-2xl flex flex-col justify-between h-full space-y-8">
              <div className="space-y-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">
                  Direct Contact
                </div>
                
                <a href="mailto:swathinadarajan08@gmail.com" className="flex items-center gap-4 text-muted hover:text-white transition-colors group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-blue/20 transition-colors">
                    <Mail className="w-6 h-6 text-accent-blue" />
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted/60 mb-1">Email</div>
                    <div className="font-medium text-white/90 break-all">swathinadarajan08@gmail.com</div>
                  </div>
                </a>
                
                <div className="flex items-center gap-4 text-muted group">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-accent-purple/20 transition-colors">
                    <MapPin className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <div className="text-sm font-medium uppercase tracking-wider text-muted/60 mb-1">Location</div>
                    <div className="font-medium text-white/90">Coimbatore, Tamil Nadu</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-6 space-y-4">
                <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted/40">
                  Connect & Resume
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://github.com/swathinadraj08-commits" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3 bg-white/5 rounded-full text-muted hover:text-white hover:bg-accent-blue/10 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-300"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/swathi-n-024888333" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="p-3 bg-white/5 rounded-full text-muted hover:text-white hover:bg-accent-blue/10 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] transition-all duration-300"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <MagneticButton variant="outline" className="text-xs">
                    <a href="/resume.pdf" download className="flex items-center gap-2 py-0.5">
                      <Download className="w-4 h-4" /> Download Resume
                    </a>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-white/5 p-8 rounded-2xl space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-muted/50 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <MagneticButton type="submit" className="w-full flex justify-center" disabled={loading}>
                <span className="flex items-center gap-2">
                  {loading ? "Sending..." : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </span>
              </MagneticButton>
              {success && (
                <p className="text-green-400 text-sm text-center mt-4">Message sent successfully!</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
