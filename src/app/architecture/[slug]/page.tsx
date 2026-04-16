import Link from "next/link";
import { ArrowLeft, ArrowRight, GitMerge, FileCode, CheckCircle, Database, Server, Smartphone, Cpu, Network, Workflow, BrainCircuit, Box, Zap, ShieldCheck, HardDrive, Infinity, Bot, MessageSquare } from "lucide-react";
import { notFound } from "next/navigation";

const IconMap: Record<string, any> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  Database, Server, Smartphone, Cpu, Network, Workflow, BrainCircuit, Code2: FileCode, Box, Zap, ShieldCheck, HardDrive, Infinity, Bot, MessageSquare, Layers: Server
};

const PROJECT_DETAILS: Record<string, any> = { // eslint-disable-line @typescript-eslint/no-explicit-any
  "retailassist-ai-support": {
    title: "RetailAssist: AI Support",
    motive: "Designed to eliminate 80% of tier-1 support costs. RetailAssist isn't just a chatbot; it is a full autonomous AI agent that hooks directly into your e-commerce backend (Shopify, Magento). It processes returns, issues immediate refunds, and acts as a 24/7 sales representative driving conversions.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Live Chat Input", icon: "MessageSquare", color: "cyan" },
      { name: "Intent Router Engine", icon: "Cpu", color: "fuchsia" },
      { name: "API Tool Execution", icon: "Workflow", color: "indigo" }
    ],
    components: [
      { name: "Retrieval Memory", desc: "Instantly recalls user's past purchase history to generate highly personalized interactions.", icon: "Database", color: "cyan" },
      { name: "E-Commerce Action Layer", desc: "Authenticated function calls allowing the agent to mutate order states directly.", icon: "Network", color: "fuchsia" }
    ],
    stack: {
      frontend: "React 19 / Tailwind / Vercel AI SDK",
      backend: "Node.js Serverless Functions",
      database: "PostgreSQL pgvector / Redis",
      ai: "OpenAI gpt-4o / Claude 3.5 Sonnet",
      infra: "Vercel Edge Network"
    }
  },
  "salesforge-sdr-swarm": {
    title: "SalesForge: SDR Swarm",
    motive: "Outbound sales is a numbers game constrained by human capacity. SalesForge deploys a swarm of AI SDRs that research prospects, read LinkedIn profiles, and draft hyper-personalized outreach sequences completely autonomously. Built to 100x your booked meetings.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Prospect Scraper", icon: "Network", color: "cyan" },
      { name: "LLM Personalization", icon: "BrainCircuit", color: "fuchsia" },
      { name: "Email Orchestrator", icon: "Zap", color: "indigo" }
    ],
    components: [
      { name: "Lead Validation Engine", desc: "Automatically verifies email domains and limits bounce rates utilizing strict rules engines.", icon: "ShieldCheck", color: "fuchsia" },
      { name: "Auto-Scheduler", desc: "Natural language processing handles calendar negotiations completely seamlessly with prospects.", icon: "Workflow", color: "cyan" }
    ],
    stack: {
      frontend: "Next.js 15 (Internal Dashboard)",
      backend: "Rust / Node.js Background Workers",
      database: "MongoDB / Redis Message Queue",
      ai: "Anthropic API / Llama 3 Fine-tunes",
      infra: "Docker Swarm / AWS ECS"
    }
  },
  "documind-enterprise-rag": {
    title: "DocuMind: Enterprise RAG",
    motive: "Institutional knowledge is often buried in thousands of unsorted PDFs, Docs, and wikis. DocuMind ingests massive corporate repositories into an instantly searchable semantic interface. Employees ask questions and get exact citations without hallucinations.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Document Parser", icon: "HardDrive", color: "cyan" },
      { name: "Embeddings Generator", icon: "BrainCircuit", color: "fuchsia" },
      { name: "Hybrid Search UI", icon: "Smartphone", color: "indigo" }
    ],
    components: [
      { name: "Cross-Encoder Reranker", desc: "Re-scores contextual matches to ensure 99.9% accuracy before handing context to the LLM.", icon: "Cpu", color: "cyan" },
      { name: "Role-Based Vector Filters", desc: "Strict document boundaries ensuring interns cannot query executive payroll semantics.", icon: "ShieldCheck", color: "fuchsia" }
    ],
    stack: {
      frontend: "Next.js / Tailwind CSS",
      backend: "FastAPI (Python) / LlamaIndex",
      database: "pgvector / Qdrant",
      ai: "Voyage AI Embeddings / GPT-4o",
      infra: "AWS EKS / Strict VPC Enclaves"
    }
  },
  "neurograph-pipeline": {
    title: "NeuroGraph: Data Pipeline",
    motive: "Enterprises waste millions paying humans to manually enter data from invoices, emails, and unstructured PDFs into databases. NeuroGraph completely automates this extraction, instantly structuring raw chaotic files into pristine SQL records via multimodal AI.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "File Ingestion Node", icon: "Box", color: "cyan" },
      { name: "Vision/Text Extraction", icon: "BrainCircuit", color: "fuchsia" },
      { name: "JSON Data Sink", icon: "Database", color: "indigo" }
    ],
    components: [
      { name: "Data Validation Schema", desc: "Strict Pydantic validations utilizing Zod to ensure AI outputs never break database constraints.", icon: "Code2", color: "fuchsia" },
      { name: "Anomaly Flagging System", desc: "If the AI confidence drops below 95%, the pipeline automatically routes to a human-in-the-loop.", icon: "Network", color: "cyan" }
    ],
    stack: {
      frontend: "React Dashboard for Human Approval",
      backend: "Python / Celery Distributed Task Queue",
      database: "PostgreSQL / Snowflake Sink",
      ai: "GPT-4o Vision API / Claude 3.5 Sonnet",
      infra: "Kubernetes CronJobs"
    }
  },
  "omnirag-engine": {
    title: "OmniRAG: Context Engine",
    motive: "Standard RAG systems have a massive delay (3-8 seconds) when retrieving context. OmniRAG utilizes predictive fetching—calculating exactly what a user is about to ask mid-keystroke, loading semantic results into edge cache before the user hits enter.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Keystroke Inference", icon: "Zap", color: "cyan" },
      { name: "Background RAG Fetch", icon: "Database", color: "fuchsia" },
      { name: "Zero-Latency Stream", icon: "Network", color: "indigo" }
    ],
    components: [
      { name: "Edge Caching Nodes", desc: "Distributed Redis layers at the Vercel Edge specifically holding immediate query arrays.", icon: "Server", color: "cyan" },
      { name: "Predictive NLP Models", desc: "Lightweight, ultra-fast local models trained to guess the trajectory of user queries.", icon: "BrainCircuit", color: "fuchsia" }
    ],
    stack: {
      frontend: "Next.js 15 / Framer Motion",
      backend: "Rust API Gateway",
      database: "Upstash Redis Edge / Pinecone",
      ai: "OpenAI Embeddings / FastText",
      infra: "Cloudflare Workers / Vercel Edge"
    }
  },
  "synthetica-os": {
    title: "Synthetica: BI OS",
    motive: "Real-time decision-making is clouded by too many dashboards. Synthetica OS acts as an autonomous digital executive: it ingests all active sales, marketing, and HR metrics daily, identifies anomalies, and drafts an actionable executive briefing via SMS/Email.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "API Aggregators", icon: "Workflow", color: "cyan" },
      { name: "Anomaly Detection", icon: "Cpu", color: "fuchsia" },
      { name: "Actionable Reporting", icon: "MessageSquare", color: "indigo" }
    ],
    components: [
      { name: "Live Data ETL", desc: "Hooks directly into Salesforce, Google Analytics, and Stripe without manual exports.", icon: "Database", color: "fuchsia" },
      { name: "Executive Prompt Chains", desc: "Multi-layered LLM reflections summarizing raw numbers into strategic human-readable narratives.", icon: "BrainCircuit", color: "cyan" }
    ],
    stack: {
      frontend: "Next.js / Radix UI / Tremor Charts",
      backend: "Node.js / Express",
      database: "TimescaleDB (Time-series) / Postgres",
      ai: "Anthropic Claude 3.5 Sonnet",
      infra: "DigitalOcean Apps / AWS RDS"
    }
  },
  "quantumflow-n8n": {
    title: "QuantumFlow: AI Workflows",
    motive: "SaaS tools are fundamentally disconnected. When a user buys a product, getting that data into your CRM, Slack, and accounting software usually requires brittle Zapier scripts. QuantumFlow utilizes robust n8n orchestrations that self-heal if an API fails.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Webhook Listener", icon: "Network", color: "cyan" },
      { name: "n8n Logic Nodes", icon: "Workflow", color: "fuchsia" },
      { name: "Platform Distribution", icon: "Globe", color: "indigo" }
    ],
    components: [
      { name: "Self-Healing Fallbacks", desc: "If Hubspot API goes offline, the local queue stores the payload and automatically retries with exp backoff.", icon: "HardDrive", color: "cyan" },
      { name: "Branching Logic Matrices", desc: "Complex conditional statements routing data uniquely based on user pricing tiers or regions.", icon: "Box", color: "fuchsia" }
    ],
    stack: {
      frontend: "n8n Custom Internal UI",
      backend: "n8n Self-Hosted Instances / Temporal",
      database: "PostgreSQL (Workflow States)",
      ai: "n8n AI Agents Node",
      infra: "AWS EC2 / Private Subnets"
    }
  },
  "somnium-ui-matrix": {
    title: "Somnium: Generative UI",
    motive: "Static dashboards don't match individual user cognitive load. Somnium uses generative UI rendering—meaning the actual React components and layout restructure themselves dynamically based on exactly what the user is trying to accomplish in the moment.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Action Inference", icon: "BrainCircuit", color: "cyan" },
      { name: "JSON Component Tree", icon: "Code2", color: "fuchsia" },
      { name: "Live React Render", icon: "Smartphone", color: "indigo" }
    ],
    components: [
      { name: "Generative UI Registry", desc: "A robust factory design pattern matching incoming LLM JSON specs to exact Tailwind-styled components.", icon: "Layers", color: "fuchsia" },
      { name: "Predictive Pre-caching", desc: "Loading necessary data elements behind the scenes before the layout finishes shifting.", icon: "Database", color: "cyan" }
    ],
    stack: {
      frontend: "React 19 / Next.js 15 App Router",
      backend: "tRPC / Node.js",
      database: "Supabase / Redis",
      ai: "Vercel AI SDK Core (generateUI)",
      infra: "Vercel Serverless"
    }
  },
  "visionary-content": {
    title: "Visionary: Content Studio",
    motive: "Content creation is slow and rarely consistent in brand voice. Visionary allows your marketing team to drop a single prompt or idea, and it autonomously outputs a blog post, a Twitter thread, a LinkedIn article, and SEO images tailored exactly to your brand.",
    status: "Product Ready for Custom Client Deployment",
    architecture: [
      { name: "Core Prompt Idea", icon: "MessageSquare", color: "cyan" },
      { name: "Format Expansion", icon: "Workflow", color: "fuchsia" },
      { name: "Omni-Channel API", icon: "Globe", color: "indigo" }
    ],
    components: [
      { name: "Brand Voice Alignment", desc: "System prompts augmented with precise previous top-performing content examples.", icon: "Target", color: "cyan" },
      { name: "Multi-modal Generation", desc: "Synchronously triggering image generation APIs (Midjourney/DALL-E) to match generated texts.", icon: "Box", color: "fuchsia" }
    ],
    stack: {
      frontend: "Next.js / Tailwind CSS",
      backend: "Python FastAPI",
      database: "MongoDB (Document stores)",
      ai: "Claude 3.5 Sonnet / DALL-E 3 / Flux",
      infra: "GCP Cloud Run"
    }
  }
};

export default async function ArchitectureOverview({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  if (!PROJECT_DETAILS[slug]) {
    notFound();
  }

  const project = PROJECT_DETAILS[slug];
  
  return (
    <main className="min-h-screen bg-[#050014] text-white font-sans selection:bg-fuchsia-500/50 p-4 md:p-6 lg:p-16">
      <div className="max-w-[85rem] mx-auto">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-cyan-400 hover:text-fuchsia-400 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Return to Command Center
        </Link>
        
        <div className="flex flex-col gap-3 md:gap-4 mb-10 md:mb-16">
          <div className="inline-flex items-center justify-between">
            <div className="inline-block px-3 py-1.5 md:px-4 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-[10px] md:text-xs font-bold text-fuchsia-300 w-max uppercase tracking-widest animate-pulse">
              {project.status}
            </div>
            <div className="hidden md:flex px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-bold text-emerald-400 tracking-widest items-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span> Enterprise Grade
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black font-outfit uppercase tracking-tighter drop-shadow-xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#cbd5e1] to-[#64748b]">
            {project.title}
          </h1>
          <p className="text-base md:text-2xl text-[#94a3b8] max-w-4xl leading-relaxed mt-2 md:mt-4 font-light border-l-4 border-cyan-500/50 pl-4 md:pl-6">
            {project.motive}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="lg:col-span-2 space-y-10">
            <div className="p-8 rounded-3xl border border-cyan-500/20 bg-[#0c0a20]/80 backdrop-blur-md relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px]" />
              <h2 className="text-2xl font-bold font-outfit mb-6 text-white border-b border-white/10 pb-4">High Level Design (HLD) architecture</h2>
              <p className="text-[#cbd5e1] leading-relaxed mb-10 font-medium">
                Our team will implement this architecture specifically for your company&apos;s data and security requirements. 
                Below is the standard data flow orchestration pipeline utilizing decoupled micro-agents.
              </p>
              
              {/* Dynamic Architecture Diagram block */}
              <div className="w-full h-auto py-8 md:py-12 rounded-xl bg-[#02000a] border border-blue-500/20 flex flex-col items-center justify-center relative shadow-inner px-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay hidden md:block" />
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-xs lg:text-sm font-mono opacity-90 relative z-10 w-full flex-wrap">
                  {project.architecture.map((step: any, i: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                    const IconComponent = IconMap[step.icon] || Database;
                    return (
                      <div key={i} className="flex flex-col md:flex-row items-center w-full md:w-auto justify-center">
                        <div className={`p-4 md:p-6 border border-${step.color}-500/50 rounded-xl bg-${step.color}-500/10 text-${step.color}-300 flex flex-col items-center gap-2 md:gap-3 shadow-[0_0_20px_rgba(0,0,0,0.3)] backdrop-blur-md w-[160px] md:w-auto`}>
                          <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                          <span className="font-bold text-center uppercase tracking-widest text-[10px] md:text-xs text-white drop-shadow-md">[ {step.name} ]</span>
                        </div>
                        {i < project.architecture.length - 1 && (
                          <div className="py-2 md:py-0 md:px-4 flex items-center justify-center">
                            <ArrowRight className={`w-5 h-5 md:w-6 md:h-6 text-white/40 rotate-90 md:rotate-0`} />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Live Project Simulation */}
              <div className="w-full mt-10 rounded-xl overflow-hidden border border-fuchsia-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-[#050014]">
                <div className="px-4 py-3 bg-[#0a0816] flex items-center gap-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-[#94a3b8] font-bold ml-2">Live Demonstration Environment: {project.title}</div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_10px_rgba(217,70,239,0.8)]"></div>
                </div>
                <div className="p-4 md:p-6 h-40 bg-[#02000a] text-[10px] md:text-sm font-mono text-cyan-400/80 overflow-hidden flex flex-col gap-2 relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02000a] pointer-events-none z-10" />
                  <div className="opacity-60">&gt; Bootstrapping bespoke {project.title} components... [SUCCESS]</div>
                  <div className="opacity-80">&gt; Securing API endpoints and validating access controls... [VERIFIED]</div>
                  <div className="text-fuchsia-400 opacity-90">&gt; Establishing strict isolation parameters for client data...</div>
                  <div className="mt-4 text-[#cbd5e1] flex items-center gap-2 relative z-20">
                    <span className="w-1.5 h-4 bg-emerald-500 block animate-pulse"></span> Awaiting secure client telemetry...
                  </div>
                </div>
                <div className="p-4 bg-[#0a0816] border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] md:text-xs text-[#64748b] uppercase tracking-widest font-bold">Architecture Ready</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0c0a20] to-[#050014] backdrop-blur-md shadow-2xl">
              <h2 className="text-2xl font-bold font-outfit mb-6 text-white border-b border-white/10 pb-4">Core Structural Components</h2>
              <ul className="space-y-8 text-[#cbd5e1]">
                {project.components.map((comp: any, i: number) => { // eslint-disable-line @typescript-eslint/no-explicit-any
                  const Icon = IconMap[comp.icon] || CheckCircle;
                  return (
                    <li key={i} className="flex gap-6 items-start group">
                      <div className={`shrink-0 p-4 rounded-2xl bg-${comp.color}-500/10 border border-${comp.color}-500/30 text-${comp.color}-400 group-hover:scale-110 group-hover:bg-${comp.color}-500/20 transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-xl mb-2 flex items-center gap-2 group-hover:text-cyan-300 transition-colors">{comp.name}</h3>
                        <p className="text-base text-[#94a3b8] leading-relaxed group-hover:text-[#cbd5e1] transition-colors">{comp.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-8 md:p-10 rounded-3xl border border-fuchsia-500/20 bg-gradient-to-b from-[#0c0a20] to-transparent shadow-xl relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-600/10 blur-[60px] group-hover:bg-cyan-500/20 transition-colors duration-1000" />
              <h3 className="font-bold font-outfit text-2xl mb-8 text-white relative z-10 flex items-center gap-3">
                <Box className="text-fuchsia-400 w-6 h-6" /> Technological Stack
              </h3>
              <p className="text-sm text-[#94a3b8] mb-8 font-light leading-relaxed">Highly scalable infrastructure options designed to maintain efficiency through varying levels of corporate loads.</p>
              
              <div className="flex flex-col gap-6 relative z-10 w-full">
                <div className="flex flex-col justify-between gap-2 border-b border-white/5 pb-4">
                  <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-widest font-bold">Frontend Platform</span>
                  <span className="text-white font-bold font-outfit md:text-lg break-words loading-relaxed">{project.stack.frontend}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-white/5 pb-4">
                  <span className="text-fuchsia-400 font-mono text-[10px] uppercase tracking-widest font-bold">Backend Infrastructure</span>
                  <span className="text-white font-bold font-outfit md:text-lg break-words leading-relaxed">{project.stack.backend}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-white/5 pb-4">
                  <span className="text-indigo-400 font-mono text-[10px] uppercase tracking-widest font-bold">Database Architecture</span>
                  <span className="text-white font-bold font-outfit md:text-lg break-words leading-relaxed">{project.stack.database}</span>
                </div>
                <div className="flex flex-col justify-between gap-2 border-b border-white/5 pb-4">
                  <span className="text-pink-400 font-mono text-[10px] uppercase tracking-widest font-bold">AI Models / Agents</span>
                  <span className="text-white font-bold font-outfit md:text-lg break-words leading-relaxed">{project.stack.ai}</span>
                </div>
                <div className="flex flex-col justify-between gap-2">
                  <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-widest font-bold">DevOps & Cloud</span>
                  <span className="text-white font-bold font-outfit md:text-lg break-words leading-relaxed">{project.stack.infra}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-10 rounded-3xl border border-emerald-500/20 bg-[#050014]/80 shadow-2xl relative overflow-hidden backdrop-blur-md text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                 <ShieldCheck className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="font-bold font-outfit text-xl mb-4 text-white">Security & Integrity</h3>
              <p className="text-sm text-[#cbd5e1] leading-relaxed mb-6 font-medium">
                Every component is thoroughly vetted before shipping. We ensure 99.9% uptime, data localization compliance, and hardened AI APIs endpoints.
              </p>
              <Link href="/#contact" className="inline-flex w-full px-6 py-4 bg-emerald-600/20 text-emerald-400 font-bold rounded-xl border border-emerald-500/50 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all items-center justify-center gap-2">
                Engage Firm Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
