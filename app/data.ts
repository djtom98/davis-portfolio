export const profile = {
  name: "Davis Jacob Thomas",
  logo: "djtom",
  title: "Machine Learning Engineer · AI Platform",
  tagline: "ML · LLMs · Agents · MLOps · Graph · Data",
  location: "Barcelona, Spain",
  email: "davisjacobthomas@gmail.com",
  linkedin: "https://linkedin.com/in/davis-jacob-thomas",
  github: "https://github.com/djtom98",
  resume:
    "https://drive.google.com/file/d/1uZ5ATNMhKdqa7wib59RkC519kgq-6x5p/view?usp=drive_link",
  summary:
    "ML Engineer with 6 years of experience designing, building and operating production-grade ML platforms, MLOps pipelines, and LLM/agentic systems. Author and maintainer of multiple internal Python libraries spanning ML utilities, GenAI, Knowledge Graphs, and data access. Passionate about leveraging AI for public good.",
};

export const skills = [
  "Python",
  "PyTorch",
  "Kubernetes",
  "LLMs",
  "RAG",
  "MLflow",
  "FastAPI",
  "Neo4j",
  "PydanticAI",
  "dbt",
];

export const experience = [
  {
    title: "Machine Learning Engineer · AI Platform",
    company: "AILY Labs",
    url: "https://ailylabs.com",
    duration: "May 2024 – Present",
    location: "Barcelona, Spain",
    bullets: [
      "Maintain and improve the org's shared ML/AI platform on Kubernetes (EKS), eliminating per-team infrastructure duplication and cutting model deployment lead time with shared GHA CI/CD workflows.",
      "Engineered a standardised FastAPI model-serving framework adopted org-wide — factory pattern, request/response middleware, health checks, Datadog APM tracing, and multi-tenant MLflow model loading.",
      "Authored and maintain an internal scikit-learn-compatible ML utilities library covering MRMR/SHAP feature selection, Optuna hyperparameter tuning, statistical drift detection, and MLflow lifecycle management.",
      "Designed a Knowledge Graph platform from greenfield to production on Neo4j: NLP-driven entity extraction, matching and merging pipelines, GraphRAG, LLM exploration agents, Pydantic data models.",
      "Maintain a shared GenAI library (embeddings, LLMs, vector DBs, Langfuse integration) and a unified data access layer enabling 10+ services to share a single tested data surface.",
      "Delivered production LLM and agentic systems: hybrid + vector RAG on OpenSearch, real-time ReAct agents via PydanticAI + MCP servers, a unified LLM gateway (OpenAI, Bedrock) with quota management.",
      "Productionalizing a LoRA model to be served on GPU Nodepools, culminating in a purpose-built autocomplete model served via a vLLM inference engine on Kubernetes.",
    ],
    tags: [
      "Kubernetes",
      "FastAPI",
      "MLflow",
      "Neo4j",
      "PydanticAI",
      "RAG",
      "LLMs",
      "OpenTelemetry",
      "Python",
    ],
  },
  {
    title: "Data Scientist · Projects Officer",
    company: "IMF",
    url: "https://imf.org",
    duration: "Nov 2023 – Apr 2024 · Apr 2025 – Jun 2025",
    location: "Remote",
    bullets: [
      "Quantified causal effects of IMF interventions on member-state conflict under a structural causal framework.",
      "Built a RAG pipeline over MONA policy documents to accelerate evidence retrieval for economists.",
      "Designed a Human-in-the-Loop annotation pipeline (Label Studio + Few-Shot Learning) that reduced manual labelling effort while maintaining research-grade label quality.",
    ],
    tags: ["RAG", "Causal Inference", "NLP", "Python", "Label Studio"],
  },
  {
    title: "Data Analyst",
    company: "Gameloft",
    url: "https://gameloft.com",
    duration: "Jul 2023 – Dec 2023",
    location: "Barcelona, Spain",
    bullets: [
      "Shipped funnel dashboards tracking CTR, DAU and RPU across titles.",
      "Designed A/B testing frameworks for seasonal campaigns that measurably lifted player retention and monetisation metrics.",
    ],
    tags: ["A/B Testing", "SQL", "Dashboards", "Analytics"],
  },
  {
    title: "Graduate Researcher",
    company: "Novartis & Barcelona School of Economics",
    url: "https://bse.eu",
    duration: "Apr 2023 – Jul 2023",
    location: "Barcelona, Spain",
    bullets: [
      "Implemented a novel inductive GraphSAGE variant (GNN/GCN/GAT) to learn embeddings from Knowledge Graphs extracted from earnings-call transcripts.",
      "Used the embeddings to estimate cumulative abnormal returns in the 30-day post-event window.",
    ],
    tags: ["GNN", "GraphSAGE", "Knowledge Graphs", "PyTorch", "NLP"],
  },
  {
    title: "Data Engineer",
    company: "IQVIA",
    url: "https://iqvia.com",
    duration: "Apr 2021 – Aug 2022",
    location: "Kerala, India",
    bullets: [
      "Replaced a legacy Informatica pipeline with Spark SQL-based automated report generation, cutting processing time significantly.",
      "Built ELT pipelines in Snowflake integrating pharmaceutical sales data with SAP (Star Schema).",
      "Implemented GDPR-compliant data anonymisation for HCPs and onboarded new market data models in Reltio MDM.",
    ],
    tags: ["Snowflake", "Spark", "Informatica", "SQL", "Reltio"],
  },
];

export const education = [
  {
    degree: "MSc Data Science",
    institution: "Barcelona School of Economics",
    url: "https://bse.eu",
    duration: "2022 – 2023",
    grade: "GPA 8.62 / 10",
    topics: [
      "Causal Inference",
      "Bayesian Statistics",
      "Deep Learning",
      "NLP / LLMs",
      "Graph Neural Networks",
      "Probabilistic Inference",
    ],
  },
  {
    degree: "B.Tech Mechanical Engineering",
    institution: "Mar Athanasius College of Engineering, Kerala",
    url: "https://mace.ac.in",
    duration: "2017 – 2021",
    grade: "CGPA 9.13 / 10",
    topics: [],
  },
];

export const techStack = {
  "ML / AI": [
    "PyTorch",
    "Scikit-learn",
    "Hugging Face",
    "GNN (GraphSAGE, GCN, GAT)",
    "SHAP",
    "Optuna",
  ],
  "LLM & Agents": [
    "PydanticAI",
    "LangChain",
    "MCP / FastMCP",
    "RAG (OpenSearch)",
    "Neo4j",
    "Langfuse",
  ],
  MLOps: ["MLflow", "OpenTelemetry", "Drift Detection", "Model Lifecycle Mgmt"],
  "Cloud Native": [
    "Kubernetes (EKS)",
    "Helm",
    "FluxCD",
    "Terragrunt",
    "Docker",
    "AWS",
    "GitHub Actions",
  ],
  "Data Platform": [
    "dbt",
    "Airflow",
    "Snowflake",
    "PostgreSQL",
    "DuckDB",
    "Alembic",
  ],
  "Model Serving": ["FastAPI", "Datadog APM", "vLLM", "Locust"],
  Languages: ["Python", "R", "SQL", "Bash"],
};

export const researchProjects = [
  {
    name: "Decoding Abnormal Returns: Graph-Enhanced Earnings Call Analysis",
    description:
      "NLP + Graph Neural Networks (GraphSAGE/GCN/GAT) on pharmaceutical earnings call transcripts. Event-study methodology to estimate cumulative abnormal returns in the 30-day post-call window.",
    date: "2023-03",
    github: "https://github.com/djtom98/Graph-Based-Analysis-Earnings-Calls",
    report:
      "https://drive.google.com/file/d/1p2GP0j-1PQ2aWcr8Evo2tU5g_aBFoFqR/view?usp=drive_link",
    tags: ["NLP", "GNN", "GraphSAGE", "Python", "Jupyter"],
  },
  {
    name: "Knowledge Distillation: Teacher–Student Architectural Choices",
    description:
      "Systematic study of how teacher model architecture and performance affects student model quality under knowledge distillation. Distilled models consistently outperform scratch-trained baselines.",
    date: "2023-06",
    github: "https://github.com/javi99/understanding_knowledge_distillation",
    report:
      "https://drive.google.com/file/d/1W_vd73yVq9MQn3fngWwFEVmdBdyKPiUa/view?usp=drive_link",
    tags: ["PyTorch", "Knowledge Distillation", "Deep Learning", "Python"],
  },
  {
    name: "Q-REPS: RL Algorithm for Continuous Action Spaces",
    description:
      "Study of Q-REPS, an RL algorithm addressing limitations of traditional Bellman error functions. Applied to the cart-pole benchmark and compared against A2C and PPO.",
    date: "2023-07",
    github: "https://github.com/djtom98/RL_qreps",
    report:
      "https://drive.google.com/file/d/171pgW1fqs15Fku3vEeM1k3qnx7wWIBKG/view?usp=drive_link",
    tags: ["Reinforcement Learning", "Q-REPS", "A2C", "PPO", "Python"],
  },
  {
    name: "SVD Decomposition of Story Arcs in Project Gutenberg Novels",
    description:
      "Singular Value Decomposition applied to story arcs scraped from Project Gutenberg. Identifies dominant narrative structures and explores correlation with publication events.",
    date: "2023-03",
    github: "https://github.com/djtom98/Project-Gutenberg",
    report:
      "https://drive.google.com/file/d/11OXOxuAbk9ry1vPyMcM3GKZDPjaqWXs6/view?usp=drive_link",
    tags: ["SVD", "NLP", "Python", "Jupyter"],
  },
  {
    name: "Optimal Bike Station Placement via Network Algorithms",
    description:
      "Applied two graph-based optimisation algorithms to the Sioux Falls network. Key finding: proximate station pairs reduce overall travel latency more effectively than dispersed placement.",
    date: "2023-03",
    github: "https://github.com/4Freye/bike-stations",
    report:
      "https://drive.google.com/file/d/19G-P8uzQKYgf9MuuuwVff15vKhtIn7w9/view?usp=drive_link",
    tags: ["Network Algorithms", "Python", "Optimisation"],
  },
  {
    name: "Preference Learning with the Mallows Rank Model",
    description:
      "Recommender algorithm using Bayesian Mallows model to aggregate partial rankings. Implemented with the BayesMallows R package in a probabilistic Bayesian framework.",
    date: "2023-05",
    github: "https://github.com/djtom98/Bayes-Mallows-Algorithm",
    report:
      "https://drive.google.com/file/d/1Pj7TfB4Gag-wVjoNkQMYuyb6yrLszndO/view?usp=drive_link",
    tags: ["Bayesian Statistics", "Recommender Systems", "R"],
  },
];

export const projects = [
  {
    name: "Aily Super Agent",
    description:
      "Production AI conversational backend powering Aily's chat, benchmarks, and integrations (Outlook, Zoom). FastAPI service with v1/v2/v3 routers, skill-gated agent execution, MCP aggregation layer, and full OpenTelemetry instrumentation. Implements a V3 planner/worker architecture (PydanticAI) alongside a V2 ReAct loop, with RabbitMQ-based streaming hooks and multi-tenant MCP server lifecycle management.",
    tags: ["FastAPI", "PydanticAI", "MCP", "OpenTelemetry", "RabbitMQ", "Python", "Kubernetes"],
  },
  {
    name: "Knowledge Graph Platform",
    description:
      "Greenfield to production Neo4j platform: NLP-driven entity extraction, matching/merging pipelines, GraphRAG, LLM exploration agents, and Pydantic data models.",
    tags: ["Neo4j", "NLP", "LLMs", "GraphRAG", "Python"],
  },
  {
    name: "ML Utilities Library",
    description:
      "Internal scikit-learn-compatible library covering MRMR/SHAP feature selection, Optuna hyperparameter tuning, statistical drift detection, and MLflow lifecycle management. 80%+ test coverage.",
    tags: ["Python", "MLflow", "SHAP", "Optuna", "scikit-learn"],
  },
  {
    name: "LLM Fine-tuning Pipeline",
    description:
      "End-to-end fine-tuning pipeline: mining production chatbot interactions, LoRA fine-tuning, GGUF quantization, and artifact publishing to S3. Served via vLLM engine on Kubernetes.",
    tags: ["LoRA", "vLLM", "Kubernetes", "GGUF", "Hugging Face"],
  },
  {
    name: "GenAI & Data Access Libraries",
    description:
      "Shared GenAI library (embeddings, LLMs, vector DBs, Langfuse) and unified data access layer (PostgreSQL, S3, Azure Blob, OpenSearch, DuckDB) enabling 10+ services.",
    tags: ["LangChain", "OpenSearch", "Langfuse", "Python", "PostgreSQL"],
  },
  {
    name: "FastAPI Model-Serving Framework",
    description:
      "Standardised serving framework adopted org-wide — factory pattern, middleware, health checks, Datadog APM tracing, and multi-tenant MLflow model loading with Locust load tests.",
    tags: ["FastAPI", "MLflow", "Datadog", "Python", "Kubernetes"],
  },
  {
    name: "GraphSAGE for Financial NLP",
    description:
      "Novel inductive GraphSAGE variant to learn embeddings from Knowledge Graphs extracted from earnings-call transcripts, estimating cumulative abnormal returns in the 30-day post-event window.",
    tags: ["GraphSAGE", "GNN", "NLP", "PyTorch", "Knowledge Graphs"],
  },
];

export const achievements = [
  {
    title: "TEDxMACE 2021 — Licensee & Organiser",
    description:
      "Led a 35-person team to deliver a national TEDx conference with speakers across India.",
  },
  {
    title: "SAE Six Sigma Convention — National Winner",
    description:
      "Applied DMAIC methodology to a complex case study at the Society of Automotive Engineers national convention.",
  },
  {
    title: "SAE Autonomous Vehicle Challenge — National Winner",
    description:
      "Developed ADAS-based vehicle/pedestrian detection system in MATLAB.",
  },
];
