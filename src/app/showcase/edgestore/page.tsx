import Link from "next/link";
import { ArrowLeft, Zap, Shield, Cpu, Server, ArrowRight, Code2 } from "lucide-react";

export const metadata = {
  title: "EdgeStore Matrix | AI Commerce",
  description: "Live demonstration of a static edge AI architecture."
};

export default function EdgeStoreDemo() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-black tracking-tight text-xl">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
               <Zap className="w-5 h-5 fill-current" />
            </div>
            EdgeStore AI
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold text-slate-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Products</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Engine</a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/services/static-websites" className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-4 h-4" /> Return to specAI
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 md:px-6 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-full z-0 pointer-events-none hidden md:block" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" /> Live Implementation Demo
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 text-slate-900">
            Absolute Speed. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Zero Latency.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            This is a functional static website built to demonstrate raw edge-rendering speeds. It represents the highly scalable frontend architectures deployed across 300+ global CDNs by specAI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/20 flex items-center gap-2 w-full sm:w-auto justify-center">
              Start Shopping <ArrowRight className="w-4 h-4" />
            </button>
            <a href="https://github.com/venkyp2552" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2 w-full sm:w-auto justify-center">
              <Code2 className="w-5 h-5 text-slate-400" /> View Source Code
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white border-y border-slate-200 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900">Under The Hood</h2>
            <p className="text-slate-500 font-medium text-lg">How specAI architects these static implementations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                 <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Pre-rendered HTML</h3>
              <p className="text-slate-600 leading-relaxed">
                By generating data at build-time, we eliminate database query lag entirely. HTML payloads are executed instantly and served directly to the client screen in milliseconds.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                 <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Global Edge Network</h3>
              <p className="text-slate-600 leading-relaxed">
                Assets are pushed to server nodes in Tokyo, New York, and London simultaneously. Regardless of where the user is, they connect to a server right next door.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6 shadow-sm">
                 <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">Unhackable Surface</h3>
              <p className="text-slate-600 leading-relaxed">
                Without a live database attached directly to the frontend, static sites offer a nearly impenetrable security perimeter against SQL injections and API exploits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-400 text-sm text-center font-medium">
        <p>Built exclusively by venkyp2552. Hosted for specAI Technical Demonstrations.</p>
        <p className="mt-2 text-slate-500 text-xs">This is a demonstration environment meant to validate Static Website architectural capability.</p>
      </footer>
    </main>
  );
}
