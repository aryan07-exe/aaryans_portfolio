export const profile = {
  name: "Aaryan Sahu",
  role: "AI Engineer · Predusk Technology",
  location: "Gwalior, India",
  coords: "26.22°N · 78.18°E",
  email: "aryansahu7000@gmail.com",
  github: "https://github.com/aryan07-exe",
  linkedin: "https://www.linkedin.com/in/aaryan-sahu-bb680a258/",
  tagline: "Intelligent systems that ship — from models to production APIs.",
  focus:
    "Generative AI · Agentic Systems · Machine Learning · Computer Vision · Backend",
};

export const stats = [
  { value: "50K+", label: "annotations under automated quality control" },
  { value: "~60%", label: "less manual QA audit effort" },
  { value: "~92%", label: "deepfake benchmark accuracy" },
  { value: "Top 5", label: "IIT Bombay national hackathon · 100+ teams" },
];

export const profileRows = [
  { k: "ROLE", v: "AI Engineer · Predusk Technology" },
  { k: "BASE", v: "Gwalior, India" },
  { k: "EDUCATION", v: "B.Tech CSE · ITM University · CGPA 8.4" },
  { k: "FOCUS", v: "GenAI · Agents · ML · Backend" },
];

export type Experience = {
  org: string;
  role: string;
  place: string;
  dates: string;
  narrative: string;
  bullets: string[];
  metrics: { v: string; l: string }[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    org: "Predusk Technology",
    role: "AI Engineer",
    place: "Jaipur, India",
    dates: "Apr 2026 — Present",
    narrative:
      "Production AI and data infrastructure: annotation quality, evaluation metrics, multi-tenancy, and backend architecture at scale.",
    bullets: [
      "Shipped an Inter-Annotator Agreement (IAA) quality framework across the annotation engine — automating consensus and QC for multi-annotator workflows.",
      "Built metric pipelines: IoU for boxes, F1 for spans, Cohen's Kappa and class agreement for categorical labels.",
      "Architected multi-tenant RBAC across backend microservices with organization-scoped roles at workspace creation.",
      "Enforced role availability consistently across 5+ downstream retrieval and query APIs.",
    ],
    metrics: [
      { v: "~60%", l: "less manual QA audit effort" },
      { v: "50,000+", l: "annotations in the framework" },
      { v: "5+", l: "APIs enforcing role availability" },
    ],
    tags: ["IAA", "IoU", "F1", "Cohen's Kappa", "RBAC", "Microservices"],
  },
  {
    org: "NeoLen",
    role: "AI Engineer Intern",
    place: "Remote",
    dates: "Jan 2026 — Apr 2026",
    narrative:
      "Agentic AI and voice AI for an Ayurveda-based healthcare platform — multi-agent orchestration plus structured clinical data.",
    bullets: [
      "Designed LangGraph multi-agent workflows with specialized diagnostic and recommendation agents.",
      "Built streaming voice consultation agents: STT → LLM → TTS with latency-aware prompting.",
      "Optimized token-window usage for ~35% better agent efficiency without sacrificing quality.",
      "Integrated structured EHR pipelines and extracted clinical signals from unstructured history.",
    ],
    metrics: [
      { v: "~35%", l: "better agent response efficiency" },
      { v: "~30%", l: "faster consultation turnaround (pilot)" },
    ],
    tags: ["LangGraph", "Voice AI", "STT / TTS", "LLMs", "EHR"],
  },
  {
    org: "MANIT Bhopal",
    role: "ML Research Intern",
    place: "Bhopal, India",
    dates: "Research internship",
    narrative:
      "Optimal tilt-angle prediction for solar panels using regression on real-world irradiance and geography data.",
    bullets: [
      "Preprocessing and feature engineering on solar production datasets.",
      "Trained and compared multiple regression models for tilt recommendation.",
      "Mapped coordinates and seasonal patterns to actionable tilt angles for planning.",
    ],
    metrics: [],
    tags: ["Regression", "Feature engineering", "Scikit-learn", "Energy analytics"],
  },
  {
    org: "IIITM Gwalior × IIT Hyderabad",
    role: "Research Intern",
    place: "Gwalior, India",
    dates: "iHub-Data initiative",
    narrative:
      "Self-aware synthetic scenario generation for Indian traffic — autonomy, synthetic data, and intelligent mobility.",
    bullets: [
      "Selected for a sponsored collaboration under the iHub-Data initiative with IIT Hyderabad.",
      "Research themes: synthetic data generation, autonomous systems, and traffic scenario modeling.",
    ],
    metrics: [],
    tags: ["Synthetic data", "Autonomous systems", "Intelligent mobility"],
  },
];

export type Project = {
  id: string;
  n: string;
  tag: string;
  cat: string;
  title: string;
  highlight: string;
  desc: string;
  stack: string[];
  gh: string;
  live?: string;
};

export const projects: Project[] = [
  {
    id: "satya",
    n: "01",
    tag: "MULTIMODAL AI",
    cat: "Deep learning · Vision",
    title: "SatyaNetra",
    highlight: "~92% on benchmark real/fake video sets",
    desc: "Multimodal deepfake detector fusing ResNet50 + LSTM temporal vision with YAMNet audio embeddings — ~8% above single-frame CNN baselines with low-latency clip inference.",
    stack: ["PyTorch", "ResNet50", "LSTM", "YAMNet", "OpenCV"],
    gh: "https://github.com/aryan07-exe/Deepfake",
  },
  {
    id: "doc",
    n: "02",
    tag: "RAG / GENAI",
    cat: "Full-stack AI",
    title: "DocMind",
    highlight: "Document-grounded assistant with persistent memory",
    desc: "Upload PDF, TXT, or DOCX and chat per document or across your library — chunking, embeddings, semantic retrieval, and user-scoped isolation.",
    stack: ["LangGraph", "FastAPI", "React", "PostgreSQL", "Chroma", "Gemini"],
    gh: "https://github.com/aryan07-exe/DocMind-RagProject",
    live: "https://doc-mind-rag-project.vercel.app/",
  },
  {
    id: "agent",
    n: "03",
    tag: "AGENTIC AI",
    cat: "Developer tools",
    title: "Terminal Agent",
    highlight: "Workspace-scoped coding agent with Postgres memory",
    desc: "CLI agent on a LangGraph state machine — plan, agent, and ask modes, sandboxed file tools with path-escape protection, and cross-session project memory.",
    stack: ["LangGraph", "LangChain", "Python", "PostgreSQL", "Docker", "OpenRouter"],
    gh: "https://github.com/aryan07-exe/terminal_agent",
  },
  {
    id: "eda",
    n: "04",
    tag: "AI + DATA",
    cat: "Analytics",
    title: "Analytix",
    highlight: "Automated EDA plus AI analyst chat",
    desc: "Drop a dataset, get type detection, distributions, correlations, interactive charts, executive summaries, and a conversational analyst.",
    stack: ["FastAPI", "React", "Vite", "Gemini", "Pandas", "Tailwind"],
    gh: "https://github.com/aryan07-exe/eda_agent",
    live: "https://eda-agent-brown.vercel.app/",
  },
];

export const skillGroups = [
  {
    name: "GenAI & Agents",
    blurb: "LLM applications, orchestration, and multi-agent systems.",
    filter: "ai" as const,
    items: [
      "LangChain",
      "LangGraph",
      "LiteLLM",
      "RAG pipelines",
      "Prompt engineering",
      "Fine-tuning",
      "PEFT / LoRA",
      "Multi-agent systems",
    ],
  },
  {
    name: "ML & Vision",
    blurb: "Deep learning, computer vision, and evaluation.",
    filter: "ml" as const,
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "CNN / RNN / LSTM",
      "ResNet50",
      "YAMNet",
      "OpenCV",
      "Inter-Annotator Agreement",
    ],
  },
  {
    name: "Data & Search",
    blurb: "Storage, retrieval, and analysis.",
    filter: "eng" as const,
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQLAlchemy",
      "ChromaDB",
      "Vector search",
      "Hybrid search",
      "Pandas",
      "NumPy",
    ],
  },
  {
    name: "Backend & Infra",
    blurb: "APIs, services, and shipping.",
    filter: "eng" as const,
    items: ["FastAPI", "REST APIs", "Redis", "Celery", "Docker", "Git", "CI/CD", "Linux"],
  },
  {
    name: "Languages & UI",
    blurb: "Languages and product surfaces from shipped projects.",
    filter: "eng" as const,
    items: ["Python", "SQL", "JavaScript", "Java", "React", "Vite", "Tailwind CSS"],
  },
];

export type OrbSkill = {
  name: string;
  sub: string;
  filter: "ai" | "ml" | "eng";
  className: string;
};

export const orbSkills: OrbSkill[] = [
  { name: "LangGraph", sub: "agent orchestration", filter: "ai", className: "s1" },
  { name: "RAG", sub: "retrieval systems", filter: "ai", className: "s2" },
  { name: "PyTorch", sub: "deep learning", filter: "ml", className: "s3" },
  { name: "OpenCV", sub: "computer vision", filter: "ml", className: "s4" },
  { name: "FastAPI", sub: "backend APIs", filter: "eng", className: "s5" },
  { name: "PostgreSQL", sub: "data + memory", filter: "eng", className: "s6" },
  { name: "LLMs", sub: "generative systems", filter: "ai", className: "s7" },
  { name: "Computer Vision", sub: "multimodal ML", filter: "ml", className: "s8" },
  { name: "Docker", sub: "deployment", filter: "eng", className: "s9" },
  { name: "Redis", sub: "caching + queues", filter: "eng", className: "s10" },
];

export const awards = [
  {
    venue: "IIITM Gwalior · Infotsav",
    rank: "2nd place",
    headline: "Campus hackathon",
    highlight: "SatyaNetra",
    note: "Won second place with a multimodal deepfake detection system — vision, audio, and temporal models on stage.",
  },
  {
    venue: "NIT Bhopal · Version Beta 7.0",
    rank: "Runner-up",
    headline: "National hackathon",
    highlight: "Finals · complete delivery",
    note: "Reached the national final and shipped a full solution to the assigned problem statement.",
  },
  {
    venue: "IIT Bombay · National",
    rank: "Top 5 finalist",
    headline: "100+ teams nationwide",
    highlight: "National stage",
    note: "Ranked among the top five teams at one of India’s largest developer hackathons.",
  },
];

export const journey = [
  {
    n: "01",
    when: "2022",
    title: "Foundations",
    text: "B.Tech Computer Science at ITM University, Gwalior — ML, systems, and software engineering.",
    active: true,
  },
  {
    n: "02",
    when: "Research",
    title: "Applied ML",
    text: "Solar tilt prediction at MANIT; synthetic Indian traffic scenarios at IIITM × IIT Hyderabad.",
    active: false,
  },
  {
    n: "03",
    when: "Projects",
    title: "AI product engineering",
    text: "SatyaNetra, DocMind, Analytix — models wrapped into products people can use.",
    active: false,
  },
  {
    n: "04",
    when: "Jan 2026",
    title: "Agentic AI",
    text: "Multi-agent LangGraph and voice AI at NeoLen.",
    active: false,
  },
  {
    n: "05",
    when: "Apr 2026",
    title: "Production AI",
    text: "IAA quality framework and multi-tenant RBAC at Predusk.",
    active: true,
  },
];

export const tickerItems = [
  "LangGraph",
  "RAG",
  "PyTorch",
  "FastAPI",
  "Multi-agent systems",
  "OpenCV",
  "PostgreSQL",
  "Docker",
  "Voice AI",
  "Vector search",
];
