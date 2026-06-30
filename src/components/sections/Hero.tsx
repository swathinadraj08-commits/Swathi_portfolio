"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function HeroRings() {
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ringsRef.current) {
      ringsRef.current.rotation.x += delta * 0.04;
      ringsRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={ringsRef} rotation={[Math.PI / 4, 0, 0]}>
      {[2.3].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 16, 100]} />
          <meshBasicMaterial color="#4F46E5" transparent opacity={0.15} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      
      {/* Background radial gradient element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-blue/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
        {/* Left Side (Text & Info) */}
        <div className="space-y-8 relative z-10 lg:pl-8 xl:pl-16 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start w-full"
          >
            <p className="text-accent-blue font-semibold uppercase tracking-[0.08em] mb-3 text-sm md:text-base">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-[76px] xl:text-[90px] font-heading font-bold text-white leading-tight mb-4">
              SWATHI N
            </h1>
            <h2 className="text-lg md:text-2xl text-muted font-medium mb-6">
              Final-year B.Tech, Artificial Intelligence & Data Science
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-6">
              {["AI Engineer", "Machine Learning Engineer", "Agentic AI Developer"].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm font-medium text-white/80 select-none">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm md:text-lg text-muted max-w-xl leading-relaxed">
              I build intelligent AI systems that automate complex workflows, solve real-world problems, and transform ideas into impactful products.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
          >
            <MagneticButton className="w-full sm:w-auto min-h-[44px]">
              <a href="#projects" className="w-full text-center block leading-[44px] sm:leading-none">View Projects</a>
            </MagneticButton>
            <MagneticButton variant="outline" className="w-full sm:w-auto min-h-[44px]">
              <a href="/resume.pdf" download className="flex items-center justify-center gap-2 w-full leading-[44px] sm:leading-none">
                <Download className="w-4 h-4" /> Download Resume
              </a>
            </MagneticButton>
            <div className="flex items-center justify-center gap-5 pt-2 sm:pt-0 sm:ml-4">
              <a href="https://github.com/swathinadraj08-commits" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/swathi-n-024888333" target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side - 3D Portrait */}
        <div className="relative h-[320px] sm:h-[420px] lg:h-[600px] w-full block">
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            {/* Portrait Image (scaled responsively) */}
            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-accent-blue/20 relative z-20 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
              <img 
                src="/portrait.jpg" 
                alt="Swathi N - Portrait" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Glowing background behind portrait */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-accent-blue/10 rounded-full blur-[100px] sm:blur-[120px] z-0" />
          </div>

          {/* Three.js Canvas - scaled Z distance on mobile to reduce orbits */}
          <div className="absolute inset-0 z-20">
            <Canvas camera={{ position: [0, 0, isMobile ? 6.2 : 5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <HeroRings />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
