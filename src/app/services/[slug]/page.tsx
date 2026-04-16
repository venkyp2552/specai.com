import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Code2, Database, Globe, Layers, Server, Zap, Cpu, Network, Workflow, BrainCircuit, Box, Smartphone, ShieldCheck, HardDrive, Infinity } from "lucide-react";
import { notFound } from "next/navigation";

const IconMap: Record<string, any> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  Database, Layers, Server, Globe, Cpu, Network, Workflow, BrainCircuit, Code2, Box, Smartphone, Zap, ShieldCheck, HardDrive, Infinity
};

const SERVICE_DETAILS: Record<string, any> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  "static-websites": {
    title: "Static Websites",
    description: "Ultra-fast, globally distributed edge static architectures delivering sub-100ms load times and absolute SEO perfection.",
    project: {
      name: "EdgeStore Matrix",
      desc: "A headless e-commerce storefront rendering purely static assets on the edge, instantly invalidating cache upon inventory updates.",
    },
    stack: [
      { name: "Framework", value: "Next.js 15 Static / Astro", color: "text-orange-400", desc: "Pre-renders HTML on build-time for absolute zero server execution delay." },
      { name: "Styling", value: "Tailwind CSS + Framer", color: "text-cyan-400", desc: "Utility-first precision styling with hardware-accelerated micro-animations." },
      { name: "Hosting", value: "Cloudflare Pages / Vercel Edge", color: "text-fuchsia-400", desc: "Content instantly replicated across 300+ global edge nodes." },
      { name: "CMS", value: "Sanity / Strapi Headless", color: "text-emerald-400", desc: "Decoupled content management exposing structured JSON." }
    ],
    features: [
      "Zero server execution latency at request time",
      "Global CDN caching for 99.999% availability",
      "Perfect Core Web Vitals out-of-the-box"
    ],
    pipeline: [
      { name: "CMS Update", icon: "Database", color: "cyan" },
      { name: "Static Generation", icon: "Code2", color: "fuchsia" },
      { name: "Edge CDN", icon: "Globe", color: "indigo" }
    ]
  },
  "dynamic-web-apps": {
    title: "Dynamic Web Apps",
    description: "Highly scalable, real-time reactive web applications utilizing server-side rendering and optimistic UI updates.",
    project: {
      name: "OmniDashboard",
      desc: "A financial trading dashboard parsing and displaying real-time websocket data directly onto specialized GPU-accelerated charts.",
    },
    stack: [
      { name: "Frontend", value: "Next.js (App Router), React 19", color: "text-cyan-400", desc: "Server Components blending seamlessly with interactive Client layouts." },
      { name: "State Mgmt", value: "Zustand / TanStack Query", color: "text-emerald-400", desc: "Predictable complex state caching and asynchronous mutations." },
      { name: "Database", value: "Supabase (PostgreSQL)", color: "text-indigo-400", desc: "Robust relational data layers utilizing extreme Row Level Security." },
      { name: "Real-time", value: "Pusher / Postgres CDC", color: "text-fuchsia-400", desc: "Websockets bypassing HTTP overhead for sub-50ms data pushes." }
    ],
    features: [
      "Optimistic UI rendering for zero perceived latency",
      "Role-Based Access Control (RBAC) integrated deeply",
      "Server Actions for secure server-side mutations",
      "Bespoke Customization available for every client"
    ],
    pipeline: [
      { name: "User Action", icon: "Smartphone", color: "cyan" },
      { name: "Server Action", icon: "Layers", color: "fuchsia" },
      { name: "Live Data DB", icon: "HardDrive", color: "indigo" }
    ]
  },
  "full-stack-systems": {
    title: "Full Stack Systems",
    description: "Enterprise grade, fully decoupled microservice architectures connecting high-performance backends to pristine frontends.",
    project: {
      name: "Nexus Core ERP",
      desc: "A highly complex Resource Planning system utilizing event-sourcing and CQRS to handle millions of supply chain records.",
    },
    stack: [
      { name: "Gateway", value: "GraphQL / tRPC / REST", color: "text-pink-400", desc: "Strictly typed API boundaries preventing runtime payload errors." },
      { name: "Microservices", value: "Node.js / Rust / Go", color: "text-orange-400", desc: "Domain-driven decoupled backend services that scale independently." },
      { name: "Data Tier", value: "PostgreSQL, MongoDB, Redis", color: "text-blue-400", desc: "Polyglot persistence matching exact I/O profile requirements." },
      { name: "Infrastructure", value: "Docker, Kubernetes, AWS", color: "text-emerald-400", desc: "Containerized orchestration allowing self-healing nodes." }
    ],
    features: [
      "Strict data consistency via Saga patterns",
      "Horizontal sub-second auto-scaling",
      "Absolute redundancy and fault-tolerance",
      "Fully tailored to your rigid corporate infrastructure"
    ],
    pipeline: [
      { name: "API Gateway", icon: "Network", color: "cyan" },
      { name: "Microservice Node", icon: "Server", color: "fuchsia" },
      { name: "Event Bus", icon: "Infinity", color: "indigo" }
    ]
  },
  "ai-agents": {
    title: "AI Agents",
    description: "Autonomous reasoning engines capable of planning, using tools, and executing complex workflows without human intervention.",
    project: {
      name: "AutoCoder Swarm",
      desc: "A multi-agent orchestrated system where distinct agents (Planner, Coder, Reviewer) collaborate to solve code repository issues.",
    },
    stack: [
      { name: "Orchestration", value: "LangChain / AutoGen / CrewAI", color: "text-indigo-400", desc: "Logic loops managing state, delegation, and reasoning chains." },
      { name: "LLM Layer", value: "GPT-4o / Claude 3.5 Sonnet", color: "text-fuchsia-400", desc: "State-of-the-art foundational models for extreme cognitive capacity." },
      { name: "Memory", value: "Zep / Redis Vector", color: "text-red-400", desc: "Persistent contextual memory so agents never forget workflow rules." },
      { name: "Tools", value: "Browserbase, E2B, API APIs", color: "text-cyan-400", desc: "Sandboxed execution layers allowing agents to take real-world actions." }
    ],
    features: [
      "Self-correcting recursive thought loops",
      "Long-term and working memory contexts",
      "Secure sandboxed code execution environments",
      "Custom tool integration tailored to your SaaS stack"
    ],
    pipeline: [
      { name: "Agent Prompting", icon: "BrainCircuit", color: "cyan" },
      { name: "Tool Execution", icon: "Cpu", color: "fuchsia" },
      { name: "Result Synthesis", icon: "Layers", color: "indigo" }
    ]
  },
  "chatbots": {
    title: "Chatbots",
    description: "Intelligent conversational interfaces hooked directly into your business data for 24/7 highly personalized user support.",
    project: {
      name: "SupportSync AI",
      desc: "A tier-1 customer support bot that ingests Zendesk tickets and Shopify data to process refunds and answer context-heavy queries.",
    },
    stack: [
      { name: "Framework", value: "Vercel AI SDK / Next.js", color: "text-cyan-400", desc: "React hooks designed specifically for streaming LLM tokens seamlessly." },
      { name: "Language Models", value: "OpenAI API / Anthropic", color: "text-fuchsia-400", desc: "Highly creative natural conversational generation models." },
      { name: "Context", value: "Pinecone / Weaviate", color: "text-blue-400", desc: "Ingesting past chat histories for nuanced continuous conversations." },
      { name: "Voice/Speech", value: "ElevenLabs / Whisper", color: "text-orange-400", desc: "Real-time speech-to-text and emotive audio rendering if required." }
    ],
    features: [
      "Sub-second streaming token generation",
      "Natural language to SQL translations for customer lookups",
      "Seamless human-agent handoff protocol",
      "Fully customized system prompt matching brand voice"
    ],
    pipeline: [
      { name: "User Query", icon: "Smartphone", color: "cyan" },
      { name: "Context Retrieval", icon: "Database", color: "fuchsia" },
      { name: "Token Stream", icon: "Zap", color: "indigo" }
    ]
  },
  "rag-systems": {
    title: "RAG Systems",
    description: "Retrieval-Augmented Generation architectures that eliminate hallucinations by forcing the LLM to cite strictly private enterprise data.",
    project: {
      name: "DocuMind Enterprise",
      desc: "An internal semantic search portal that parses terabytes of legal, financial, and technical PDFs to answer complex executive questions.",
    },
    stack: [
      { name: "Ingestion", value: "Unstructured.io / LlamaParse", color: "text-indigo-400", desc: "Complex OCR extracting dense tables and metadata from messy PDFs." },
      { name: "Embeddings", value: "OpenAI text-embedding-3 / Voyage", color: "text-cyan-400", desc: "Mathematical vector encodings of semantic document meaning." },
      { name: "Vector Store", value: "pgvector / Qdrant", color: "text-fuchsia-400", desc: "Nearest neighbor algorithms running in high-dimensional space." },
      { name: "Ranking", value: "Cohere ReRank / ColbertV2", color: "text-emerald-400", desc: "Cross-encoder scoring sorting the final chunks for extreme accuracy." }
    ],
    features: [
      "Hybrid search (Lexical BM25 + Dense Vector)",
      "Cross-encoder reranking for maximum precision",
      "Chunking strategies tailored to your document structure",
      "Zero-data-retention environments for high security"
    ],
    pipeline: [
      { name: "Vector Search", icon: "Network", color: "cyan" },
      { name: "Rerank Context", icon: "Layers", color: "fuchsia" },
      { name: "LLM Generation", icon: "BrainCircuit", color: "indigo" }
    ]
  },
  "n8n-automations": {
    title: "n8n Automations",
    description: "Self-hosted, highly complex workflow automations serving as the nervous system connecting fragmented corporate APIs.",
    project: {
      name: "QuantumFlow Engine",
      desc: "Self-healing background processes that connect Stripe billing, Hubspot CRM, and Slack notifications into a seamless pipeline.",
    },
    stack: [
      { name: "Engine", value: "n8n (Self-hosted) / Temporal", color: "text-red-400", desc: "Fair-code scalable visual interface for infinite Node operations." },
      { name: "Gateway", value: "Nginx / Cloudflare access", color: "text-orange-400", desc: "Secure reverse proxies protecting workflow webhook endpoints." },
      { name: "Database", value: "PostgreSQL", color: "text-blue-400", desc: "Storing vast historical execution logs and node state data." },
      { name: "Monitoring", value: "Datadog / Prometheus", color: "text-fuchsia-400", desc: "Total observability over node failure rates and retry loops." }
    ],
    features: [
      "Visual node-based logic mapping",
      "Automatic retry loops for intermittent API failures",
      "Complex conditionals and parallel branching",
      "Custom node development to match proprietary internal APIs"
    ],
    pipeline: [
      { name: "Webhook Fire", icon: "Zap", color: "cyan" },
      { name: "Node Logic", icon: "Workflow", color: "fuchsia" },
      { name: "API Push", icon: "Globe", color: "indigo" }
    ]
  },
  "custom-ai-solutions": {
    title: "Custom AI Solutions",
    description: "Bespoke, entirely proprietary artificial intelligence systems modeled strictly against private, specialized domain data.",
    project: {
      name: "Prophet Analytics",
      desc: "A custom-trained predictive clustering model analyzing gigabytes of raw sensor data to predict factory machine faults.",
    },
    stack: [
      { name: "ML Framework", value: "PyTorch / TensorFlow", color: "text-orange-400", desc: "GPU-accelerated tensor manipulation algorithms." },
      { name: "Data Processing", value: "Apache Spark / Pandas", color: "text-cyan-400", desc: "High velocity data engineering cleaning the training sets." },
      { name: "Deployment", value: "AWS SageMaker / Ray Serve", color: "text-indigo-400", desc: "Inference engines optimizing token throughput at scale." },
      { name: "Fine-Tuning", value: "LoRA / QLoRA / PEFT", color: "text-fuchsia-400", desc: "Teaching foundational models highly specific domain vernacular." }
    ],
    features: [
      "Custom weights trained directly on your data",
      "Parameter-Efficient Fine-Tuning methodologies",
      "On-premise deployable for absolute security",
      "Continuous learning hooks implemented post-deployment"
    ],
    pipeline: [
      { name: "Data Pipeline", icon: "Database", color: "cyan" },
      { name: "Model Traning", icon: "Cpu", color: "fuchsia" },
      { name: "Inference API", icon: "ShieldCheck", color: "indigo" }
    ]
  },
  "mobile-app-development": {
    title: "Mobile App Development",
    description: "Cross-platform mobile applications that output identical highly-performant native user experiences on iOS and Android.",
    project: {
      name: "Velocity Commerce",
      desc: "A lightning-fast native mobile storefront featuring 120fps gesture animations and local-first offline syncing for bad networks.",
    },
    stack: [
      { name: "Framework", value: "React Native / Expo", color: "text-indigo-400", desc: "Universal coding paradigm targeting direct native view controllers." },
      { name: "Animations", value: "Reanimated 3 / Skia", color: "text-fuchsia-400", desc: "Declarative UI rendering directly on the native UI thread." },
      { name: "Local DB", value: "WatermelonDB / RN SQLite", color: "text-cyan-400", desc: "Local-first persistence enabling instant screen transitions." },
      { name: "State Sync", value: "PowerSync / tRPC", color: "text-emerald-400", desc: "Background sync reconciliation strategies to the primary servers." }
    ],
    features: [
      "Over-the-air (OTA) instant updates",
      "Deep native module bindings via JSI",
      "Local-first architecture for immediate offline responsiveness",
      "Bespoke designs breaking standard UI conventions"
    ],
    pipeline: [
      { name: "Native UI", icon: "Smartphone", color: "cyan" },
      { name: "Local DB Cache", icon: "HardDrive", color: "fuchsia" },
      { name: "Background Sync", icon: "Network", color: "indigo" }
    ]
  }
};

export default async function ServiceOverview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!SERVICE_DETAILS[slug]) {
    notFound();
  }

  const data = SERVICE_DETAILS[slug];
  
  return (
    <main className="min-h-screen bg-[#050014] text-white font-sans selection:bg-fuchsia-500/50 p-4 md:p-6 lg:p-16 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 blur-[150px] mix-blend-screen pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 blur-[150px] mix-blend-screen pointer-events-none hidden md:block" />

      <div className="max-w-[85rem] mx-auto relative z-10">
        <Link href="/#services" className="inline-flex items-center gap-2 text-cyan-400 hover:text-fuchsia-400 font-bold uppercase tracking-widest text-xs mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Services
        </Link>
        
        <div className="flex flex-col gap-3 md:gap-4 mb-8 md:mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-xs font-bold text-cyan-300 w-max uppercase tracking-widest shadow-[0_0_15px_rgba(34,211,238,0.2)]">
            Service Architecture Validation
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-outfit tracking-tighter drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#cbd5e1]">
            {data.title}
          </h1>
          <p className="text-lg md:text-2xl text-[#94a3b8] max-w-4xl leading-relaxed mt-2 md:mt-4 font-light">
            {data.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Implementations & Showcase */}
          <div className="space-y-10">
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md relative overflow-hidden group hover:border-fuchsia-500/30 transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/5 blur-[100px] group-hover:bg-fuchsia-500/15 transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 border border-white/10 flex items-center justify-center text-fuchsia-400">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-outfit text-white">Showcase Implementation</h2>
                  <div className="text-sm font-medium text-[#c084fc]">Example Project: {data.project.name}</div>
                </div>
              </div>

              <p className="text-[#cbd5e1] leading-relaxed mb-10 text-lg font-light">
                {data.project.desc}
              </p>
              
              {/* Dynamic Pipeline specific to each project type */}
              <div className="w-full py-10 md:py-16 rounded-xl bg-[#02000a] border border-cyan-500/20 flex flex-col items-center justify-center relative shadow-inner">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay hidden md:block" />
                
                <h4 className="absolute top-4 left-4 text-[#94a3b8] font-mono text-[10px] md:text-xs uppercase tracking-widest hidden md:block">HLD Architecture</h4>
                
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-mono opacity-90 relative z-10 w-full px-4 flex-wrap">
                  {data.pipeline.map((step: any, index: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                    const IconComponent = IconMap[step.icon] || Database;
                    return (
                      <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto justify-center">
                        <div className={`p-4 md:p-6 border border-${step.color}-500/30 rounded-xl bg-${step.color}-500/10 text-${step.color}-300 flex flex-col items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:scale-105 transition-transform w-[160px] md:w-auto`}>
                          <IconComponent className="w-6 h-6 md:w-7 md:h-7" /> <span className="text-xs font-bold text-center">{step.name}</span>
                        </div>
                        {index < data.pipeline.length - 1 && (
                          <div className="py-2 md:py-0 md:px-4 flex items-center justify-center">
                            <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 text-white/30 rotate-90 md:rotate-0`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Project Simulation */}
              <div className="w-full mt-10 rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-[#050014]">
                <div className="px-4 py-3 bg-[#0a0816] flex items-center gap-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold ml-2">Live Production Environment: {data.project.name}</div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></div>
                </div>
                <div className="p-4 md:p-6 h-40 bg-[#02000a] text-[10px] md:text-sm font-mono text-emerald-400/80 overflow-hidden flex flex-col gap-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02000a] pointer-events-none z-10" />
                  <div className="opacity-60">&gt; Initializing {data.title} kernel module... [SUCCESS]</div>
                  <div className="opacity-80">&gt; Negotiating secure handshake with client nodes... [CONNECTED]</div>
                  <div className="text-cyan-400 opacity-90">&gt; Routing live telemetry through {data.pipeline[0]?.name || "Edge"} cluster...</div>
                  <div className="mt-4 text-[#cbd5e1] flex items-center gap-2 relative z-20">
                    <span className="w-1.5 h-4 bg-fuchsia-500 block animate-pulse"></span> Analyzing incoming data streams...
                  </div>
                </div>
                <div className="p-4 bg-[#0a0816] border-t border-white/10 flex items-center justify-between">
                  {slug === "static-websites" ? (
                    <>
                      <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-widest font-bold">Live Sandbox Output</span>
                      <Link href="/showcase/edgestore" className="px-4 py-1.5 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold hover:bg-cyan-500 hover:text-white transition-all shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                        Launch Live Sandbox
                      </Link>
                    </>
                  ) : (
                    <>
                      <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-widest font-bold">Simulator Active</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0816] shadow-xl hover:border-cyan-500/20 transition-colors">
                <h3 className="font-bold font-outfit text-xl mb-4 text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" /> Velocity Edge
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  Engineered to eliminate latency. Our tech stack decisions prioritize immediate execution capability via distributed edge networks or precisely optimized core loops.
                </p>
              </div>
              <div className="p-8 rounded-3xl border border-white/5 bg-[#0a0816] shadow-xl hover:border-fuchsia-500/20 transition-colors">
                <h3 className="font-bold font-outfit text-xl mb-4 text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-fuchsia-400" /> Bespoke Customization
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">
                  Every project is highly customized. We don&apos;t bolt together templates; we design the core data structures exactly around your proprietary enterprise requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c0a20] to-[#050014] shadow-2xl relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 text-white/5">
                <Code2 strokeWidth={1} viewBox="0 0 24 24" className="w-full h-full" />
              </div>
              <h3 className="font-bold font-outfit text-2xl mb-8 text-white relative z-10 flex items-center gap-3">
                <Layers className="text-fuchsia-400" /> Deep Tech Stack
              </h3>
              <p className="text-sm text-[#94a3b8] mb-8">Employing only the absolute most stable, resilient, and cutting-edge software ecosystems for production applications.</p>
              <div className="flex flex-col gap-6 relative z-10">
                {data.stack.map((item: any, i: number) => ( // eslint-disable-line @typescript-eslint/no-explicit-any
                  <div key={i} className="group cursor-default hover:bg-white/5 p-3 rounded-xl transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 mb-2">
                      <span className="text-[#cbd5e1] font-mono text-[10px] md:text-sm uppercase tracking-widest">{item.name}</span>
                      <span className={`font-bold font-outfit md:text-lg ${item.color} drop-shadow-sm transition-colors text-right`}>{item.value}</span>
                    </div>
                    <p className="text-xs text-[#64748b] leading-relaxed mt-1 hidden sm:block">{item.desc}</p>
                    {i < data.stack.length - 1 && <div className="w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent mt-4" />}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-8 md:p-10 rounded-3xl border border-white/5 bg-[#050014]/50 backdrop-blur-sm">
              <h3 className="font-bold font-outfit text-xl mb-6 text-white border-b border-white/5 pb-4">Key Delivery Features</h3>
              <ul className="space-y-4">
                {data.features.map((feat: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-base text-[#cbd5e1] leading-relaxed">
                    <div className="mt-1 bg-cyan-500/10 p-1 rounded-full"><CheckCircle className="w-4 h-4 text-cyan-400" /></div> 
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-10 p-8 rounded-3xl bg-fuchsia-500/10 border border-fuchsia-500/30 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
               <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-fuchsia-500/20 to-transparent pointer-events-none" />
               <div className="relative z-10">
                 <h4 className="text-xl font-bold font-outfit text-white mb-2">Ready to architect?</h4>
                 <p className="text-sm text-fuchsia-200">Engage our engineering team for a custom system review.</p>
               </div>
               <Link href="/#contact" className="relative z-10 px-6 py-3 bg-fuchsia-500 text-white font-bold rounded-xl whitespace-nowrap hover:bg-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all flex items-center gap-2">
                 Engage Firm <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
            
          </div>
          
        </div>
      </div>
    </main>
  );
}
