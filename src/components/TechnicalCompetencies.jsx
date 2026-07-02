// Components/TechnicalCompetencies.jsx
import React, { useMemo, useState } from "react";

/* =====================================================================
   SKILLS DATA
   ===================================================================== */

const SKILLS = [
  // -------------------- ML / Data --------------------
  { name: "PyTorch", cat: "ML / Data" },
  { name: "TensorFlow / Keras", cat: "ML / Data" },
  { name: "scikit-learn", cat: "ML / Data" },
  { name: "Pandas", cat: "ML / Data" },
  { name: "NumPy", cat: "ML / Data" },
  { name: "HuggingFace Transformers", cat: "ML / Data" },
  { name: "ONNX / TorchScript", cat: "ML / Data" },
  { name: "OpenVINO / TF Lite", cat: "ML / Data" },
  { name: "LoRA / QLoRA", cat: "ML / Data" },
  { name: "Quantization (INT8/FP16)", cat: "ML / Data" },
  { name: "NLP & Sentiment Analysis", cat: "ML / Data" },
  { name: "Time-Series Forecasting", cat: "ML / Data" },
  { name: "Feature Engineering", cat: "ML / Data" },
  { name: "Data Visualization (Matplotlib/Plotly)", cat: "ML / Data" },
  { name: "TSFresh (Automated Feature Extraction)", cat: "ML / Data" },
  { name: "Walk-Forward Validation", cat: "ML / Data" },
  { name: "Hyperparameter Tuning", cat: "ML / Data" },
  { name: "BERTScore / ROUGE-L", cat: "ML / Data" },

  // -------------------- Models --------------------
  { name: "ARDL", cat: "Models", group: "Classical" },
  { name: "VAR", cat: "Models", group: "Classical" },
  { name: "ARIMA", cat: "Models", group: "Classical" },
  { name: "SARIMA", cat: "Models", group: "Classical" },
  { name: "ARIMAX", cat: "Models", group: "Classical" },
  { name: "SARIMAX", cat: "Models", group: "Classical" },
  { name: "Random Forest", cat: "Models", group: "Machine Learning" },
  { name: "XGBoost", cat: "Models", group: "Machine Learning" },
  { name: "LightGBM", cat: "Models", group: "Machine Learning" },
  { name: "CatBoost", cat: "Models", group: "Machine Learning" },
  { name: "Decision Tree", cat: "Models", group: "Machine Learning" },
  { name: "Isolation Forest", cat: "Models", group: "Machine Learning" },
  { name: "MARS", cat: "Models", group: "Machine Learning" },
  { name: "RNN", cat: "Models", group: "Deep Learning" },
  { name: "GRU", cat: "Models", group: "Deep Learning" },
  { name: "LSTM", cat: "Models", group: "Deep Learning" },
  { name: "Transformer", cat: "Models", group: "Deep Learning" },
  { name: "GNN (Graph Neural Network)", cat: "Models", group: "Deep Learning" },
  { name: "CNN", cat: "Models", group: "Deep Learning" },
  { name: "TFT (Temporal Fusion Transformer)", cat: "Models", group: "Deep Learning" },
  { name: "TCN (Temporal Convolutional Network)", cat: "Models", group: "Deep Learning" },
  { name: "TiDE", cat: "Models", group: "Deep Learning" },
  { name: "N-BEATSx", cat: "Models", group: "Deep Learning" },
  { name: "N-HiTS", cat: "Models", group: "Deep Learning" },
  { name: "MLP (Multi-Layer Perceptron)", cat: "Models", group: "Deep Learning" },
  { name: "AutoEncoder (AE)", cat: "Models", group: "Anomaly / Reconstruction" },
  { name: "Variational AutoEncoder (VAE)", cat: "Models", group: "Anomaly / Reconstruction" },
  { name: "VFAE (Variational Fair AutoEncoder)", cat: "Models", group: "Anomaly / Reconstruction" },
  { name: "Temporal AutoEncoder", cat: "Models", group: "Anomaly / Reconstruction" },
  { name: "ResNet18", cat: "Models", group: "Vision" },
  { name: "NeRF / Nerfstudio", cat: "Models", group: "Vision" },
  { name: "BLIP", cat: "Models", group: "Vision" },
  { name: "CLIP", cat: "Models", group: "Vision" },
  { name: "MiniLM (Sentence Embeddings)", cat: "Models", group: "Retrieval / Text" },
  { name: "FLAN-T5", cat: "Models", group: "Retrieval / Text" },
  { name: "PSO (Particle Swarm Optimisation)", cat: "Models", group: "Evolutionary Optimisers" },
  { name: "MPA (Marine Predators)", cat: "Models", group: "Evolutionary Optimisers" },
  { name: "LM-IMPA", cat: "Models", group: "Evolutionary Optimisers" },

  // -------------------- Privacy & Federated AI --------------------
  { name: "Federated Learning (FedProx / FedAvg)", cat: "Privacy & Federated AI" },
  { name: "Differential Privacy (DP-SGD)", cat: "Privacy & Federated AI" },
  { name: "SHAP (Shapley Values)", cat: "Privacy & Federated AI" },
  { name: "LIME (Local Interpretable Models)", cat: "Privacy & Federated AI" },
  { name: "Welford Online Statistics", cat: "Privacy & Federated AI" },
  { name: "Privacy-Preserving ML", cat: "Privacy & Federated AI" },
  { name: "Gradient Clipping & Noise Injection", cat: "Privacy & Federated AI" },
  { name: "GDPR Compliance in ML", cat: "Privacy & Federated AI" },
  { name: "Data Anonymisation / Pseudonymisation", cat: "Privacy & Federated AI" },
  { name: "Non-IID Federated Training", cat: "Privacy & Federated AI" },

  // -------------------- Security & IAM --------------------
  { name: "Zero Trust Architecture", cat: "Security & IAM" },
  { name: "OAuth2 / SSO", cat: "Security & IAM" },
  { name: "RBAC / ABAC", cat: "Security & IAM" },
  { name: "Active Directory", cat: "Security & IAM" },
  { name: "JWT / Session Management", cat: "Security & IAM" },
  { name: "Device Fingerprinting & Trust", cat: "Security & IAM" },
  { name: "Behavioural Biometrics", cat: "Security & IAM" },
  { name: "Risk-Based Authentication", cat: "Security & IAM" },
  { name: "Anomaly Detection (IAM)", cat: "Security & IAM" },
  { name: "GeoIP & Impossible Travel Detection", cat: "Security & IAM" },
  { name: "Adversarial Simulation & Fuzzing", cat: "Security & IAM" },
  { name: "SOC Integration", cat: "Security & IAM" },
  { name: "Threat Intelligence Enrichment", cat: "Security & IAM" },
  { name: "SQLCipher / Key Isolation", cat: "Security & IAM" },
  { name: "Certificate Pinning / TLS", cat: "Security & IAM" },
  { name: "OWASP Secure Development", cat: "Security & IAM" },
  { name: "Audit Logging & NDJSON Export", cat: "Security & IAM" },
  { name: "Rate Limiting & Abuse Guards", cat: "Security & IAM" },
  { name: "Argon2id / Bcrypt Password Hashing", cat: "Security & IAM" },
  { name: "CORS & Security Headers", cat: "Security & IAM" },
  { name: "Input Validation & Sanitisation", cat: "Security & IAM" },

  // -------------------- Agentic AI --------------------
  { name: "LangChain", cat: "Agentic AI" },
  { name: "FAISS Vector Store", cat: "Agentic AI" },
  { name: "RAG Pipelines (Dense + Hybrid)", cat: "Agentic AI" },
  { name: "Multi-Agent Frameworks", cat: "Agentic AI" },
  { name: "Tool Calling / Function Use", cat: "Agentic AI" },
  { name: "Memory Systems (Short-term / Episodic)", cat: "Agentic AI" },
  { name: "Hallucination Guards", cat: "Agentic AI" },
  { name: "Agentic Reasoning Loops", cat: "Agentic AI" },
  { name: "Multimodal Retrieval (BLIP / CLIP)", cat: "Agentic AI" },
  { name: "Prompt Engineering & Evaluation", cat: "Agentic AI" },

  // -------------------- Frameworks --------------------
  { name: "Flask", cat: "Frameworks" },
  { name: "FastAPI", cat: "Frameworks" },
  { name: "React", cat: "Frameworks" },
  { name: "Node.js / Express", cat: "Frameworks" },
  { name: "Streamlit", cat: "Frameworks" },
  { name: "Vite", cat: "Frameworks" },
  { name: "SQLAlchemy", cat: "Frameworks" },
  { name: "REST APIs", cat: "Frameworks" },
  { name: "Web Scraping (Playwright / BS4 / Selenium)", cat: "Frameworks" },
  { name: "Flutter", cat: "Frameworks" },
  { name: "OpenGL / GLSL (Blinn-Phong)", cat: "Frameworks" },
  { name: "Odoo ERP", cat: "Frameworks" },
  { name: "n8n (Workflow Automation)", cat: "Frameworks" },

  // -------------------- Databases --------------------
  { name: "PostgreSQL", cat: "Databases" },
  { name: "MySQL", cat: "Databases" },
  { name: "MongoDB", cat: "Databases" },
  { name: "SQLite", cat: "Databases" },
  { name: "Redis", cat: "Databases" },
  { name: "Vector DB (FAISS / NumPy)", cat: "Databases" },

  // -------------------- Languages --------------------
  { name: "Python", cat: "Languages" },
  { name: "JavaScript / TypeScript", cat: "Languages" },
  { name: "C / C++", cat: "Languages" },
  { name: "Java", cat: "Languages" },
  { name: "SQL", cat: "Languages" },
  { name: "Bash", cat: "Languages" },
  { name: "HTML / CSS", cat: "Languages" },
  { name: "Prolog (SWI-Prolog)", cat: "Languages" },

  // -------------------- Cloud & Platform --------------------
  { name: "AWS (EC2, S3, Lambda, CloudFront, IAM)", cat: "Cloud & Platform" },
  { name: "Azure (Compute / ML Endpoints)", cat: "Cloud & Platform" },
  { name: "GCP (Google Cloud Platform)", cat: "Cloud & Platform" },
  { name: "Docker", cat: "Cloud & Platform" },
  { name: "Kubernetes", cat: "Cloud & Platform" },
  { name: "Terraform", cat: "Cloud & Platform" },
  { name: "GitHub Actions (CI/CD)", cat: "Cloud & Platform" },
  { name: "Linux / Bash Admin", cat: "Cloud & Platform" },

  // -------------------- DevOps & Tools --------------------
  { name: "Git / GitHub / GitLab", cat: "DevOps & Tools" },
  { name: "Jupyter / Notebooks", cat: "DevOps & Tools" },
  { name: "VS Code / IntelliJ", cat: "DevOps & Tools" },
  { name: "Postman", cat: "DevOps & Tools" },
  { name: "Anaconda / venv", cat: "DevOps & Tools" },
  { name: "Chrome DevTools", cat: "DevOps & Tools" },
  { name: "Makefile Orchestration", cat: "DevOps & Tools" },
  { name: "pytest / unittest", cat: "DevOps & Tools" },

  // -------------------- Edge & Robotics --------------------
  { name: "ROS2 (Robot Operating System)", cat: "Edge & Robotics" },
  { name: "LiDAR-Camera Fusion", cat: "Edge & Robotics" },
  { name: "PID Control", cat: "Edge & Robotics" },
  { name: "SLAM", cat: "Edge & Robotics" },
  { name: "OpenCV", cat: "Edge & Robotics" },
  { name: "NVIDIA Jetson / Intel Movidius", cat: "Edge & Robotics" },
  { name: "Gazebo / RViz Simulation", cat: "Edge & Robotics" },
  { name: "COLMAP (3D Reconstruction)", cat: "Edge & Robotics" },

  // -------------------- Finance & Analytics --------------------
  { name: "Financial Statement Analysis", cat: "Finance & Analytics" },
  { name: "Cash Flow Forecasting", cat: "Finance & Analytics" },
  { name: "Market Trend / Equity Research", cat: "Finance & Analytics" },
  { name: "Data-Driven Financial Models", cat: "Finance & Analytics" },
  { name: "Portfolio Analysis", cat: "Finance & Analytics" },

  // -------------------- Methods & Practices --------------------
  { name: "Agile / Scrum / Kanban", cat: "Methods & Practices" },
  { name: "TDD / BDD", cat: "Methods & Practices" },
  { name: "CI/CD Pipelines", cat: "Methods & Practices" },
  { name: "OOP & Design Patterns (SOLID)", cat: "Methods & Practices" },
  { name: "API Design & Versioning", cat: "Methods & Practices" },
  { name: "Security & Privacy by Design", cat: "Methods & Practices" },
  { name: "Performance Profiling & Optimisation", cat: "Methods & Practices" },
  { name: "ML Reproducibility & Experiment Tracking", cat: "Methods & Practices" },
  { name: "Code Review & Pair Programming", cat: "Methods & Practices" },
  { name: "Technical Documentation", cat: "Methods & Practices" },
];

const CATEGORIES = [
  "ML / Data",
  "Models",
  "Privacy & Federated AI",
  "Security & IAM",
  "Agentic AI",
  "Frameworks",
  "Databases",
  "Languages",
  "Cloud & Platform",
  "DevOps & Tools",
  "Edge & Robotics",
  "Finance & Analytics",
  "Methods & Practices",
];

const MODEL_GROUPS = [
  "Classical",
  "Machine Learning",
  "Deep Learning",
  "Anomaly / Reconstruction",
  "Vision",
  "Retrieval / Text",
  "Evolutionary Optimisers",
];

/* =====================================================================
   COMPONENTS
   ===================================================================== */

function Pill({ name }) {
  return <span className="spill">{name}</span>;
}

function ModelsBlock({ items }) {
  const [collapsed, setCollapsed] = useState(true);
  const byGroup = {};
  for (const g of MODEL_GROUPS) byGroup[g] = [];
  for (const s of items) {
    const g = s.group || "Other";
    if (!byGroup[g]) byGroup[g] = [];
    byGroup[g].push(s);
  }
  const groups = MODEL_GROUPS.filter((g) => byGroup[g]?.length > 0);
  const visibleGroups = collapsed ? groups.slice(0, 3) : groups;

  return (
    <section className="block models-block">
      <header className="block-head">
        <h3>Models</h3>
        {groups.length > 3 && (
          <button className="link-btn" onClick={() => setCollapsed((c) => !c)}>
            {collapsed ? "Show all" : "Collapse"}
          </button>
        )}
      </header>
      {visibleGroups.map((g) => (
        <div key={g} className="model-group">
          <div className="model-group-label">{g}</div>
          <div className="pill-row">
            {byGroup[g].map((s, i) => <Pill key={i} name={s.name} />)}
          </div>
        </div>
      ))}
    </section>
  );
}

function CategoryBlock({ title, items }) {
  const [collapsed, setCollapsed] = useState(true);
  const limit = 8;
  const shown = collapsed ? items.slice(0, Math.min(limit, items.length)) : items;
  return (
    <section className="block">
      <header className="block-head">
        <h3>{title}</h3>
        {items.length > limit && (
          <button className="link-btn" onClick={() => setCollapsed((c) => !c)}>
            {collapsed ? `+${items.length - limit} more` : "Collapse"}
          </button>
        )}
      </header>
      <div className="pill-row">
        {shown.map((s, i) => <Pill key={i} name={s.name} />)}
      </div>
    </section>
  );
}

export default function TechnicalCompetencies() {
  const [q, setQ] = useState("");
  const [activeCats, setActiveCats] = useState(new Set(CATEGORIES));

  const toggleCat = (c) => {
    setActiveCats((prev) => {
      const n = new Set(prev);
      n.has(c) ? n.delete(c) : n.add(c);
      return n;
    });
  };

  const grouped = useMemo(() => {
    const text = q.trim().toLowerCase();
    const filtered = SKILLS.filter((s) => {
      if (!activeCats.has(s.cat)) return false;
      if (!text) return true;
      return (
        s.name.toLowerCase().includes(text) ||
        s.cat.toLowerCase().includes(text) ||
        (s.group || "").toLowerCase().includes(text)
      );
    });
    const map = new Map();
    for (const c of CATEGORIES) map.set(c, []);
    for (const s of filtered) {
      if (!map.has(s.cat)) map.set(s.cat, []);
      map.get(s.cat).push(s);
    }
    return map;
  }, [q, activeCats]);

  return (
    <div className="tc-wrap">
      <div className="filterbar">
        <input
          className="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search skills..."
          aria-label="Search skills"
        />
        <div className="filter-header">
          <span className="filter-title">Filter by category</span>
          {activeCats.size < CATEGORIES.length && (
            <button className="link-btn" onClick={() => setActiveCats(new Set(CATEGORIES))}>
              Reset
            </button>
          )}
        </div>
        <div className="pills">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`pill ${activeCats.has(c) ? "on" : ""}`}
              onClick={() => toggleCat(c)}
              aria-pressed={activeCats.has(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="tc-grid">
        {CATEGORIES.map((c) => {
          const items = grouped.get(c) || [];
          if (!items.length) return null;
          if (c === "Models") return <ModelsBlock key={c} items={items} />;
          return <CategoryBlock key={c} title={c} items={items} />;
        })}
      </div>

      <style>{`
        .tc-wrap {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding-bottom: 2rem;
        }

        .tc-grid {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 16px;
          align-items: stretch;
        }
        @media (min-width: 640px) {
          .tc-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1020px) {
          .tc-grid { grid-template-columns: repeat(3, 1fr); }
        }
        .tc-grid .models-block { grid-column: span 2; }
        @media (max-width: 639px) {
          .tc-grid .models-block { grid-column: span 1; }
        }

        .filterbar {
          position: sticky;
          top: 120px;
          z-index: 2;
          padding-bottom: .5rem;
          margin-bottom: .75rem;
        }
        .search {
          width: 100%;
          padding: .65rem .9rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          color: #f0f0f8;
          box-shadow: 0 4px 14px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
          outline: none;
          font-size: 0.95rem;
        }
        .filter-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: .7rem;
        }
        .filter-title {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(240,240,248,0.4);
        }
        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: .4rem;
          margin-top: .5rem;
          padding: 10px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .pill {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 999px;
          padding: .28rem .62rem;
          font-weight: 700;
          font-size: .8rem;
          cursor: pointer;
          transition: background .15s ease, box-shadow .15s ease;
          color: rgba(240,240,248,0.8);
        }
        .pill.on {
          background: rgba(255,255,255,0.22);
          box-shadow: 0 3px 10px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15);
          color: #f0f0f8;
        }

        .block {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 16px;
          padding: 1.1rem 1.2rem 1.3rem;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .block-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: .5rem;
        }
        .block-head h3 {
          margin: 0;
          font-size: clamp(.95rem, 1.8vw, 1.15rem);
          font-weight: 800;
          color: #f0f0f8;
          letter-spacing: -0.01em;
        }
        .link-btn {
          background: transparent;
          border: none;
          color: #0b63ce;
          font-weight: 700;
          font-size: .82rem;
          cursor: pointer;
          padding: .18rem .4rem;
          border-radius: 6px;
          white-space: nowrap;
        }
        .link-btn:hover { text-decoration: underline; }

        .pill-row {
          display: flex;
          flex-wrap: wrap;
          gap: .38rem;
        }

        .spill {
          display: inline-block;
          padding: .26rem .58rem;
          border-radius: 7px;
          font-size: .84rem;
          font-weight: 700;
          background: rgba(38,38,52,0.9);
          border: 1px solid rgba(255,255,255,0.15);
          box-shadow: 0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1);

          color: rgba(240,240,248,0.85);
          cursor: default;
          white-space: nowrap;
          transition: background .12s ease, transform .1s ease;
          letter-spacing: -0.005em;
        }
        .spill:hover {
          background: rgba(255,255,255,0.16);
          transform: translateY(-1px);
        }

        .model-group { margin-bottom: .65rem; }
        .model-group-label {
          font-size: .73rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .07em;
          color: rgba(240,240,248,0.38);
          margin-bottom: .32rem;
        }

        @media (max-width: 720px) {
          .spill { font-size: .8rem; padding: .22rem .48rem; }
          .pill { font-size: .78rem; }
        }
      `}</style>
    </div>
  );
}
