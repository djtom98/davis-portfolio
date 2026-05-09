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
      "Built and maintain a shared GenAI library (embeddings, LLMs, vector DBs, Langfuse integration) and a unified data access layer enabling 10+ services to share a single tested data surface.",
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

export const projects = [
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
