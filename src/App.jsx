import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { createPortal } from "react-dom";
import myPic from "./profile.jpg";
const ProjectCards = lazy(() => import("./components/ProjectCards"));
const TechnicalCompetencies = lazy(() => import("./components/TechnicalCompetencies"));
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Blog1 from "./components/blog1.jsx";
import Blog2 from "./components/blog2.jsx";
import Blog3 from "./components/blog3.jsx";
import Blog4 from "./components/blog4.jsx";
import Resume from "./assets/Resume-Ayesha.pdf";
const BASE = import.meta.env.BASE_URL;

const LINKS = { 
  resume: Resume, 
  linkedin: "https://www.linkedin.com/in/ayesha-rahman-ml/", 
  github: "https://github.com/AyeshaRahman2002",
};

const blogPosts = [
  {
    title: "My journey as a computer science student",
    date: "2025-05-21",
    tags: ["Journey", "Student Life", "CS"],
    summary:
      "How building tiny, imperfect projects and a lot of debugging shaped how I learn and ship software.",
    link: "/blog/my-journey",
  },
  {
    title: "The Role of Artificial Intelligence in Transforming Healthcare",
    date: "2025-05-21",
    tags: ["Healthcare", "Artificial Intelligence", "ML", "Security", "Cloud", "Ethics"],
    summary: "My journey discovering Artificial Intelligence integrated in Healthcare",
    link: "/blog/ai-in-healthcare",
  },
  {
    title: "The Role of Artificial Intelligence in Finance",
    date: "2025-05-21",
    tags: ["Finance", "AI", "Forecasting", "NLP", "Security", "Blockchain"],
    summary: "My journey discovering Artificial Intelligence integrated in Finance",
    link: "/blog/ai-in-finance",
  },
  {
    title: "Exploring Cybersecurity through AI and Building a Risk-Aware System",
    date: "2025-05-21",
    tags: ["Cybersecurity", "Adaptive Security", "Risk Intelligence", "Identity", "Explainable AI"],
    summary: "Bulding a secure risk adaptive Identity & Access Control System led me to learn and understand the importance of privacy and data protection.",
    link: "/blog/ai-in-cybersecurity",
  },
];

function ProjectAssistantSideHints() {
  const msg = "Click the images to open the project assistant";

  const base = {
    position: "fixed",
    top: "50%",
    zIndex: 6,
    writingMode: "vertical-rl",
    textOrientation: "mixed",
    whiteSpace: "nowrap",
    fontWeight: 800,
    fontSize: "0.9rem",
    letterSpacing: "0.02em",
    color: "rgba(240,240,255,0.45)",
    pointerEvents: "none",
    userSelect: "none",
  };

  return (
    <>
      {/* Left side rotated so it faces inward */}
      <div style={{ ...base, left: "8px", transform: "translateY(-50%) rotate(180deg)" }}>
        {msg}
      </div>
      {/* Right side default vertical-rl (faces inward) */}
      <div style={{ ...base, right: "8px", transform: "translateY(-50%)" }}>
        {msg}
      </div>

      <style>{`
        @media (max-width: 900px) {
          [data-assistant-hint] { display: none !important; }
        }
      `}</style>
    </>
  );
}

export default function App() {

const [introStage, setIntroStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "AYESHA RAHMAN";

  // Prefetch the (large) Projects chunk during idle time so switching to that
  // tab doesn't stall on downloading + parsing it.
  useEffect(() => {
    const prefetch = () => import("./components/ProjectCards");
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(id);
    }
    const t = setTimeout(prefetch, 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (introStage === 0) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
          setIntroStage(2);
          setTimeout(() => setIntroStage(3), 650);
        }
      }, 55);
      return () => clearInterval(interval);
    }
  }, [introStage]);


const roles = ["AI / ML Engineer", "Cybersecurity Researcher", "Software Engineer"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const stats = [
    "RESEARCH INTERN · KAUST CYBERSECURITY LAB",
    "6+ YEARS IN COMPUTER SCIENCE & AI",
    "MENG & BSC GRADUATE · UNIVERSITY OF LEEDS",
  ];

  // Helper: strip BASE from pathname so routes match cleanly
  const cleanPath = (p) => {
    if (BASE && p.startsWith(BASE)) {
      return p.slice(BASE.length - (BASE.endsWith("/") ? 1 : 0)) || "/";
    }
    return p;
  };

const [route, setRoute] = useState(cleanPath(window.location.pathname));
  const go = (to) => {
    const cleaned = to.startsWith("/") ? to : `/${to}`;
    const target = BASE + cleaned.slice(1);
    if (target !== window.location.pathname) {
      window.history.pushState({}, "", target);
      setRoute(cleanPath(target));
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  useEffect(() => {
    const onPop = () => setRoute(cleanPath(window.location.pathname));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const isBlogList   = route === "/blog";
  const isBlogDetail = route.startsWith("/blog/");

  function renderBlogDetail() {
    switch (route) {
      case "/blog/my-journey":
        return <Blog1 onBack={() => go("/blog")} />;
      case "/blog/ai-in-healthcare":
        return <Blog2 onBack={() => go("/blog")} />;
      case "/blog/ai-in-finance":
        return <Blog3 onBack={() => go("/blog")} />;
      case "/blog/ai-in-cybersecurity":
        return <Blog4 onBack={() => go("/blog")} />;
      default:
        return null;
    }
  }

const tabs = [
    "Home",
    "About Me",
    "Projects",
    "Work Experience",
    "Certifications",
    "Technical Competencies",
    "Blog",
    "Contact",
  ];
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    if (route.startsWith("/blog")) {
      setActiveTab("Blog");
    } else if (activeTab === "Blog") {
      setActiveTab("Home");
    }
  }, [route, activeTab]);  

  // Dropdown tilt
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, glowX: 50, glowY: 50 });

  // About overlay
  const [aboutOpen, setAboutOpen] = useState(false);

  // Projects state
  const [projectCategory, setProjectCategory] = useState("All");
  const [projectSection, setProjectSection] = useState("All");
  const [projMenuOpen, setProjMenuOpen] = useState(false);
  const [projMenuPos, setProjMenuPos] = useState({ top: 0, left: 0 });
  const projTriggerRef = useRef(null);
  const projCloseTimerRef = useRef(null);
  const PROJECT_SECTIONS = [
    { key: "All", label: "All Types" },
    { key: "Work", label: "Work Projects" },
    { key: "Research", label: "Research Projects" },
    { key: "Uni", label: "University Projects" },
    { key: "Virtual", label: "Virtual Experience" },
  ];
  const PROJECT_DOMAINS = ["All", "Finance", "Health", "Robotics", "Graphics", "Systems", "AI/ML", "HCI", "Security"];

  // Dropdown is rendered via a portal (see below) so it isn't clipped by
  // nav's overflowX:auto, which forces overflowY to compute as non-visible.
  const openProjMenu = () => {
    if (projCloseTimerRef.current) {
      clearTimeout(projCloseTimerRef.current);
      projCloseTimerRef.current = null;
    }
    if (projTriggerRef.current) {
      const r = projTriggerRef.current.getBoundingClientRect();
      setProjMenuPos({ top: r.bottom + 8, left: r.left });
    }
    setProjMenuOpen(true);
  };
  const scheduleCloseProjMenu = () => {
    if (projCloseTimerRef.current) clearTimeout(projCloseTimerRef.current);
    projCloseTimerRef.current = setTimeout(() => {
      setProjMenuOpen(false);
      setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
    }, 150);
  };

  useEffect(() => {
    const onDocClick = (e) => {
      const menu = document.getElementById("projects-menu");
      const btn = document.getElementById("projects-btn");
      if (!menu || !btn) return;
      if (!menu.contains(e.target) && !btn.contains(e.target)) setProjMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Hero card 3D tilt
  const [heroTilt, setHeroTilt] = useState({ rx: 0, ry: 0 });

  return (
    <div style={{
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      background: "#09090f",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Dot grid texture */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.055) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* Nav */}
      <nav
        style={{
            position: "fixed",
            top: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "0.4rem",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            overflowX: "auto",
            overflowY: "visible",
            scrollbarWidth: "none",
            backdropFilter: "blur(28px) saturate(160%)",
            WebkitBackdropFilter: "blur(28px) saturate(160%)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.16)",
            borderRadius: "14px",
            padding: "0.6rem 1.2rem",
            boxShadow: "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
            zIndex: 5,
            maxWidth: "min(96vw, 1400px)",
        }}
      >
        {tabs.map((tab) => {
          const isProjects = tab === "Projects";
          const isActive = activeTab === tab;

          if (!isProjects) {
            return (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setProjMenuOpen(false);
                  if (tab === "Home") go("/");
                  else if (tab === "Blog") go("/blog");
                  else go("/");
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#f0f0f8",
                  padding: "0.5rem 0.8rem",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  borderBottom: isActive ? "2px solid #f0f0f8" : "2px solid transparent",
                  transition: "all 0.3s",
                }}
              >
                {tab}
              </button>
            );
          }

          // Projects (with dropdown)
          return (
            <div
              key="Projects"
              ref={projTriggerRef}
              style={{ position: "relative" }}
              onMouseEnter={openProjMenu}
              onMouseLeave={scheduleCloseProjMenu}
            >
              <button
                id="projects-btn"
                aria-haspopup="menu"
                aria-expanded={projMenuOpen ? "true" : "false"}
                onClick={() => {
                  setActiveTab("Projects");
                  setProjectCategory("All");
                  setProjectSection("All");
                  setProjMenuOpen(false);
                  go("/");
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#f0f0f8",
                  padding: "0.5rem 0.8rem",
                  fontWeight: activeTab === "Projects" ? 700 : 500,
                  cursor: "pointer",
                  borderBottom: activeTab === "Projects" ? "2px solid #f0f0f8" : "2px solid transparent",
                  transition: "all 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".4rem",
                }}
                title={
                  projectCategory === "All" && projectSection === "All"
                    ? "Projects"
                    : `Projects • ${[projectSection !== "All" ? projectSection : null, projectCategory !== "All" ? projectCategory : null].filter(Boolean).join(" / ")}`
                }
              >
                Projects <span aria-hidden>▾</span>
              </button>

              {projMenuOpen && createPortal(
                <div
                  id="projects-menu"
                  role="menu"
                  className="glass-menu"
                  onMouseEnter={openProjMenu}
                  onMouseLeave={scheduleCloseProjMenu}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const px = x / rect.width;
                    const py = y / rect.height;
                    const ry = (px - 0.5) * -16;
                    const rx = (py - 0.5) * 16;
                    setTilt({ rx, ry, glowX: px * 100, glowY: py * 100 });
                  }}
                  style={{
                    position: "fixed",
                    top: projMenuPos.top,
                    left: projMenuPos.left,
                    minWidth: "260px",
                    borderRadius: "14px",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: "2px",
                    whiteSpace: "normal",
                    transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
                    transformStyle: "preserve-3d",
                    transition: "transform 180ms ease",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box, border-box, padding-box",
                    backgroundImage: `
                      linear-gradient(to bottom right, rgba(255,255,255,0.08), rgba(255,255,255,0.03)),
                      radial-gradient(120px 80px at ${tilt.glowX}% ${tilt.glowY}%, rgba(160,130,255,0.18), rgba(255,255,255,0))
                    `,
                    boxShadow: `0 10px 30px rgba(0,0,0,0.5)`,
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    zIndex: 9999,
                  }}
                >
                  <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(240,240,248,0.4)", padding: "8px 12px 4px" }}>
                    Type
                  </div>
                  {PROJECT_SECTIONS.map(({ key, label }) => (
                    <button
                      key={key}
                      role="menuitem"
                      className="glass-item"
                      onClick={() => {
                        setActiveTab("Projects");
                        setProjectSection(key);
                        setProjMenuOpen(false);
                        setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
                        go("/");
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        border: "none",
                        background: projectSection === key ? "rgba(255,255,255,0.12)" : "transparent",
                        color: "#f0f0f8",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontWeight: 700,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {label}
                    </button>
                  ))}

                  <div style={{ height: 1, background: "rgba(255,255,255,0.1)", margin: "6px 4px" }} />

                  <div style={{ fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(240,240,248,0.4)", padding: "4px 12px 4px" }}>
                    Domain
                  </div>
                  {PROJECT_DOMAINS.map(
                    (cat) => (
                      <button
                        key={cat}
                        role="menuitem"
                        className="glass-item"
                        onClick={() => {
                          setActiveTab("Projects");
                          setProjectCategory(cat);
                          setProjMenuOpen(false);
                          setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
                          go("/");
                        }}
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "left",
                          border: "none",
                          background: projectCategory === cat ? "rgba(255,255,255,0.12)" : "transparent",
                          color: "#f0f0f8",
                          padding: "10px 12px",
                          borderRadius: "10px",
                          cursor: "pointer",
                          fontWeight: 700,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {cat}
                      </button>
                    )
                  )}
                </div>,
                document.body
              )}
            </div>
          );
        })}
      </nav>

      {/* Intro overlay */}
      {introStage < 3 && (
        <div
          className="intro-overlay"
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#0d0d1a",
            zIndex: 10,
            overflow: "hidden",
            transition: "opacity 0.55s ease",
            opacity: introStage === 2 ? 0 : 1,
            pointerEvents: "none",
          }}
        >
          <h1
            style={{
              color: "#fff",
              margin: 0,
              fontWeight: 800,
              fontFamily: "'Impact', sans-serif",
              fontSize: "8rem",
              letterSpacing: "0.05em",
            }}
          >
            {typedText}
          </h1>
        </div>
      )}

      <style>{`
        .hero {
          width: 100%;
          min-height: calc(100vh - 200px);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          gap: 2rem;
          padding-top: 10vh;
        }
        .hero-card-inner {
          display: flex;
          align-items: stretch;
        }
        .hero-photo-wrap {
          flex-shrink: 0;
          width: clamp(180px, 32%, 300px);
          align-self: stretch;
        }
        .hero-photo {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 380px;
          object-fit: cover;
          object-position: center top;
        }
        .hero-text {
          flex: 1;
          min-width: 0;
          padding: clamp(1.5rem,4vw,2.8rem) clamp(1.5rem,5vw,3.2rem);
        }
        @media (max-width: 640px) {
          .hero-card-inner { flex-direction: column; text-align: center; }
          .hero-photo-wrap { width: 100%; }
          .hero-photo { min-height: 240px; max-height: 300px; }
          .hero-text { width: 100%; padding: 1.5rem; }
          .role-line { justify-content: center; }
          .home-cta { justify-content: center; }
          .stats { align-items: center; }
        }
        .cs-nav-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          width: 100%;
          max-width: 700px;
        }
        @media (max-width: 600px) {
          .cs-nav-grid { grid-template-columns: 1fr; }
        }
        .cs-nav-card {
          background: var(--card-color);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 1rem 1.1rem;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          cursor: pointer;
          text-align: left;
          transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          box-shadow: 0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
          position: relative;
          overflow: hidden;
        }
        .cs-nav-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: var(--card-color);
          opacity: 0;
          transition: opacity 0.18s;
        }
        .cs-nav-card:hover { transform: translateY(-4px) scale(1.02); box-shadow: 0 20px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18); }
        .cs-nav-card:hover::before { opacity: 1; }
        .cs-nav-icon {
          font-family: "Courier New", monospace;
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--card-accent);
          letter-spacing: -0.02em;
        }
        .cs-nav-label {
          font-size: 0.95rem;
          font-weight: 800;
          color: #f0f0f8;
          line-height: 1.2;
        }
        .cs-nav-desc {
          font-size: 0.78rem;
          color: rgba(240,240,248,0.5);
          font-weight: 500;
          line-height: 1.3;
        }
        .cs-nav-arrow {
          margin-top: 6px;
          font-size: 1rem;
          color: var(--card-accent);
          font-weight: 700;
          transition: transform 0.18s;
        }
        .cs-nav-card:hover .cs-nav-arrow { transform: translateX(4px); }
        .role-line { margin-top: 10px; display: inline-flex; align-items: center; gap: 12px; font-weight: 600; font-size: clamp(1.05rem, 2.6vw, 1.25rem); color: rgba(240,240,248,0.75); }
        .rotator { position: relative; height: 1.6em; width: auto; display: inline-block; vertical-align: middle; min-width: min(32ch, 88vw); }
        .role-item { position: absolute; left:0; top:0; line-height:1.6em; min-height:1.6em; display:flex; align-items:center; color:#f0f0f8; font-size:clamp(1.15rem,3.2vw,1.5rem); font-weight:700; opacity:0; pointer-events:none; transition: opacity .4s cubic-bezier(.22,.9,.35,1); white-space:nowrap; }
        .role-item.active { opacity: 1; pointer-events: auto; }
        .stats { margin-top: 2.5rem; display:flex; flex-direction:column; gap:.6rem; align-items:flex-start; }
        .stat-line { color:rgba(240,240,248,0.65); font-weight:600; font-size:clamp(.88rem,1.4vw,1rem); line-height:1.3; letter-spacing:-0.01em; white-space:nowrap; }
        .home-cta { margin-top:20px; display:flex; gap:.6rem; flex-wrap:wrap; }
        .btn { border:1px solid rgba(255,255,255,0.18); padding:.6rem 1rem; border-radius:12px; font-weight:800; cursor:pointer; background:rgba(255,255,255,0.08); backdrop-filter:blur(8px); transition: transform .15s ease, box-shadow .2s ease, background .2s; text-decoration:none; color:#f0f0f8; font-size:0.95rem; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0,0,0,.35); background:rgba(255,255,255,0.14); }
        .btn.primary { background:rgba(255,255,255,0.95); color:#0d0d1a; border-color:transparent; }
        .btn.primary:hover { background:#fff; }
        .btn.ghost { background:rgba(255,255,255,0.07); }
        .filter-bar {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .filter-row { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
        .filter-label {
          flex-shrink: 0;
          width: 56px;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(240,240,248,0.4);
        }
        .filter-pills { display: flex; flex-wrap: wrap; gap: 6px; }
        .filter-pill {
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.06);
          color: rgba(240,240,248,0.75);
          border-radius: 999px;
          padding: 6px 12px;
          font-weight: 700;
          font-size: 0.82rem;
          cursor: pointer;
          transition: background .15s ease, color .15s ease;
        }
        .filter-pill:hover { background: rgba(255,255,255,0.12); color: #f0f0f8; }
        .filter-pill.on { background: rgba(160,130,255,0.22); border-color: rgba(160,130,255,0.5); color: #f0f0f8; }
        @media (max-width: 640px) {
          .filter-row { flex-direction: column; align-items: flex-start; }
          .filter-label { width: auto; }
        }
        @media (max-width: 920px) {
          .hero { min-height: auto; padding-top: 6vh; }
          .stats { margin-top: 1.5rem; align-items: flex-start; }
          .stat-line { white-space: normal; }
        }
        @media (max-width: 600px) {
          .rotator { min-width: 0; width: 100%; }
          .role-item { white-space: normal; }
          .home-cta { flex-direction: column; }
        }
        @media (max-width: 660px) {
          .about-layout { flex-direction: column; align-items: center; }
          .about-photo-wrap img { width: 200px !important; max-width: 60vw !important; }
        }
      `}</style>

      {/* Main */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          flex: "1 0 auto",
          display: "grid",
          alignItems:
            activeTab === "Projects" || activeTab === "Certifications" || activeTab === "Technical Competencies" || activeTab === "Blog"
              ? "start"
              : "center",
          padding: "clamp(100px, calc(5rem + 70px), 180px) clamp(16px, 8vw, 80px) 6vh",
        }}
      >
        {/* Blog detail takes priority */}
        {isBlogDetail ? (
          renderBlogDetail()
        ) : activeTab === "Home" ? (
          <>
            <section className="hero">
              {/* Glass hero card with 3D tilt */}
              <div
                className="hero-card"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const px = (e.clientX - rect.left) / rect.width;
                  const py = (e.clientY - rect.top) / rect.height;
                  setHeroTilt({ rx: (py - 0.5) * 10, ry: (px - 0.5) * -10 });
                }}
                onMouseLeave={() => setHeroTilt({ rx: 0, ry: 0 })}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(28px) saturate(160%)",
                  WebkitBackdropFilter: "blur(28px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.14)",
                  transform: `perspective(1000px) rotateX(${heroTilt.rx}deg) rotateY(${heroTilt.ry}deg)`,
                  transition: "transform 0.18s ease",
                  transformStyle: "preserve-3d",
                  maxWidth: 780,
                  width: "100%",
                }}
              >
                <div className="hero-card-inner">
                  <div className="hero-photo-wrap">
                    <img
                      src={myPic}
                      alt="Ayesha Rahman"
                      className="hero-photo"
                    />
                  </div>

                  <div className="hero-text">
                    <h1
                      style={{
                        margin: 0,
                        fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.02em",
                        color: "#f0f0f8",
                      }}
                    >
                      AYESHA RAHMAN
                    </h1>

                    <div className="role-line" aria-live="polite" aria-atomic="true">
                      <div className="rotator" aria-label={`Role: ${roles[idx]}`}>
                        {roles.map((r, i) => (
                          <div key={i} className={`role-item ${i === idx ? "active" : ""}`}>
                            {r}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="home-cta">
                      <a className="btn primary" href={LINKS.resume} download>
                        Download Resume
                      </a>
                      <a className="btn ghost" href={LINKS?.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn ↗
                      </a>
                      <a className="btn ghost" href={LINKS?.github} target="_blank" rel="noreferrer">
                        GitHub ↗
                      </a>
                    </div>

                    <div className="stats">
                      {stats.map((s, i) => (
                        <div className="stat-line" key={i}>
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CS-themed nav cards */}
              <div className="cs-nav-grid">
                {[
                  {
                    icon: "{ }",
                    label: "About Me",
                    desc: "Background · Research · Education",
                    tab: "About Me",
                    color: "rgba(120,200,255,0.12)",
                    accent: "rgba(120,200,255,0.5)",
                  },
                  {
                    icon: "</>",
                    label: "Projects",
                    desc: "20+ builds · AI · Fintech · Security",
                    tab: "Projects",
                    color: "rgba(160,130,255,0.12)",
                    accent: "rgba(160,130,255,0.5)",
                  },
                  {
                    icon: "▶_",
                    label: "Work Experience",
                    desc: "KAUST · UTI · Leeds",
                    tab: "Work Experience",
                    color: "rgba(100,220,180,0.12)",
                    accent: "rgba(100,220,180,0.5)",
                  },
                ].map(({ icon, label, desc, tab, color, accent }) => (
                  <button
                    key={tab}
                    className="cs-nav-card"
                    onClick={() => setActiveTab(tab)}
                    style={{ "--card-color": color, "--card-accent": accent }}
                  >
                    <span className="cs-nav-icon">{icon}</span>
                    <span className="cs-nav-label">{label}</span>
                    <span className="cs-nav-desc">{desc}</span>
                    <span className="cs-nav-arrow">→</span>
                  </button>
                ))}
              </div>
            </section>
          </>
        ) : activeTab === "About Me" ? (
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div className="about-layout" style={{ display: "flex", gap: "2rem", alignItems: "center", width: "100%", maxWidth: 1000, flexWrap: "wrap" }}>
              <div className="about-photo-wrap" style={{ flex: "0 0 auto" }}>
                <img
                  src={myPic}
                  alt="Ayesha Rahman"
                  style={{
                    width: "300px",
                    maxWidth: "80vw",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                    display: "block",
                  }}
                  onClick={() => setAboutOpen(true)}
                />
              </div>

              <div style={{ flex: "1 1 280px", minWidth: 0 }}>
                <h2 style={{ marginTop: 0, marginBottom: "1rem", fontSize: "clamp(1.6rem, 3.6vw, 2rem)", fontWeight: 800, color: "#f0f0f8" }}>
                  About: Ayesha Rahman
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: "rgba(240,240,248,0.82)" }}>
                    Hi, I’m Ayesha, an AI/ML Engineer and Cybersecurity Researcher. I’m currently a Research Intern at the CyberSaR Lab at KAUST (King Abdullah University of Science and Technology), where my work sits at the intersection of machine learning, cybersecurity, and privacy-preserving systems.
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: "rgba(240,240,248,0.82)" }}>
                    I completed my MEng in Computer Science with Artificial Intelligence (2024-25, 81% dissertation) and my BSc in the same field (2021-24), both at the University of Leeds. Born and raised across India, Dubai, and Saudi Arabia, I bring a global perspective to technical problems.
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: "rgba(240,240,248,0.82)" }}>
                    At KAUST, my research focuses on closing the post-authentication runtime trust gap in enterprise identity systems, building continuous behavioural authentication that detects session hijacking, lateral movement, and insider threats using deep learning, federated learning, and differential privacy.
                  </p>
                  <p style={{ margin: 0, lineHeight: 1.7, fontSize: "1.02rem", color: "rgba(240,240,248,0.82)" }}>
                    Beyond research, I’ve shipped projects spanning fintech, digital health, robotics, computer graphics, and AI simulation. I care about writing secure, interpretable, and auditable AI systems that hold up in regulated environments.
                  </p>
                </div>
                <p style={{ marginTop: "1.25rem", color: "rgba(240,240,248,0.45)", fontSize: "0.88rem", fontStyle: "italic" }}>
                  Click the photo for a full bio.
                </p>
              </div>
            </div>
          </div>
        ) : activeTab === "Projects" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
              gap: "2rem",
              paddingTop: "5vh",
              width: "100%",
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ width: "100%", maxWidth: "1240px", margin: "0 auto 1.5rem", display: "flex", flexDirection: "column", gap: "10px" }}>
                <div className="filter-bar">
                  <div className="filter-row">
                    <span className="filter-label">Type</span>
                    <div className="filter-pills">
                      {PROJECT_SECTIONS.map(({ key, label }) => (
                        <button
                          key={key}
                          className={`filter-pill ${projectSection === key ? "on" : ""}`}
                          onClick={() => setProjectSection(key)}
                        >
                          {label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="filter-row">
                    <span className="filter-label">Domain</span>
                    <div className="filter-pills">
                      {PROJECT_DOMAINS.map((cat) => (
                        <button
                          key={cat}
                          className={`filter-pill ${projectCategory === cat ? "on" : ""}`}
                          onClick={() => setProjectCategory(cat)}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontWeight: 700, letterSpacing: "-0.01em", color: "#f0f0f8" }}>
                    {(() => {
                      const sectionLabel = PROJECT_SECTIONS.find((s) => s.key === projectSection)?.label;
                      const parts = [
                        projectSection !== "All" ? sectionLabel : null,
                        projectCategory !== "All" ? `${projectCategory}` : null,
                      ].filter(Boolean);
                      return parts.length ? parts.join(" • ") : "All Projects";
                    })()}
                  </div>
                  {(projectCategory !== "All" || projectSection !== "All") && (
                    <button
                      onClick={() => { setProjectCategory("All"); setProjectSection("All"); }}
                      style={{ border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "#f0f0f8", borderRadius: 10, padding: "6px 10px", cursor: "pointer", fontWeight: 600 }}
                      title="Show all projects"
                    >
                      Clear filter
                    </button>
                  )}
                </div>
              </div>

              <Suspense fallback={<div style={{padding:"2rem",opacity:0.5}}>Loading projects...</div>}>
                <ProjectCards selectedCategory={projectCategory} selectedSection={projectSection} />
              </Suspense>
            </div>
          </div>
        ) : activeTab === "Work Experience" ? (
          <WorkExperience />
        ) : activeTab === "Certifications" ? (
          <Certifications />
        ) : activeTab === "Technical Competencies" ? (
          <Suspense fallback={<div style={{padding:"2rem",opacity:0.5}}>Loading...</div>}>
            <TechnicalCompetencies />
          </Suspense>
        ) : activeTab === "Contact" ? (
          <div style={{ width: "100%", display: "grid", placeItems: "center", gap: "1.5rem" }}>
            <div style={{ textAlign: "center", maxWidth: 520 }}>
              <h1
                style={{
                  margin: "0 0 0.6rem",
                  fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#f0f0f8",
                }}
              >
                Let's Connect
              </h1>
              <p style={{ margin: 0, color: "rgba(240,240,248,0.65)", fontSize: "1rem", lineHeight: 1.6 }}>
                Have a role, project, or idea in mind? I'd love to hear from you.
              </p>
            </div>

            <div className="home-cta" style={{ justifyContent: "center" }}>
              <a className="btn ghost" href="mailto:ayesharahman7755@gmail.com">
                Gmail ↗
              </a>
              <a className="btn ghost" href={LINKS?.linkedin} target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
              <a className="btn ghost" href={LINKS?.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
            </div>
            <ContactForm />
            <div style={{ opacity: 0.75, fontSize: ".95rem", color: "#f0f0f8" }}>
              Prefer email? <a href="mailto:ayesharahman7755@gmail.com" style={{ color: "rgba(180,160,255,0.9)" }}>ayesharahman7755@gmail.com</a>
            </div>
          </div>
        ) : isBlogList ? (
          // BLOG LIST
          <section style={{ width: "100%", maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                marginTop: 50,
                gap: "18px",
              }}
            >
              {blogPosts.map((p) => (
                <a
                  key={p.link}
                  href={p.link}
                  onClick={(e) => {
                    e.preventDefault();
                    go(p.link);
                  }}
                  style={{
                    textDecoration: "none",
                    color: "#f0f0f8",
                    borderRadius: 14,
                    padding: "16px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.1)",
                    backdropFilter: "blur(24px) saturate(160%)",
                    WebkitBackdropFilter: "blur(24px) saturate(160%)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transition: "transform 140ms ease, box-shadow 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 14px 34px rgba(0,0,0,0.45)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)";
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: "1.05rem" }}>{p.title}</div>
                  <div style={{ opacity: 0.6, fontSize: ".9rem" }}>
                    {new Date(p.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div style={{ fontSize: ".98rem", lineHeight: 1.5 }}>{p.summary}</div>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 6 }}>
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: ".8rem",
                          padding: "4px 8px",
                          borderRadius: 999,
                          border: "1px solid rgba(255,255,255,0.15)",
                          background: "rgba(255,255,255,0.08)",
                          color: "rgba(240,240,248,0.75)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ marginTop: 6, fontWeight: 800 }}>Read →</div>
                </a>
              ))}
            </div>
          </section>
        ) : (
          <div style={{ maxWidth: 900 }}>
            <h1
              style={{
                margin: 0,
                fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "rgb(36,36,42)",
              }}
            >
              AYESHA RAHMAN
            </h1>

            <div className="role-line" aria-live="polite" aria-atomic="true">
              <div className="rotator" aria-label={`Role: ${roles[idx]}`}>
                {roles.map((r, i) => (
                  <div key={i} className={`role-item ${i === idx ? "active" : ""}`}>
                    {r}
                  </div>
                ))}
              </div>
            </div>

            <div className="stats">
              {stats.map((s, i) => (
                <div className="stat-line" key={i}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer email="ayesharahman7755@gmail.com" linkedin={LINKS.linkedin} github={LINKS.github} />

      {activeTab === "Projects" && (
        <div data-assistant-hint>
          <ProjectAssistantSideHints />
        </div>
      )}

      {/* About overlay */}
      {aboutOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 20,
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            overflowY: "auto",
            cursor: "pointer",
          }}
          onClick={() => setAboutOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "rgba(12,12,20,0.88)",
              backdropFilter: "blur(32px) saturate(160%)",
              WebkitBackdropFilter: "blur(32px) saturate(160%)",
              borderRadius: 18,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.12)",
              maxWidth: 740,
              width: "100%",
              maxHeight: "82vh",
              overflowY: "auto",
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
              cursor: "default",
              color: "#fff",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <img
                src={myPic}
                alt="Ayesha Rahman"
                style={{ width: "110px", borderRadius: "10px", flexShrink: 0 }}
              />
              <div>
                <h2 style={{ margin: 0, fontSize: "1.5rem", fontWeight: 800, color: "#fff" }}>Ayesha Rahman</h2>
                <p style={{ margin: "0.3rem 0 0", fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>AI/ML Engineer · Cybersecurity Researcher · KAUST</p>
              </div>
            </div>

            <div style={{ lineHeight: 1.8, fontSize: "1rem", display: "flex", flexDirection: "column", gap: "1rem", color: "rgba(255,255,255,0.88)" }}>
              <p style={{ margin: 0 }}>
                I was born and raised across India, Dubai, and Saudi Arabia, which gave me a global outlook and the ability to adapt early on. I completed my MEng in Computer Science with Artificial Intelligence (2024-25) and my BSc in Computer Science (2021-24), both at the University of Leeds.
              </p>
              <p style={{ margin: 0 }}>
                My passion for AI took root during my undergraduate years, where I worked on projects spanning high-frequency trading systems, predictive modelling, and sentiment analysis for stock market forecasting. These pushed me to develop genuine depth in machine learning, data pipelines, and building systems that had to be both accurate and auditable.
              </p>
              <p style={{ margin: 0 }}>
                During an internship at UTI Mutual Fund in Mumbai, a structural gap became evident in how financial institutions were applying AI to decision-making. Existing approaches lacked the rigour, interpretability, and real-time adaptability that regulated environments require. This observation was developed into a formal research proposal under the mentorship of Professor Ali Shoker at KAUST, and is currently being advanced towards a practical product.
              </p>
              <p style={{ margin: 0 }}>
                As part of that work, the CyberSaR Lab at KAUST became the setting for a Research Internship focused on continuous post-authentication behavioural monitoring. The research addresses the runtime trust gap in enterprise identity systems, the interval between a valid login event and any subsequent behavioural verification, applying deep learning, federated learning, and differential privacy towards an enterprise-ready solution.
              </p>
              <p style={{ margin: 0 }}>
                A central concern across all of this work is the question of trust in AI systems. Artificial intelligence is still a relatively young field in terms of real-world deployment, and the gap between what a model can do in a research setting and what it should be trusted to do in a regulated, high-stakes environment is significant. Security and privacy are not features to be added after the fact; they are architectural requirements from the outset. Systems that operate on sensitive data, whether in financial services, healthcare, or enterprise security, must be interpretable, auditable, and robust to adversarial conditions.
              </p>
              <p style={{ margin: 0 }}>
                This is what drives the focus on privacy-preserving machine learning, explainability, and behavioural monitoring. The goal is not only to build systems that perform well, but systems that can be scrutinised, understood, and trusted, particularly as AI takes on a larger role in decisions that affect people directly.
              </p>
            </div>

            <small style={{ marginTop: "0.5rem", opacity: 0.45, alignSelf: "center", fontSize: "0.8rem", cursor: "pointer" }} onClick={() => setAboutOpen(false)}>Click outside to close</small>
          </div>
        </div>
      )}
    </div>
  );
}
