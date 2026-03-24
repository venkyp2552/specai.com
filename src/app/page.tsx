"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Box, Cpu, ChevronRight, Fingerprint, Globe, Layers, Link as LinkIcon, Network, ShieldCheck, Zap, MessageSquare, Terminal, RefreshCw, Workflow, Aperture, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// Disable SSR for 3D Canvas
const CanvasBackground = dynamic(() => import("@/components/CanvasBackground"), { ssr: false });

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    rotateX: 0,
    transition: { type: "spring", stiffness: 45, damping: 15, mass: 1.2 } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const SERVICES = [
  { 
    name: "Static Websites", 
    icon: <Box className="w-6 h-6 text-fuchsia-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-fuchsia-500/50"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    )
  },
  { 
    name: "Dynamic Web Apps", 
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden flex flex-col justify-around py-4 z-0">
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2 + i * 0.5, ease: "linear" }} className="h-[2px] w-2/3 bg-cyan-500/80 rounded-full" />
        ))}
      </div>
    )
  },
  { 
    name: "Full Stack Systems", 
    icon: <Aperture className="w-6 h-6 text-indigo-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="w-32 h-32 border border-indigo-500/60 border-dashed rounded-full absolute" />
        <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className="w-24 h-24 border border-indigo-400/50 rounded-full absolute" />
      </div>
    )
  },
  { 
    name: "AI Agents", 
    icon: <Bot className="w-6 h-6 text-fuchsia-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden z-0">
        {[...Array(5)].map((_, i) => {
          const xPositions = [ ["0%", "80%", "0%"], ["100%", "20%", "100%"], ["50%", "10%", "50%"], ["20%", "90%", "20%"], ["80%", "0%", "80%"] ];
          const yPositions = [ ["0%", "100%", "0%"], ["20%", "80%", "20%"], ["100%", "0%", "100%"], ["50%", "50%", "50%"], ["80%", "20%", "80%"] ];
          return (
            <motion.div key={i} animate={{ left: xPositions[i], top: yPositions[i] }} transition={{ repeat: Infinity, duration: 4 + i, ease: "easeInOut" }} className="w-1 h-1 bg-fuchsia-400 rounded-full absolute" style={{ boxShadow: "0 0 10px 2px rgba(217,70,239,0.8)" }} />
          );
        })}
      </div>
    )
  },
  { 
    name: "Chatbots", 
    icon: <MessageSquare className="w-6 h-6 text-cyan-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none flex items-center justify-center gap-3 z-0 translate-y-8">
        {[0, 1, 2].map((i) => (
          <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.3, ease: "easeInOut" }} className="w-2 h-2 bg-cyan-400 rounded-full" />
        ))}
      </div>
    )
  },
  { 
    name: "RAG Systems", 
    icon: <DatabaseIcon />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div key={i} style={{ left: `${15 * i + 10}%` }} animate={{ top: ["-20%", "120%"] }} transition={{ repeat: Infinity, duration: 2 + (i % 3), ease: "linear", delay: i * 0.4 }} className="w-[1px] h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent absolute" />
        ))}
      </div>
    )
  },
  { 
    name: "n8n Automations", 
    icon: <Workflow className="w-6 h-6 text-emerald-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" className="text-emerald-500 absolute scale-150">
          <motion.path d="M-10 50 Q 30 20, 50 50 T 110 50" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" animate={{ strokeDashoffset: [0, 20] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} />
          <motion.path d="M-10 30 Q 30 60, 50 30 T 110 30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,6" animate={{ strokeDashoffset: [20, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "linear" }} />
        </svg>
      </div>
    )
  },
  { 
    name: "Custom AI Solutions", 
    icon: <Aperture className="w-6 h-6 text-purple-400" />,
    bgVisual: (
      <div className="absolute inset-0 opacity-10 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none overflow-hidden flex items-center justify-center z-0">
        <motion.div animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.7, 0.3], rotate: [0, 90, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="w-20 h-20 bg-gradient-to-tr from-purple-500/20 to-fuchsia-500/20 rounded-lg blur-md absolute" />
        <motion.div animate={{ scale: [1.5, 1, 1.5], opacity: [0.5, 0.2, 0.5], rotate: [0, -90, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="w-16 h-16 border border-purple-500/30 rounded-full blur-sm absolute" />
      </div>
    )
  },
];

const PROJECTS = [
  {
    title: "OracleNet: Multi-Agent DeFi Intel",
    slug: "oraclenet-defi-intel",
    desc: "Autonomous swarm intelligence auditing cross-chain smart contract vulnerabilities using multi-agent RL prior to malicious exploits.",
    icon: <DatabaseIcon />,
    tag: "Security Architecture",
  },
  {
    title: "NeuroGraph: Unstructured to Enterprise",
    slug: "neurograph-enterprise",
    desc: "A conceptual bridge interpreting unstructured thought/text data into strict relational enterprise architectures instantly.",
    icon: <BrainIcon />,
    tag: "Data Pipeline",
  },
  {
    title: "OmniRAG: Predictive Context Engine",
    slug: "omnirag-engine",
    desc: "Zero-latency predictive RAG that pre-fetches and generates context buffers before end-users finish typing the prompt query.",
    icon: <SearchIcon />,
    tag: "LLM Infrastructure",
  },
  {
    title: "Synthetica: Autonomous BI OS",
    slug: "synthetica-os",
    desc: "An AI system acting as a micro-company CEO, autonomously managing marketing, triage, and dev ops with human-in-the-loop oversight.",
    icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    tag: "Business Automation",
  },
  {
    title: "Chronosolver: Temporal Rollback",
    slug: "chronosolver-rollback",
    desc: "Event-driven architecture simulating parallel business path outcomes before actually executing irreversible enterprise API calls.",
    icon: <ClockIcon />,
    tag: "System Engineering",
  },
  {
    title: "HyperTwin: Defensive AI Networking",
    slug: "hypertwin-networking",
    desc: "Dynamic 1:1 digital twin of corporate networks automatically training defensive AI against simulated zero-day exploits 24/7.",
    icon: <Network className="w-6 h-6 text-purple-400" />,
    tag: "Cybersecurity",
  },
  {
    title: "QuantumFlow: Probabilistic n8n",
    slug: "quantumflow-n8n",
    desc: "Quantum-state inspired workflow automation instantly re-routing API gateway failures to self-healing fallback sub-networks.",
    icon: <Globe className="w-6 h-6 text-cyan-400" />,
    tag: "Workflow Orchestration",
  },
  {
    title: "Somnium: Generative UI Matrix",
    slug: "somnium-ui-matrix",
    desc: "React/Next.js environment rendering bespoke interface topologies matching enterprise users' live cognitive load metrics.",
    icon: <Layers className="w-6 h-6 text-emerald-400" />,
    tag: "Frontend Architecture",
  },
  {
    title: "EtherGuard: Flash Counter-Exploits",
    slug: "etherguard-exploits",
    desc: "The first AI-driven agent running in the mempool to execute counter-exploits autonomously within milliseconds of detecting DeFi drainers.",
    icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
    tag: "Blockchain",
  }
];

const TESTIMONIALS = [
  {
    quote: "specAI restructured our fragmented LLM workflows into a singular, highly cohesive architecture. They operate at the boundary of what's currently theoretically possible.",
    author: "Elena Vasquez",
    role: "CTO, Finova Tech",
  },
  {
    quote: "Their approach to smart contract vulnerability auditing saved us from deploying a critical reentrancy vector. We don't deploy anything without their pre-flight validation.",
    author: "Marcus Chen",
    role: "Lead Engineer, DefiMatrix",
  },
  {
    quote: "Working with Venkaiah and the specAI platform transformed how we think about automation. Our entire ops pipeline is now self-healing.",
    author: "Sarah Jenkins",
    role: "VP of Engineering, ScaleOps",
  },
];

export default function Home() {
  const [formStatus, setFormStatus] = useState("idle");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Free email forwarding API with zero backend config required for Vercel.
      const response = await fetch("https://formsubmit.co/ajax/protohash01@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...data,
          _subject: "New specAI Engagement Request",
          _template: "table" // Styles the recipient email to look clean
        })
      });

      if (response.ok) {
        setFormStatus("success");
      } else {
        setFormStatus("idle");
        alert("Failed to send the request. Please try again.");
      }
    } catch (err) {
      setFormStatus("idle");
      alert("Network error: Please try submitting again.");
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen bg-[#050014] text-white font-sans selection:bg-fuchsia-500/50 overflow-hidden relative">
      
      {/* 3D Interactive Background with Smooth Parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 pointer-events-none z-0">
        <CanvasBackground />
      </motion.div>

      {/* Global Glowing Ambience animated */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div animate={{ rotate: 360, scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-700/20 blur-[160px] rounded-full mix-blend-screen" />
        <motion.div animate={{ rotate: -360, scale: [1, 1.5, 1] }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-fuchsia-700/20 blur-[160px] rounded-full mix-blend-screen" />
        <motion.div animate={{ rotate: 180, x: [-100, 100, -100], y: [-50, 50, -50] }} transition={{ repeat: Infinity, duration: 30, ease: "easeInOut" }} className="absolute top-[20%] right-[20%] w-[40vw] h-[40vw] bg-cyan-500/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* Navigation - Rich Elegant Style */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050014]/60 backdrop-blur-2xl">
        <div className="max-w-[85rem] mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 cursor-pointer group relative z-[60]">
            <AnimatedLogo />
            <span className="text-2xl font-black font-outfit tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
              specAI
            </span>
          </a>
          <div className="hidden lg:flex gap-8 xl:gap-12 text-[10px] xl:text-xs font-bold uppercase tracking-widest text-[#94a3b8]">
            <a href="#services" className="hover:text-cyan-400 transition-colors drop-shadow-md">Services</a>
            <a href="#projects" className="hover:text-fuchsia-400 transition-colors drop-shadow-md">Innovations</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors drop-shadow-md">Clients</a>
            <a href="#about" className="hover:text-purple-400 transition-colors drop-shadow-md">About Firm</a>
          </div>
          <a href="#contact" className="hidden lg:flex flex-row items-center gap-2 px-6 py-2.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 hover:bg-fuchsia-500 text-white hover:shadow-[0_0_30px_rgba(217,70,239,0.8)] text-sm font-bold transition-all backdrop-blur-md">
            Engage Firm <ArrowRight className="w-4 h-4" />
          </a>

          <button 
            className="lg:hidden relative z-[60] p-2 text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <motion.div 
          initial={false}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, pointerEvents: isMobileMenuOpen ? "auto" : "none" }}
          className="fixed inset-0 bg-[#050014]/95 backdrop-blur-3xl z-50 flex flex-col items-center justify-center gap-8 lg:hidden h-screen"
        >
          <div className="flex flex-col items-center gap-8 text-lg font-black uppercase tracking-widest text-white">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-fuchsia-400 transition-colors">Innovations</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-cyan-400 transition-colors">Clients</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple-400 transition-colors">About Firm</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-6 px-6 py-3 text-base md:mt-8 md:px-8 md:py-4 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/20 hover:bg-fuchsia-500 text-white shadow-[0_0_30px_rgba(217,70,239,0.3)] transition-all flex items-center gap-2">
              Engage Firm <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </motion.div>
      </nav>

      {/* Seamless scrolling sections using flex column with minimal padding gaps */}
      <div className="relative z-10 flex flex-col pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center w-full max-w-[85rem] mx-auto px-6 lg:px-8 border-none">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl relative z-10 lg:pr-10">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              SaaS & Enterprise 3D Cognitive Systems
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-[3.5rem] sm:text-[4.5rem] md:text-[5.5rem] font-black font-outfit tracking-tighter leading-[1] md:leading-[0.9] mb-6 md:mb-8 drop-shadow-2xl"
            >
              Architecting <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_30px_rgba(217,70,239,0.4)]">
                The AI Frontier.
              </span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-[#cbd5e1] max-w-2xl mb-12 font-light leading-relaxed drop-shadow-md">
              specAI operates at the bleeding edge of corporate automation and artificial intelligence infrastructure. We build 0-to-1 solutions merging highly robust production architecture with vibrant elegant aesthetics.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 md:gap-5">
              <a href="#services" className="px-6 py-4 md:px-8 md:py-5 text-sm md:text-base rounded-full bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-black hover:from-fuchsia-500 hover:to-indigo-500 hover:shadow-[0_0_40px_rgba(217,70,239,0.6)] transition-all flex items-center justify-center gap-3">
                Explore Our Offerings
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 hover:translate-x-2 transition-transform drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="w-full relative min-h-[60vh] flex flex-col justify-center border-t border-white/10 bg-gradient-to-br from-[#050014] via-[#090518] to-[#0c0a20] pt-24 pb-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Animated Background Context */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
            <div className="absolute w-[800px] h-[800px] border border-cyan-500/20 rounded-full animate-[spin_60s_linear_infinite] border-dashed" />
            <div className="absolute w-[600px] h-[600px] border border-fuchsia-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse] border-dashed" />
            <div className="absolute w-[400px] h-[400px] border border-indigo-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
          </div>
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] mix-blend-screen pointer-events-none" />
          <div className="absolute left-[10%] top-1/4 w-[400px] h-[400px] bg-fuchsia-600/10 blur-[150px] mix-blend-screen pointer-events-none" />
          
          <div className="max-w-[85rem] mx-auto px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="mb-16 text-center"
            >
              <motion.h2 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">What We Offer</motion.h2>
              <motion.div variants={fadeInUp} className="text-5xl md:text-7xl font-black font-outfit text-white drop-shadow-xl inline-block relative">
                Premium Services
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="absolute -right-16 -top-8 text-fuchsia-500/50 hidden md:block"
                >
                  <Cpu className="w-12 h-12" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            >
              {SERVICES.map((srv, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 flex flex-col items-center justify-center text-center backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-fuchsia-500/50 hover:shadow-[0_0_40px_rgba(217,70,239,0.3)] transition-all cursor-pointer group relative overflow-hidden min-h-[160px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                  
                  {srv.bgVisual}

                  <motion.div 
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 2 + (idx % 3) * 0.5, ease: "easeInOut" }}
                    className="w-16 h-16 rounded-full bg-black/50 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_rgba(217,70,239,0.4)]"
                  >
                    {srv.icon}
                  </motion.div>
                  
                  <h3 className="text-white font-bold font-outfit text-lg relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-fuchsia-300 transition-all">{srv.name}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 9 UNIQUE PROJECTS SECTION */}
        <section id="projects" className="w-full relative min-h-screen flex flex-col justify-center border-t border-white/5 bg-[#050014] pt-24 pb-24">
          <div className="max-w-[85rem] mx-auto px-6 lg:px-8 relative z-10 w-full">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <motion.h2 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-fuchsia-400 mb-3 drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">Proprietary Innovations</motion.h2>
                <motion.div variants={fadeInUp} className="text-5xl md:text-7xl font-black font-outfit max-w-3xl leading-none drop-shadow-xl text-white">
                  9 Revolutionary Architectures.
                </motion.div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROJECTS.map((proj, idx) => (
                <Link href={`/architecture/${proj.slug}`} key={idx}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: idx * 0.08, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.03, rotate: -1 }}
                    className="p-8 h-full rounded-2xl border border-blue-500/20 bg-gradient-to-b from-[#0c0a20]/90 to-[#050014]/90 hover:bg-[#120f2e] hover:border-fuchsia-500/60 transition-all duration-300 group relative overflow-hidden backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] cursor-pointer"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-[50px] group-hover:bg-cyan-500/30 transition-colors duration-700" />
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                        {proj.icon}
                      </div>
                      <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1.5 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        {proj.tag}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black font-outfit mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-fuchsia-300 transition-all">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#94a3b8] leading-relaxed mb-8 font-medium">
                      {proj.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-fuchsia-400 group-hover:text-cyan-400 transition-colors w-max drop-shadow-md">
                      View Architecture <ChevronRight className="w-4 h-4 translate-y-[1px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" className="w-full relative border-t border-white/5 bg-gradient-to-b from-[#050014] to-[#0c0a20] pt-24 pb-24 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] z-20">
          <div className="max-w-[85rem] mx-auto px-6 lg:px-8 w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="text-center mb-16">
              <motion.h2 variants={fadeInUp} className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-3 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">Enterprise Endorsements</motion.h2>
              <motion.div variants={fadeInUp} className="text-5xl md:text-6xl font-black font-outfit text-white">
                Trusted by Forward-Thinking Firms
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((test, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, type: "spring" }}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="text-7xl font-serif text-cyan-500/20 absolute -top-2 left-6 group-hover:text-fuchsia-500/30 transition-colors">"</div>
                  <p className="text-[#cbd5e1] text-lg leading-relaxed relative z-10 mb-10 pt-6 font-medium italic">
                    {test.quote}
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-fuchsia-600 border border-white/20 flex items-center justify-center text-2xl font-black text-white shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-xl text-white">{test.author}</div>
                      <div className="text-xs text-fuchsia-400 font-black uppercase tracking-widest mt-1">{test.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FULL ABOUT SECTION WITH FOUNDER DETAILS LAST */}
        <section id="about" className="w-full relative border-t border-white/5 bg-[#050014] pt-24 pb-24">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-fuchsia-600/10 blur-[150px] mix-blend-screen pointer-events-none" />
          <div className="max-w-[85rem] mx-auto px-6 lg:px-8 relative z-10 w-full">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-20 text-center max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs font-bold text-fuchsia-300 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                About The Firm
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-black font-outfit mb-10 text-white tracking-tighter">
                Our Vision & Methodology.
              </motion.h2>

              <div className="text-left space-y-12">
                
                {/* Differentiation */}
                <motion.div variants={fadeInUp} className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#02000a] to-[#0c0a20] shadow-xl">
                  <h3 className="text-3xl font-black font-outfit mb-4 text-fuchsia-400 drop-shadow-md">The AI-First Distinction</h3>
                  <p className="text-lg text-[#cbd5e1] leading-relaxed font-light">
                    Unlike traditional software agencies attempting to strap legacy models to modern workflows, specAI is fundamentally AI-first. 
                    We do not build a system and then figure out how to automate it. We design autonomous architecture backwards from the cognitive requirements of the agent network. 
                    This ensures absolute scalability and zero manual bottlenecking.
                  </p>
                </motion.div>

                {/* Technical Expertise & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <motion.div variants={fadeInUp} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h3 className="text-2xl font-black font-outfit mb-4 text-cyan-400 drop-shadow-md">Technical Expertise</h3>
                    <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Our engineering division specializes in orchestrating highly resilient asynchronous infrastructures. We utilize decoupled micro-agents running via event-driven protocols (Apache Kafka, Redis Pub/Sub, n8n) perfectly synced to custom Next.js frontends and Rust/Node.js backend cores. 
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-xs font-bold text-white">Full Stack Engineering</span>
                      <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-xs font-bold text-white">Smart Contract Security</span>
                      <span className="px-3 py-1 bg-black/50 border border-white/10 rounded-md text-xs font-bold text-white">LLM Fine-tuning</span>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={fadeInUp} className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
                    <h3 className="text-2xl font-black font-outfit mb-4 text-indigo-400 drop-shadow-md">The Grand Vision</h3>
                    <p className="text-[#94a3b8] leading-relaxed">
                      Our vision is to empower global corporate clients with uncompromising, decentralized structural security and autonomous AI ecosystems. We aim to propel enterprises past legacy bottlenecks by integrating real-time telemetry, predictive RAG modeling, and rigorous smart contract auditing—establishing an absolute standard of trust, scalability, and relentless innovation.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* FOUNDER BLOCK AT THE END OF ABOUT SECTION */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
              className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 p-8 sm:p-12 lg:p-16 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-700"
            >
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 blur-[120px] rounded-full group-hover:bg-fuchsia-600/10 transition-colors duration-1000" />
              
              <div className="w-full lg:w-1/3 shrink-0 flex justify-center lg:justify-start">
                <motion.div variants={fadeInUp} className="w-64 h-64 md:w-80 md:h-80 rounded-[3rem] p-1 bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-indigo-600 shadow-[0_0_50px_rgba(217,70,239,0.3)] relative group-hover:shadow-[0_0_80px_rgba(34,211,238,0.4)] transition-all duration-700">
                  <div className="w-full h-full rounded-[2.8rem] bg-[#050014] overflow-hidden flex flex-col items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-900/40 to-transparent" />
                    <UserIcon />
                  </div>
                </motion.div>
              </div>

              <div className="w-full lg:w-2/3 relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs font-bold text-fuchsia-300 mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                  Founder & Chief Architect
                </motion.div>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-7xl font-black font-outfit mb-4 text-white tracking-tighter">
                  Venkaiah P.
                </motion.h2>
                <motion.h3 variants={fadeInUp} className="text-lg sm:text-xl md:text-2xl text-cyan-400 mb-8 font-bold font-outfit drop-shadow-md">
                  Smart Contract Security Auditor & AI Systems Engineer
                </motion.h3>
                <motion.div variants={fadeInUp} className="text-sm md:text-base text-[#cbd5e1] mb-10 leading-relaxed font-light space-y-4">
                  <p>
                    Complementing decentralized security expertise, I design and develop secure AI-powered systems and Agents (Chatbots), focusing on Retrieval-Augmented Generation (RAG) and intelligent knowledge architectures. My multidisciplinary capability enables the development of secure, scalable, and domain-aware AI solutions.
                  </p>
                  <p>
                    As a Smart Contract Security Auditor, I specialize in vulnerability detection, exploit simulation, and protocol hardening across EVM-based ecosystems—identifying adversarial attack surfaces including reentrancy vectors, oracle manipulation risks, economic exploits, and invariant violations.
                  </p>
                  <p>
                    Further extending my expertise, I have developed data-driven interfaces for IoT-based smart building systems (BMS), integrating devices, sensors, and real-time telemetry. This includes designing responsive dashboards utilizing Apache ECharts and optimizing UI workflows for high-frequency data operations. Additionally, I hold experience in Data Science coaching, delivering structured technical education across machine learning and generative AI domains.
                  </p>
                </motion.div>
                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
                  <a href="https://www.linkedin.com/in/venkaiah01" target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-xl bg-[#0A66C2]/10 border border-[#0A66C2]/30 text-white font-bold hover:bg-[#0A66C2] transition-colors flex items-center justify-center gap-3">
                    <Linkedin className="w-5 h-5" /> LinkedIn Profile
                  </a>
                  <a href="https://github.com/venkyp2552?tab=repositories" target="_blank" rel="noopener noreferrer" className="px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-3">
                    <Github className="w-5 h-5" /> GitHub Repositories
                  </a>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="w-full relative border-t border-white/5 bg-gradient-to-b from-[#050014] to-[#0c0a20] pt-24 pb-20 z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[150px] mix-blend-screen pointer-events-none" />
          
          <div className="max-w-[85rem] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-lg">
              <motion.h2 variants={fadeInUp} className="text-6xl font-black font-outfit mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white to-[#64748b] leading-tight">Initiate <br/>Engagements.</motion.h2>
              <motion.p variants={fadeInUp} className="text-[#cbd5e1] text-xl mb-12 leading-relaxed font-light">
                Our capacity for onboarding new enterprise architecture projects is highly limited. Submit your executive requirements below to schedule a technical review.
              </motion.p>
              <motion.div variants={fadeInUp} className="space-y-8 text-[#94a3b8]">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <Fingerprint className="w-7 h-7 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl mb-1">Strict Confidentiality</div>
                    <div className="text-sm font-medium">NDAs signed prior to deep-dives.</div>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                    <Zap className="w-7 h-7 text-fuchsia-400" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl mb-1">Zero-Latency Iteration</div>
                    <div className="text-sm font-medium">We prototype fast, fail safe, build solid.</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-[#0c0a20]/80 backdrop-blur-3xl p-12 rounded-[2.5rem] border border-fuchsia-500/30 shadow-[0_0_80px_rgba(217,70,239,0.15)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/20 blur-[120px] pointer-events-none" />
              
              <form onSubmit={handleContactSubmit} className="relative z-10 flex flex-col gap-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">Name</label>
                    <input required name="name" type="text" className="w-full bg-[#050014]/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all shadow-inner" placeholder="Jane Doe" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-fuchsia-400 drop-shadow-[0_0_5px_rgba(217,70,239,0.5)]">Company</label>
                    <input required name="company" type="text" className="w-full bg-[#050014]/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500 transition-all shadow-inner" placeholder="Enterprise XYZ" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-indigo-400 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]">Corporate Email</label>
                  <input required name="email" type="email" className="w-full bg-[#050014]/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner" placeholder="jane@enterprise.com" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#94a3b8] drop-shadow-sm">Project Executive Summary</label>
                  <textarea required name="summary" rows={4} className="w-full bg-[#050014]/50 border border-white/10 rounded-2xl px-6 py-4 text-white font-medium focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all resize-none shadow-inner" placeholder="We are looking to implement..." />
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting" || formStatus === "success"}
                  className="w-full mt-4 py-4 md:py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 text-white font-black text-base md:text-xl hover:shadow-[0_0_40px_rgba(217,70,239,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    {formStatus === "idle" && "Submit Engagement Request"}
                    {formStatus === "submitting" && <div className="w-7 h-7 border-4 border-white/30 border-t-white rounded-full animate-spin" />}
                    {formStatus === "success" && "Request Sent Successfully ✓"}
                  </span>
                </button>
              </form>
            </motion.div>

          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/5 bg-[#02000a] pt-20 pb-10 z-20 relative">
          <div className="max-w-[85rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-16 w-full">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-8 cursor-pointer group w-max">
                <AnimatedLogo />
                <span className="text-3xl font-black font-outfit tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                  specAI
                </span>
              </div>
              <p className="text-[#64748b] max-w-sm font-medium text-lg leading-relaxed">
                Elite systems engineering and cognitive 3D architecture for forward-thinking enterprises.
              </p>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 font-outfit text-xl">Sitemap</h4>
              <div className="flex flex-col gap-4 text-[#94a3b8] font-bold text-sm">
                <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
                <a href="#projects" className="hover:text-fuchsia-400 transition-colors">Innovations</a>
                <a href="#about" className="hover:text-purple-400 transition-colors">About Firm</a>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Engage</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 font-outfit text-xl">Legal</h4>
              <div className="flex flex-col gap-4 text-[#94a3b8] font-bold text-sm">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-fuchsia-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-indigo-400 transition-colors">NDA Templates</a>
              </div>
            </div>
          </div>
          <div className="max-w-[85rem] mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#475569] font-black uppercase tracking-widest pt-10 border-t border-white/5 w-full">
            <div>© {new Date().getFullYear()} specAI Engineering Ltd.</div>
            <div className="flex gap-8 mt-6 md:mt-0 text-fuchsia-500/50">
              <span className="hover:text-fuchsia-400 transition-colors cursor-pointer">San Francisco</span>
              <span className="hover:text-cyan-400 transition-colors cursor-pointer">Dubai</span>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}

// Highly stylized SVG fallback icons retaining the vibrant theme.
function DatabaseIcon() {
  return <svg className="w-8 h-8 text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>;
}
function BrainIcon() {
  return <svg className="w-8 h-8 text-cyan-400 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
}
function SearchIcon() {
  return <svg className="w-8 h-8 text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
}
function ClockIcon() {
  return <svg className="w-8 h-8 text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function UserIcon() {
  return <svg className="w-56 h-56 text-[#1e1b4b] mt-10" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>;
}
function Github(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>;
}
function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
}

function AnimatedLogo() {
  return (
    <div className="relative w-10 h-10 flex items-center justify-center perspective-[1000px] group-hover:scale-110 transition-transform duration-500">
      {/* Outer Orbit */}
      <motion.div 
        animate={{ rotateX: 360, rotateZ: 360 }} 
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }} 
        className="absolute inset-0 border-[2px] border-cyan-400/80 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.6)]" 
        style={{ transformStyle: "preserve-3d" }} 
      />
      {/* Inner Orbit */}
      <motion.div 
        animate={{ rotateY: 360, rotateZ: -360 }} 
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }} 
        className="absolute inset-[4px] border-[2px] border-fuchsia-500/80 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.5)]" 
        style={{ transformStyle: "preserve-3d" }} 
      />
      {/* Core Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} 
        className="absolute inset-[8px] bg-indigo-500 rounded-lg blur-[2px]" 
      />
      {/* Central Singularity */}
      <div className="absolute w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_20px_2px_rgba(255,255,255,1)] z-10 animate-pulse" />
    </div>
  );
}
