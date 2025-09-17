import { useEffect, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";
import myPic from "./profile.jpg";
import ProjectCards from "./components/ProjectCards";
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";
import TechnicalCompetencies from "./components/TechnicalCompetencies";
import ContactForm from "./components/ContactForm";
import Blog1 from "./components/blog1.jsx";
import Blog2 from "./components/blog2.jsx";
import Blog3 from "./components/blog3.jsx";
import Resume from "./assets/Resume-Ayesha.pdf";

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
    color: "rgba(20,20,25,0.8)",
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
  const canvasRef = useRef(null);

  // ---------- Intro animation ----------
  const [introStage, setIntroStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const fullText = "AYESHA RAHMAN";

  useEffect(() => {
    if (introStage === 0) {
      let index = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, index + 1));
        index++;
        if (index === fullText.length) {
          clearInterval(interval);
          setIntroStage(2);
          setTimeout(() => setIntroStage(3), 2200);
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [introStage]);

  // ---------- Background canvas ----------
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    const state = {
      w: 0,
      h: 0,
      gridW: 0,
      gridH: 0,
      mouse: { x: 0.5, y: 0.5, present: false },
      pmouse: { x: 0.5, y: 0.5 },
      hue: Math.random(),
      autopilot: true,
    };

    const SIM_SCALE = 5;
    const DIFFUSE = 0.12;
    const FADE = 0.992;
    const DISPLAY_STRENGTH = 0.26;
    const INJECT = 0.16;
    const FLOW_STRENGTH = 42;
    const VORTEX_STRENGTH = 220;
    const DT = 1 / 60;
    const CYCLE_SPEED = 0.04;

    const noise2D = createNoise2D();
    function curl(x, y, t) {
      const nx = x / state.gridW;
      const ny = y / state.gridH;
      const s = 1.6;
      const sp = 0.1;
      const e = 0.002;
      const n1 = noise2D(nx * s + t * sp, (ny + e) * s);
      const n2 = noise2D(nx * s + t * sp, (ny - e) * s);
      const n3 = noise2D((nx + e) * s + t * sp, ny * s);
      const n4 = noise2D((nx - e) * s + t * sp, ny * s);
      const vx = n2 - n1;
      const vy = n3 - n4;
      const m = Math.hypot(vx, vy) || 1e-6;
      return { x: vx / m, y: vy / m };
    }

    let rA, gA, bA, rB, gB, bB;
    let off, offctx, imgData, px;

    function alloc() {
      const N = state.gridW * state.gridH;
      rA = new Float32Array(N);
      gA = new Float32Array(N);
      bA = new Float32Array(N);
      rB = new Float32Array(N);
      gB = new Float32Array(N);
      bB = new Float32Array(N);

      off = document.createElement("canvas");
      off.width = state.gridW;
      off.height = state.gridH;
      offctx = off.getContext("2d");
      imgData = offctx.createImageData(state.gridW, state.gridH);
      px = imgData.data;
    }

    function fit() {
      const { clientWidth, clientHeight } = canvas;
      state.w = clientWidth;
      state.h = clientHeight;
      canvas.width = Math.max(2, Math.floor(clientWidth * DPR));
      canvas.height = Math.max(2, Math.floor(clientHeight * DPR));
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);

      state.gridW = Math.max(60, Math.floor(state.w / SIM_SCALE));
      state.gridH = Math.max(40, Math.floor(state.h / SIM_SCALE));
      alloc();

      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, state.w, state.h);
    }

    function hslToRgb(h, s, l) {
      const k = (n) => (n + h * 6) % 6;
      const a = s * Math.min(l, 1 - l);
      const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [f(0), f(8 / 6), f(4 / 6)];
    }

    function addDye(bufR, bufG, bufB, cx, cy, radius, hue, amt) {
      const r2 = radius * radius;
      const x0 = Math.max(0, Math.floor(cx - radius));
      const x1 = Math.min(state.gridW - 1, Math.ceil(cx + radius));
      const y0 = Math.max(0, Math.floor(cy - radius));
      const y1 = Math.min(state.gridH - 1, Math.ceil(cy + radius));
      const S = 0.58,
        L = 0.95;
      const rgb = hslToRgb(hue, S, L);
      for (let y = y0; y <= y1; y++) {
        const dy = y - cy;
        for (let x = x0; x <= x1; x++) {
          const dx = x - cx;
          const d2 = dx * dx + dy * dy;
          if (d2 > r2) continue;
          const fall = Math.exp(-d2 / (radius * radius));
          const i = x + y * state.gridW;
          bufR[i] += rgb[0] * amt * fall * INJECT;
          bufG[i] += rgb[1] * amt * fall * INJECT;
          bufB[i] += rgb[2] * amt * fall * INJECT;
        }
      }
    }

    function sample(buf, x, y) {
      if (x < 0.5) x = 0.5;
      if (x > state.gridW - 1.5) x = state.gridW - 1.5;
      if (y < 0.5) y = 0.5;
      if (y > state.gridH - 1.5) y = state.gridH - 1.5;
      const x0 = Math.floor(x),
        y0 = Math.floor(y);
      const x1 = x0 + 1,
        y1 = y0 + 1;
      const sx = x - x0,
        sy = y - y0;
      const i00 = x0 + y0 * state.gridW;
      const i10 = x1 + y0 * state.gridW;
      const i01 = x0 + y1 * state.gridW;
      const i11 = x1 + y1 * state.gridW;
      return (
        (1 - sx) * (1 - sy) * buf[i00] +
        sx * (1 - sy) * buf[i10] +
        (1 - sx) * sy * buf[i01] +
        sx * sy * buf[i11]
      );
    }

    function diffuseOnce(src, dst, k) {
      const w = state.gridW,
        h = state.gridH;
      for (let y = 0; y < h; y++) {
        const y0 = Math.max(0, y - 1),
          y1 = Math.min(h - 1, y + 1);
        for (let x = 0; x < w; x++) {
          const x0 = Math.max(0, x - 1),
            x1 = Math.min(w - 1, x + 1);
          const i = x + y * w;
          const s =
            src[i] * 4 +
            src[x0 + y * w] +
            src[x1 + y * w] +
            src[x + y0 * w] +
            src[x + y1 * w];
          dst[i] = src[i] * (1 - k) + (s / 8) * k;
        }
      }
    }

    function step(now) {
      const t = now * 0.001;
      state.hue = (state.hue + 0.004) % 1;

      if (state.autopilot) {
        const ax = 0.5 + 0.28 * Math.sin(t * 0.12);
        const ay = 0.5 + 0.22 * Math.sin(t * 0.085 + 1.6);
        addDye(rA, gA, bA, ax * state.gridW, ay * state.gridH, 24, state.hue, 0.6);
      }

      if (state.mouse.present) {
        const dx = (state.mouse.x - state.pmouse.x) * state.gridW;
        const dy = (state.mouse.y - state.pmouse.y) * state.gridH;
        const speed = Math.min(18, Math.hypot(dx, dy));
        const rad = 18 + speed * 0.7;
        addDye(
          rA,
          gA,
          bA,
          state.mouse.x * state.gridW,
          state.mouse.y * state.gridH,
          rad,
          state.hue,
          1.0
        );
      }

      const w = state.gridW,
        h = state.gridH;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = x + y * w;
          const base = curl(x, y, t);
          let vx = base.x * FLOW_STRENGTH;
          let vy = base.y * FLOW_STRENGTH;

          if (state.mouse.present) {
            const mx = state.mouse.x * w,
              my = state.mouse.y * h;
            const dx = x - mx,
              dy = y - my;
            const d2 = dx * dx + dy * dy;
            const d = Math.sqrt(d2) + 1e-6;
            const tangX = -dy / d,
              tangY = dx / d;
            const fall = Math.exp(-d2 / (26 * 26));
            vx += tangX * VORTEX_STRENGTH * fall;
            vy += tangY * VORTEX_STRENGTH * fall;
          }

          const x0 = x - vx * DT;
          const y0 = y - vy * DT;

          rB[i] = sample(rA, x0, y0);
          gB[i] = sample(gA, x0, y0);
          bB[i] = sample(bB, x0, y0);
        }
      }

      diffuseOnce(rB, rA, DIFFUSE);
      diffuseOnce(gB, gA, DIFFUSE);
      diffuseOnce(bB, bA, DIFFUSE);

      for (let i = 0; i < rA.length; i++) {
        rA[i] = Math.min(1, rA[i] * FADE);
        gA[i] = Math.min(1, gA[i] * FADE);
        bA[i] = Math.min(1, bA[i] * FADE);
      }
    }

    function rotateRGB(r, g, b, t) {
      const s = (t * 3) % 3;
      const seg = Math.floor(s);
      const f = s - seg;
      const lerp = (a, b, x) => a + (b - a) * x;

      if (seg === 0) return [lerp(r, g, f), lerp(g, b, f), lerp(b, r, f)];
      if (seg === 1) return [lerp(g, b, f), lerp(b, r, f), lerp(r, g, f)];
      return [lerp(b, r, f), lerp(r, g, f), lerp(g, b, f)];
    }

    function render(now) {
      const N = state.gridW * state.gridH;
      let k = 0;
      const cycle = ((now * 0.001) * CYCLE_SPEED) % 1;

      for (let i = 0; i < N; i++) {
        const rr = rA[i],
          gg = gA[i],
          bb = bA[i];
        const [rRot, gRot, bRot] = rotateRGB(rr, gg, bb, cycle);
        const R = Math.max(0, Math.min(1, 1 - DISPLAY_STRENGTH * rRot));
        const G = Math.max(0, Math.min(1, 1 - DISPLAY_STRENGTH * gRot));
        const B = Math.max(0, Math.min(1, 1 - DISPLAY_STRENGTH * bRot));
        px[k++] = (R * 255) | 0;
        px[k++] = (G * 255) | 0;
        px[k++] = (B * 255) | 0;
        px[k++] = 255;
      }
      offctx.putImageData(imgData, 0, 0);

      ctx.clearRect(0, 0, state.w, state.h);
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(off, 0, 0, state.gridW, state.gridH, 0, 0, state.w, state.h);
    }

    let raf = 0;
    function loop(now) {
      step(now);
      render(now);
      state.pmouse.x = state.mouse.x;
      state.pmouse.y = state.mouse.y;
      raf = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      state.mouse.x = (e.clientX - rect.left) / rect.width;
      state.mouse.y = (e.clientY - rect.top) / rect.height;
      state.mouse.present = true;
      state.autopilot = false;
    }
    function onLeave() {
      state.mouse.present = false;
      state.autopilot = true;
    }
    function onResize() {
      fit();
    }

    fit();
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("mouseout", (e) => !e.relatedTarget && onLeave());
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  // ---------- Roles rotator ----------
  const roles = ["Software Engineer", "Machine Learning Engineer", "AI Engineer"];
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const stats = [
    "4+ YEARS OF EXPERIENCE IN COMPUTER SCIENCE",
    "4+ YEARS OF EXPERIENCE IN AI IN FINANCE AND HEALTH",
    "15+ PROJECTS COMPLETED",
  ];

  // ---------- Tiny router ----------
  const [route, setRoute] = useState(window.location.pathname);
  const go = (to) => {
    if (to !== window.location.pathname) {
      window.history.pushState({}, "", to);
      setRoute(to);
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };
  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // ---------- Blog route helpers ----------
  const isBlogRoute  = route.startsWith("/blog");
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
      default:
        return null;
    }
  }

  // ---------- Tabs ----------
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
  const [projMenuOpen, setProjMenuOpen] = useState(false);
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

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "#fff" }}>
      {/* Background */}
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, background: "#fff" }}
      />

      {/* Nav */}
      <nav
        style={{
            position: "fixed",
            top: "3rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "1rem",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
            overflow: "visible",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            background: "linear-gradient(to bottom right, rgba(255,255,255,0.55), rgba(255,255,255,0.18))",
            border: "1px solid rgba(255,255,255,0.6)",
            borderRadius: "14px",
            padding: "0.6rem 1.2rem",
            boxShadow: "inset 0 1px 1px rgba(255,255,255,0.6), 0 10px 25px rgba(0,0,0,0.18)",
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
                  if (tab === "Blog") go("/blog");
                  else go("/");
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#000",
                  padding: "0.5rem 0.8rem",
                  fontWeight: isActive ? 700 : 500,
                  cursor: "pointer",
                  borderBottom: isActive ? "2px solid #000" : "2px solid transparent",
                  transition: "all 0.3s",
                }}
              >
                {tab}
              </button>
            );
          }

          // Projects (with dropdown)
          return (
            <div key="Projects" style={{ position: "relative" }}>
              <button
                id="projects-btn"
                aria-haspopup="menu"
                aria-expanded={projMenuOpen ? "true" : "false"}
                onClick={() => {
                  setActiveTab("Projects");
                  setProjectCategory("All");
                  setProjMenuOpen((v) => !v);
                  go("/");
                }}
                onMouseEnter={() => setProjMenuOpen(true)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: "#000",
                  padding: "0.5rem 0.8rem",
                  fontWeight: activeTab === "Projects" ? 700 : 500,
                  cursor: "pointer",
                  borderBottom: activeTab === "Projects" ? "2px solid #000" : "2px solid transparent",
                  transition: "all 0.3s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: ".4rem",
                }}
                title={projectCategory === "All" ? "Projects" : `Projects • ${projectCategory}`}
              >
                Projects <span aria-hidden>▾</span>
              </button>

              {projMenuOpen && (
                <div
                  id="projects-menu"
                  role="menu"
                  className="glass-menu"
                  onMouseLeave={() => {
                    setProjMenuOpen(false);
                    setTilt({ rx: 0, ry: 0, glowX: 50, glowY: 50 });
                  }}
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
                    position: "absolute",
                    top: "2.6rem",
                    left: 0,
                    minWidth: "240px",
                    borderRadius: "14px",
                    padding: "8px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: "6px",
                    whiteSpace: "normal",
                    transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
                    transformStyle: "preserve-3d",
                    transition: "transform 180ms ease",
                    border: "1px solid transparent",
                    backgroundClip: "padding-box, border-box, padding-box",
                    backgroundImage: `
                      linear-gradient(to bottom right, rgba(255,255,255,0.55), rgba(255,255,255,0.18)),
                      linear-gradient(135deg, rgba(255,255,255,0.65), rgba(255,255,255,0.05)),
                      radial-gradient(120px 80px at ${tilt.glowX}% ${tilt.glowY}%, rgba(255,255,255,0.45), rgba(255,255,255,0))
                    `,
                    boxShadow: `
                      inset 0 1px 1px rgba(255,255,255,0.55),
                      0 10px 25px rgba(0,0,0,0.22),
                      0 1px 3px rgba(0,0,0,0.12)
                    `,
                    backdropFilter: "blur(14px) saturate(140%)",
                    WebkitBackdropFilter: "blur(14px) saturate(140%)",
                    zIndex: 999,
                  }}
                >
                  {["All", "Finance", "Health", "Robotics", "Graphics", "Systems", "AI/ML", "HCI"].map(
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
                          background: projectCategory === cat ? "rgba(255,255,255,0.35)" : "transparent",
                          padding: "12px 14px",
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
                </div>
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
            background: "#222",
            zIndex: 10,
            overflow: "hidden",
            transition: "opacity 2s ease",
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

      {/* Main */}
      <main
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "grid",
          alignItems:
            activeTab === "Projects" || activeTab === "Certifications" || activeTab === "Technical Competencies" || activeTab === "Blog"
              ? "start"
              : "center",
          padding: "10vh 8vw",
        }}
      >
        {/* Blog detail takes priority */}
        {isBlogDetail ? (
          renderBlogDetail()
        ) : activeTab === "Home" ? (
          <>
            <section className="hero">
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
              </div>
            </section>

            <div className="stats">
              {stats.map((s, i) => (
                <div className="stat-line" key={i}>
                  {s}
                </div>
              ))}
            </div>

            <style>{`
              .hero {
                width: 100%;
                min-height: calc(100vh - 140px);
                display: flex;
                align-items: flex-start;
                justify-content: center;
                flex-direction: column;
              }
              .role-line { margin-top: 10px; display: inline-flex; align-items: center; gap: 12px; font-weight: 600; font-size: clamp(1.05rem, 2.6vw, 1.25rem); color: rgba(36,36,42,0.85); }
              .rotator { position: relative; height: 1.6em; width: auto; display: inline-block; vertical-align: middle; min-width: 18ch; }
              .role-item { position: absolute; left:0; top:0; line-height:1.6em; min-height:1.6em; display:flex; align-items:center; color:#000; font-size:clamp(1.15rem,3.2vw,1.5rem); font-weight:700; opacity:0; pointer-events:none; transition: opacity .4s cubic-bezier(.22,.9,.35,1); white-space:nowrap; }
              .role-item.active { opacity: 1; pointer-events: auto; }
              .stats { position:absolute; right:8vw; top:50%; transform:translateY(-50%); z-index:1; text-align:right; display:flex; flex-direction:column; gap:.6rem; align-items:flex-end; }
              .stat-line { color:rgb(36,36,42); font-weight:700; font-size:clamp(.9rem,1.5vw,1.05rem); line-height:1.25; letter-spacing:-0.01em; white-space:nowrap; }
              .home-cta { margin-top:14px; display:flex; gap:.6rem; flex-wrap:wrap; }
              .btn { border:1px solid rgba(0,0,0,0.12); padding:.6rem .9rem; border-radius:12px; font-weight:800; cursor:pointer; background:rgba(255,255,255,0.75); backdrop-filter: blur(10px); transition: transform .15s ease, box-shadow .2s ease, background .2s; text-decoration:none; color:#111; }
              .btn:hover { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(0,0,0,.08); }
              .btn.primary { background:#111; color:#fff; border-color:#111; }
              .btn.ghost { background:rgba(255,255,255,0.9); }
              @media (max-width: 920px) {
                .hero { min-height: calc(100vh - 200px); }
                .stats { position: static; transform: none; margin-top: 1.25rem; align-items: flex-start; text-align: left; }
              }
            `}</style>
          </>
        ) : activeTab === "About Me" ? (
          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "center", width: "100%", maxWidth: 1000 }}>
              <div style={{ flex: "0 0 auto" }}>
                <img
                  src={myPic}
                  alt="Ayesha Rahman"
                  style={{
                    width: "320px",
                    maxWidth: "40vw",
                    height: "auto",
                    borderRadius: "12px",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                    cursor: "pointer",
                  }}
                  onClick={() => setAboutOpen(true)}
                />
              </div>

              <div style={{ flex: "1 1 0", textAlign: "justify" }}>
                <h2 style={{ marginTop: 0, marginBottom: "0.5rem", fontSize: "clamp(1.6rem, 3.6vw, 2rem)", fontWeight: 800, color: "rgb(36,36,42)" }}>
                  About - Ayesha Rahman
                </h2>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: "1.05rem", color: "rgba(36,36,42,0.9)" }}>
                  Hi! I’m Ayesha. I’m a software engineer with a focus on machine learning and AI. I enjoy building interactive web experiences that blend design and data. I have experience in finance-related ML projects and full-stack development. I like turning complex problems into simple, delightful interfaces and tools.
                </p>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: "1.05rem", color: "rgba(36,36,42,0.9)" }}>
                  Born and raised across India, Dubai, and Saudi Arabia, I bring a global perspective to tech. Recently completed my Master’s in Computer Science with AI (2024–25) at the University of Leeds, I specialize in blending AI with finance to solve real-world problems.
                </p>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: "1.05rem", color: "rgba(36,36,42,0.9)" }}>
                  From high-frequency trading systems to sentiment-driven stock predictions, my projects sharpened both my technical expertise and problem-solving mindset. Hands-on work with investment firms further fueled my passion for data-driven finance.
                </p>
                <p style={{ margin: 0, lineHeight: 1.6, fontSize: "1.05rem", color: "rgba(36,36,42,0.9)" }}>
                  Beyond academia, I’ve earned certifications in blockchain, finance, and software development, constantly exploring emerging technologies. My goal? To merge AI and finance in innovative ways that shape the future of markets and systems.
                </p>
                <p style={{ marginTop: "1rem", color: "rgba(36,36,42,0.8)", fontSize: "0.95rem" }}>
                  Click the photo to open a more detailed bio with projects and background.
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
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                <div style={{ fontWeight: 700, letterSpacing: "-0.01em" }}>
                  {projectCategory === "All" ? "All Projects" : `${projectCategory} Projects`}
                </div>
                {projectCategory !== "All" && (
                  <button
                    onClick={() => setProjectCategory("All")}
                    style={{ border: "1px solid rgba(0,0,0,0.12)", background: "#fff", borderRadius: 10, padding: "6px 10px", cursor: "pointer", fontWeight: 600 }}
                    title="Show all projects"
                  >
                    Clear filter
                  </button>
                )}
              </div>

              <ProjectCards selectedCategory={projectCategory} />
            </div>
          </div>
        ) : activeTab === "Work Experience" ? (
          <WorkExperience />
        ) : activeTab === "Certifications" ? (
          <Certifications />
        ) : activeTab === "Technical Competencies" ? (
          <TechnicalCompetencies />
        ) : activeTab === "Contact" ? (
          <div style={{ width: "100%", display: "grid", placeItems: "center", gap: "1rem" }}>
            <ContactForm />
            <div style={{ opacity: 0.75, fontSize: ".95rem" }}>
              Prefer email? <a href="mailto:ayesharahman7755@gmail.com">ayesharahman7755@gmail.com</a>
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
                    color: "inherit",
                    borderRadius: 14,
                    padding: "16px",
                    background: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    transition: "transform 140ms ease, box-shadow 180ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 14px 34px rgba(0,0,0,0.12)";
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
                          border: "1px solid rgba(0,0,0,0.12)",
                          background: "rgba(255,255,255,0.8)",
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
            background: "rgba(0,0,0,0.95)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
            padding: "2rem",
            textAlign: "justify",
            overflowY: "auto",
            cursor: "pointer",
          }}
          onClick={() => setAboutOpen(false)}
        >
          <img
            src={myPic}
            alt="Ayesha Rahman"
            style={{
              width: "300px",
              borderRadius: "12px",
              marginBottom: "2rem",
              marginTop: "50rem",
              alignSelf: "center",
            }}
          />
          <div style={{ maxWidth: "700px", lineHeight: 1.8, fontSize: "1.2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <p>
              I was born and raised across India, Dubai, and Saudi Arabia, experiences that gave me a global outlook and adaptability early in life. My academic journey led me to pursue a Master of Engineering in Computer Science with Artificial Intelligence (2024–25) at the University of Leeds, following my undergraduate studies in Computer Science (2021–24).
            </p>
            <p>
              My passion for technology started young, but it was during my undergraduate years that I discovered how artificial intelligence could transform industries. At Leeds, I worked on a range of innovative projects - spanning high-frequency trading systems, predictive algorithms, and sentiment analysis models for stock market forecasting. These projects strengthened my technical expertise in AI, machine learning, and data science, and sharpened my ability to solve complex problems, collaborate in teams, and deliver results under pressure.
            </p>
            <p>
              My interest in finance and markets naturally converged with AI. I became especially motivated to explore AI-driven approaches for financial predictions, combining sentiment analysis, neural networks, and data modeling to uncover insights that could influence investment strategies. Alongside academics, I gained onsite experience with investment firms, applying theoretical knowledge to real-world financial systems, learning how precision and scalability matter in dynamic environments.
            </p>
            <p>
              Beyond my degree, I actively expanded my knowledge through certifications in blockchain, finance, and software development, giving me a stronger grasp of cutting-edge technologies shaping tomorrow’s economy. I thrive on continuous learning and stay closely tuned to new advances in AI, finance, and design, always looking for challenges that push me outside my comfort zone.
            </p>
            <p>
              Looking ahead, I aspire to contribute to innovative companies at the intersection of AI and finance, developing systems that optimize processes, improve decision-making, and redefine the future of financial technology. Whether it’s through predictive modeling, intelligent systems, or market analytics, my mission is to apply my skills to create impactful, data-driven solutions.
            </p>
          </div>
          <small style={{ marginTop: "2rem", opacity: 0.7, alignSelf: "center" }}>Click anywhere to close</small>
        </div>
      )}
    </div>
  );
}
