"use client";

import { useState } from "react";
import { X, Play, Loader2, Code, Terminal, Server } from "lucide-react";

export default function LiveDemoModal({ title, type }: { title: string, type: "service" | "architecture" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  const handleOpen = () => {
    setIsOpen(true);
    setIsInitializing(true);
    setTimeout(() => setIsInitializing(false), 2500); // Simulate boot up
  };

  return (
    <>
      <button 
        onClick={handleOpen}
        className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all shadow-[0_0_10px_rgba(0,0,0,0.2)] ${
          type === "service" 
            ? "bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-white" 
            : "bg-fuchsia-500/10 border border-fuchsia-500/30 text-fuchsia-400 hover:bg-fuchsia-500 hover:text-white"
        }`}
      >
        {type === "service" ? "Launch Interactive Demo" : "Enter Live View"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-4xl bg-[#050014] border border-white/20 rounded-2xl shadow-[0_0_80px_rgba(34,211,238,0.2)] overflow-hidden flex flex-col h-[80vh]">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0816] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer hover:bg-red-400" onClick={() => setIsOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-xs font-mono text-[#94a3b8] font-bold uppercase tracking-widest hidden md:block">specAI // DEMO ENVIRONMENT // {title}</div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white transition-colors bg-white/5 p-1 rounded-md">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 relative flex bg-[#02000a] overflow-hidden">
              {isInitializing ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-cyan-400">
                  <Loader2 className="w-12 h-12 animate-spin mb-4" />
                  <h3 className="font-mono text-sm tracking-widest uppercase">Provisioning secure container...</h3>
                </div>
              ) : (
                <div className="flex w-full h-full">
                  {/* Sidebar */}
                  <div className="w-16 md:w-48 border-r border-white/10 bg-[#050014] flex flex-col p-2 md:p-4 gap-4">
                    <div className="flex items-center gap-2 text-cyan-400 p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20 cursor-pointer">
                      <Terminal className="w-5 h-5 shrink-0" />
                      <span className="hidden md:block text-[10px] uppercase font-bold tracking-widest">Logs</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#94a3b8] hover:text-white p-2 rounded-lg cursor-pointer transition-colors">
                      <Server className="w-5 h-5 shrink-0" />
                      <span className="hidden md:block text-[10px] uppercase font-bold tracking-widest">Nodes</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#94a3b8] hover:text-white p-2 rounded-lg cursor-pointer transition-colors">
                      <Code className="w-5 h-5 shrink-0" />
                      <span className="hidden md:block text-[10px] uppercase font-bold tracking-widest">Config</span>
                    </div>
                  </div>
                  
                  {/* Main Terminal View */}
                  <div className="flex-1 p-4 md:p-6 font-mono text-[10px] md:text-sm overflow-y-auto text-emerald-400 relative">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay hidden md:block" />
                    
                    <div className="text-[#94a3b8] mb-4">
                       &gt; specAI Containerized Demo Environment [Version 24.1.0]<br/>
                       &gt; Connected to dedicated edge node for {title}
                    </div>

                    <div className="text-cyan-400 mb-2">&gt; [SYS] Incoming mock data stream established.</div>
                    
                    <div className="flex flex-col gap-2 relative z-10 w-full">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                          <span className="text-fuchsia-400">[SERVER]</span> Processing payload packet {Math.floor(i * 123 + 42)}... OK
                        </div>
                      ))}
                      <div className="mt-4 p-4 md:p-6 border border-white/10 bg-white/5 rounded-xl text-white font-sans flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                           <div className="text-base md:text-lg font-bold font-outfit text-white">Interactive Module Loaded</div>
                           <div className="text-xs text-[#94a3b8] mt-1 leading-relaxed max-w-sm">Live demonstration is operating correctly. In a real deployment, this panel renders the specific customized dashboard UI designed for your firm.</div>
                        </div>
                        <Play className="w-8 h-8 text-fuchsia-400 shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
