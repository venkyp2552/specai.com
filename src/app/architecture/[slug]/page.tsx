import Link from "next/link";
import { ArrowLeft, ArrowRight, GitMerge, FileCode, CheckCircle, Database } from "lucide-react";

export default async function ArchitectureOverview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <main className="min-h-screen bg-[#050014] text-white font-sans selection:bg-fuchsia-500/50 p-6 lg:p-16">
      <div className="max-w-[85rem] mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Command Center
        </Link>
        
        <div className="flex flex-col gap-4 mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-xs font-bold text-fuchsia-300 w-max uppercase tracking-widest">
            High Level Design (HLD)
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-outfit uppercase tracking-tighter">
            {slug.replace(/-/g, " ")}
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-3xl leading-relaxed mt-4 font-light">
            Deep dive into the structural pipelines, component architectures, and data flow of the {slug} system. 
            This document outlines the strict engineering specifications and infrastructure layers validating the protocol.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px]" />
              <h2 className="text-2xl font-bold font-outfit mb-6 text-white border-b border-white/10 pb-4">Architecture Overview</h2>
              <p className="text-[#cbd5e1] leading-relaxed mb-6">
                The core engine relies on an asynchronous event-driven layout utilizing decoupled micro-agents. 
                Ingestion pipelines directly format the structured logs before securely passing to the temporal rollback matrices, ensuring zero data fault states.
              </p>
              
              {/* Fake Architecture Diagram block */}
              <div className="w-full h-80 rounded-xl bg-[#02000a] border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                <div className="flex items-center gap-4 text-cyan-500 font-mono text-sm opacity-80">
                  <span className="p-4 border border-cyan-500/50 rounded-lg bg-cyan-500/10">[ Event Gateway ]</span>
                  <ArrowRight className="w-5 h-5 text-fuchsia-500" />
                  <span className="p-4 border border-fuchsia-500/50 rounded-lg bg-fuchsia-500/10">[ Agent Matrix ]</span>
                  <ArrowRight className="w-5 h-5 text-indigo-500" />
                  <span className="p-4 border border-indigo-500/50 rounded-lg bg-indigo-500/10">[ Data Core ]</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
              <h2 className="text-2xl font-bold font-outfit mb-6 text-white border-b border-white/10 pb-4">Core Structural Components</h2>
              <ul className="space-y-6 text-[#cbd5e1]">
                <li className="flex gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 h-max"><GitMerge className="w-5 h-5 text-cyan-400" /></div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Event Bus</h3>
                    <p className="text-sm">Orchestrating Kafka parallel clusters handling 100k+ transactions per second in the test-net environment.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 h-max"><Database className="w-5 h-5 text-fuchsia-400" /></div>
                  <div>
                    <h3 className="font-bold text-white text-lg">Temporal Storage Nodes</h3>
                    <p className="text-sm">Read-heavy NoSQL structures dynamically creating sharded data links to the primary Graph Network.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#02000a] to-[#0c0a20] shadow-xl">
              <h3 className="font-bold font-outfit text-xl mb-6 text-white">Technological Stack</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8] font-mono text-xs uppercase tracking-widest">Frontend</span>
                  <span className="text-white font-bold text-sm">Next.js 15, React 19</span>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8] font-mono text-xs uppercase tracking-widest">Backend Systems</span>
                  <span className="text-cyan-400 font-bold text-sm">Node.js, Rust</span>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8] font-mono text-xs uppercase tracking-widest">Database</span>
                  <span className="text-fuchsia-400 font-bold text-sm">PostgreSQL, Redis</span>
                </div>
                <div className="w-full h-px bg-white/10" />
                <div className="flex items-center justify-between">
                  <span className="text-[#94a3b8] font-mono text-xs uppercase tracking-widest">Infrastructure</span>
                  <span className="text-indigo-400 font-bold text-sm">Docker, Kubernetes</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 rounded-3xl border border-white/10 bg-[#050014]">
              <h3 className="font-bold font-outfit text-xl mb-6 text-white">Security Integrity</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Audited Smart Contracts
                </li>
                <li className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> Pen-tested Endpoints
                </li>
                <li className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                  <CheckCircle className="w-4 h-4 text-emerald-400" /> AES-256 Encryption
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
