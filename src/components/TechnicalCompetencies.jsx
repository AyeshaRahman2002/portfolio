// Components/TechnicalCompetencies.jsx
import React, { useMemo, useState } from "react";

const SKILLS = [
  // -------------------- Languages --------------------
  { name: "Python", cat: "Languages", level: 3, note: "Data/ML, automation, web, APIs." },
  { name: "JavaScript", cat: "Languages", level: 3, note: "Frontend interactivity, tooling, Node." },
  { name: "TypeScript", cat: "Languages", level: 3, note: "Types + DX improvements for JS apps." },
  { name: "HTML/CSS", cat: "Languages", level: 3, note: "Responsive UI, modern layout (Grid/Flex)." },
  { name: "C/C++", cat: "Languages", level: 3, note: "Systems fundamentals, perf-sensitive code." },
  { name: "C", cat: "Languages", level: 3, note: "Low-level concepts, memory, pointers." },
  { name: "Java", cat: "Languages", level: 3, note: "OOP, data structures, backend basics." },
  { name: "SQL", cat: "Languages", level: 3, note: "Queries, joins, indexing, modeling." },
  { name: "Bash", cat: "Languages", level: 3, note: "CLI automation, scripting, env setup." },
  { name: "Prolog (SWI-Prolog)", cat: "Languages", level: 3, note: "Logic programming & reasoning tasks." },

  // -------------------- ML / Data --------------------
  { name: "Pandas", cat: "ML / Data", level: 3, note: "EDA, wrangling, feature pipelines." },
  { name: "NumPy", cat: "ML / Data", level: 3, note: "Vectorization, numerical routines." },
  { name: "scikit-learn", cat: "ML / Data", level: 3, note: "Classical ML, CV, metrics, pipelines." },
  { name: "PyTorch", cat: "ML / Data", level: 3, note: "DL, time-series (N-BEATSx / N-HiTS)." },
  { name: "TensorFlow/Keras", cat: "ML / Data", level: 3, note: "Modeling & training workflows." },
  { name: "Hugging Face (Transformers)", cat: "ML / Data", level: 3, note: "NLP/LLMs, finetune & inference." },
  { name: "NLP & Sentiment Analysis", cat: "ML / Data", level: 3, note: "Tokenization, embeddings, classifiers." },
  { name: "Time-Series Forecasting", cat: "ML / Data", level: 3, note: "ARIMA/Prophet/DL for finance & demand." },
  { name: "Data Visualization (Matplotlib/Plotly)", cat: "ML / Data", level: 3, note: "Explainers, dashboards, storyboards." },
  { name: "Feature Engineering & Evaluation", cat: "ML / Data", level: 3, note: "Scaling, leakage checks, metrics." },

  // -------------------- Frameworks / Backend --------------------
  { name: "Flask", cat: "Frameworks", level: 3, note: "Full-stack sites, simple APIs, templating." },
  { name: "FastAPI", cat: "Frameworks", level: 3, note: "Typed ML services with OpenAPI docs." },
  { name: "Node.js", cat: "Frameworks", level: 3, note: "Server runtimes, tooling scripts." },
  { name: "Express", cat: "Frameworks", level: 3, note: "REST endpoints, middleware, auth." },
  { name: "React", cat: "Frameworks", level: 3, note: "SPA UI, state, hooks, component patterns." },
  { name: "Vite", cat: "Frameworks", level: 3, note: "Fast dev/build for JS/TS apps." },
  { name: "REST APIs", cat: "Frameworks", level: 3, note: "Design, versioning, pagination, errors." },
  { name: "Web Scraping (Requests/BS4/Selenium)", cat: "Frameworks", level: 3, note: "Flights & hotel pricing collectors." },

  // -------------------- Databases --------------------
  { name: "MySQL", cat: "Databases", level: 3, note: "Schema design, queries, perf basics." },
  { name: "PostgreSQL", cat: "Databases", level: 3, note: "Relational modeling, views, indexing." },
  { name: "SQLite", cat: "Databases", level: 3, note: "Embedded DB for apps & prototyping." },
  { name: "MongoDB", cat: "Databases", level: 3, note: "Document modeling, aggregation." },

  // -------------------- DevOps & Tools --------------------
  { name: "Git", cat: "DevOps & Tools", level: 3, note: "Branching, PRs, conflict resolution." },
  { name: "GitHub / GitLab", cat: "DevOps & Tools", level: 3, note: "Repos, issues, code review workflows." },
  { name: "GitHub Actions (CI/CD)", cat: "DevOps & Tools", level: 3, note: "Build/test/deploy pipelines." },
  { name: "Docker", cat: "DevOps & Tools", level: 3, note: "Images, multi-stage builds, compose." },
  { name: "Jupyter / Notebooks", cat: "DevOps & Tools", level: 3, note: "EDA, reports, demos." },
  { name: "VS Code", cat: "DevOps & Tools", level: 3, note: "Debugging, extensions, tasks." },
  { name: "IntelliJ IDEA", cat: "DevOps & Tools", level: 3, note: "Java tooling & refactors." },
  { name: "Chrome DevTools", cat: "DevOps & Tools", level: 3, note: "Perf audit, network, accessibility." },
  { name: "Anaconda", cat: "DevOps & Tools", level: 3, note: "Env & package management for data." },
  { name: "Linux Shell", cat: "DevOps & Tools", level: 3, note: "Processes, permissions, tooling." },
  { name: "Postman", cat: "DevOps & Tools", level: 3, note: "API testing, collections, mocks." },

  // -------------------- Cloud & Platform --------------------
  { name: "AWS (EC2/S3/Lambda — basics)", cat: "Cloud & Platform", level: 3, note: "Deploy ML/web services." },
  { name: "Azure (basics)", cat: "Cloud & Platform", level: 3, note: "Compute/storage, ML endpoints." },
  { name: "Heroku", cat: "Cloud & Platform", level: 3, note: "Quick app deploys & demos." },
  { name: "Linux", cat: "Cloud & Platform", level: 3, note: "Servers, services, monitoring basics." },
  { name: "Windows", cat: "Cloud & Platform", level: 3, note: "Desktop & dev workflows." },
  { name: "macOS", cat: "Cloud & Platform", level: 3, note: "Local dev & tooling." },

  // -------------------- Finance & Analytics (kept mixed) --------------------
  { name: "Financial Statement Analysis", cat: "Finance & Analytics", level: 2, note: "Income, balance, cash-flow links." },
  { name: "Cash Flow Forecasting", cat: "Finance & Analytics", level: 2, note: "Short/long-term projections." },
  { name: "Market Trend / Equity Research", cat: "Finance & Analytics", level: 2, note: "Sector comps, signals, reporting." },
  { name: "Portfolio Analysis (basic)", cat: "Finance & Analytics", level: 2, note: "Risk/return intuition, constraints." },
  { name: "Data-Driven Financial Models", cat: "Finance & Analytics", level: 2, note: "ML + fundamentals for decisions." },

  // -------------------- Methods & Practices (expanded) --------------------
  { name: "Agile / Scrum / Kanban", cat: "Methods & Practices", level: 3, note: "Sprints, standups, retros, WIP limits." },
  { name: "TDD / BDD", cat: "Methods & Practices", level: 3, note: "Red-green-refactor, spec by example." },
  { name: "CI/CD", cat: "Methods & Practices", level: 3, note: "Automated build, test, deploy." },
  { name: "OOP & Design Patterns", cat: "Methods & Practices", level: 3, note: "SOLID, layering, reuse." },
  { name: "Project Management", cat: "Methods & Practices", level: 3, note: "Scopes, milestones, risk tracking." },
  { name: "Sprint Planning & Backlog Grooming", cat: "Methods & Practices", level: 3, note: "Prioritization, sizing, roadmaps." },
  { name: "Code Review & Pair Programming", cat: "Methods & Practices", level: 3, note: "Quality, knowledge sharing." },
  { name: "Unit/Integration Testing", cat: "Methods & Practices", level: 3, note: "Coverage, test pyramids." },
  { name: "Branching Strategies (GitFlow)", cat: "Methods & Practices", level: 3, note: "Stable main, releases, hotfixes." },
  { name: "Documentation & Knowledge Sharing", cat: "Methods & Practices", level: 3, note: "READMEs, ADRs, onboarding notes." },
  { name: "API Design & Versioning", cat: "Methods & Practices", level: 3, note: "Resources, pagination, errors." },
  { name: "Security & Privacy by Design (basics)", cat: "Methods & Practices", level: 3, note: "Auth, input validation, secrets." },
  { name: "Performance Profiling & Optimization", cat: "Methods & Practices", level: 3, note: "Bottlenecks, caching, async." },
  { name: "Experimentation & A/B Testing", cat: "Methods & Practices", level: 3, note: "Hypotheses, metrics, guardrails." },
  { name: "Data/ML Reproducibility & Tracking", cat: "Methods & Practices", level: 3, note: "Seeds, artifacts, run logs." },
  { name: "Prompt Engineering & Evaluation", cat: "Methods & Practices", level: 3, note: "Edge cases, safety, QA workflows." },
  { name: "Requirements & Stakeholder Communication", cat: "Methods & Practices", level: 3, note: "User stories, acceptance criteria." },
];

const CATEGORIES = [
  "Languages",
  "ML / Data",
  "Frameworks",
  "Databases",
  "DevOps & Tools",
  "Cloud & Platform",
  "Finance & Analytics",
  "Methods & Practices",
];

function LevelDots({ n }) {
  return (
    <span className="dots" aria-label={`Level ${n}`}>
      {"●".repeat(n)} <span className="faded">{"●".repeat(Math.max(0, 3 - n))}</span>
    </span>
  );
}

function SkillChip({ skill }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`chip ${open ? "open" : ""}`}>
      <button className="chip-btn" onClick={() => setOpen((v) => !v)}>
        <div className="chip-title">{skill.name}</div>
        <div className="chip-meta">
          <LevelDots n={skill.level} />
        </div>
        <span className="chev" aria-hidden>▾</span>
      </button>
      {open && skill.note && <div className="chip-body">{skill.note}</div>}
    </div>
  );
}

function CategoryBlock({ title, items }) {
  const [collapsed, setCollapsed] = useState(true);
  const limit = 10;
  const shown = collapsed ? items.slice(0, Math.min(limit, items.length)) : items;
  return (
    <section className="block">
      <header className="block-head">
        <h3>{title}</h3>
        <div className="block-actions">
          {items.length > limit && (
            <button className="link-btn" onClick={() => setCollapsed((c) => !c)}>
              {collapsed ? "Show all" : "Collapse"}
            </button>
          )}
        </div>
      </header>
      <div className="grid">
        {shown.map((s, i) => (
          <SkillChip key={`${title}-${i}-${s.name}`} skill={s} />
        ))}
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
      return s.name.toLowerCase().includes(text) || s.cat.toLowerCase().includes(text);
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
    <div className="wrap">

      {/* FILTER BAR */}
      <div className="filterbar">
        <input
          className="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter skills…"
          aria-label="Filter skills"
        />
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

      {/* CATEGORY BLOCKS */}
      {CATEGORIES.map((c) => {
        const items = grouped.get(c) || [];
        if (!items.length) return null;
        return <CategoryBlock key={c} title={c} items={items} />;
      })}

      {/* styles */}
      <style>{`
        .wrap { width: 100%; max-width: 1100px; margin: 0 auto; }
        .title {
          margin: 0 0 1rem 0;
          font-size: clamp(1.6rem, 3.6vw, 2.1rem);
          font-weight: 900; letter-spacing: -0.01em; color: rgb(36,36,42);
        }

        .filterbar {
          position: sticky;
          top: 120px;
          z-index: 2;
          background: transparent;
          padding-bottom: .5rem;
          margin-bottom: .5rem;
        }
        .search {
          width: 100%;
          padding: .75rem .9rem;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.65);
          box-shadow: 0 6px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          outline: none; font-size: 0.95rem;
        }
        .pills { display: flex; flex-wrap: wrap; gap: .5rem; margin-top: .6rem; }
        .pill {
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.6);
          border-radius: 999px; padding: .4rem .7rem;
          font-weight: 700; font-size: .9rem; cursor: pointer;
          transition: transform .15s ease, box-shadow .2s ease, background .2s;
        }
        .pill.on { background: rgba(255,255,255,0.9); box-shadow: 0 6px 16px rgba(0,0,0,0.08); }
        .pill:active { transform: translateY(1px); }

        .block { margin-top: 1rem; }
        .block-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: .6rem;
        }
        .block-head h3 {
          margin: 0; font-size: clamp(1.1rem, 2.4vw, 1.35rem);
          font-weight: 800; color: rgb(36,36,42);
        }
        .link-btn {
          background: transparent; border: none; color: #0b63ce; font-weight: 700;
          cursor: pointer; padding: .25rem .4rem; border-radius: 8px;
        }
        .link-btn:hover { text-decoration: underline; }

        .grid { display: flex; flex-wrap: wrap; gap: .9rem; }
        .chip {
          flex: 1 1 260px;
          border-radius: 16px;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: 0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          overflow: hidden;
          transition: transform 220ms cubic-bezier(.22,.9,.35,1), box-shadow 220ms;
          align-self: flex-start;
        }
        .chip:hover { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 36px rgba(0,0,0,0.18); }
        .chip-btn {
          width: 100%;
          display: grid; grid-template-columns: 1fr auto; gap: .35rem;
          text-align: left; padding: .9rem 1rem; background: transparent; border: none; cursor: pointer;
        }
        .chip-title { font-weight: 800; color: rgb(36,36,42); font-size: .98rem; letter-spacing: -0.01em; }
        .chip-meta {
          grid-column: 1 / -1; display: flex; align-items: center; gap: .5rem;
          color: rgba(36,36,42,0.72); font-weight: 700; font-size: .9rem;
        }
        .dots { letter-spacing: .15rem; }
        .faded { opacity: .25; }
        .chev { align-self: center; transform: rotate(0deg); transition: transform .2s ease; opacity: .6; font-weight: 900; }
        .chip.open .chev { transform: rotate(180deg); }
        .chip-body {
          border-top: 1px solid rgba(0,0,0,0.06);
          background: rgba(255,255,255,0.45);
          padding: .65rem 1rem .9rem; font-size: .92rem; color: rgba(36,36,42,0.9);
        }
        @media (max-width: 720px) { .chip-btn { padding: .8rem .9rem; } }
      `}</style>
    </div>
  );
}
