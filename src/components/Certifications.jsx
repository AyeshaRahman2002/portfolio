// Components/Certifications.jsx
import React, { useMemo, useState } from "react";

const CERTS = [
  // Cloud & Security (Microsoft)
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    provider: "Microsoft",
    platform: "Microsoft",
    tags: ["Microsoft"],
  },
  { title: "Microsoft Certified: Azure AI Fundamentals", provider: "Microsoft", platform: "Microsoft", tags: ["Microsoft"] },
  { title: "Microsoft Certified: Azure Fundamentals", provider: "Microsoft", platform: "Microsoft", tags: ["Microsoft"] },

  // Programming / CS
  { title: "Python for Everybody Specialization", provider: "University of Michigan", platform: "Coursera", tags: ["Programming/CS"] },
  { title: "IBM Skills Network (coursework)", provider: "IBM Skills Network", platform: "Coursera", tags: ["Programming/CS"] },
  { title: "Computational Thinking for Problem Solving", provider: "University of Pennsylvania", platform: "Coursera", tags: ["Programming/CS"] },

  // Finance
  { title: "Introduction to Finance: The Basics", provider: "University of Illinois Urbana–Champaign", platform: "Coursera", tags: ["Finance"] },
  { title: "Introduction to Corporate Finance", provider: "University of Pennsylvania", platform: "Coursera", tags: ["Finance"] },
  { title: "Fundamentals of Finance", provider: "University of Pennsylvania", platform: "Coursera", tags: ["Finance"] },
  { title: "Global Financial Markets and Instruments", provider: "Rice University", platform: "Coursera", tags: ["Finance"] },

  // Blockchain / Web3
  { title: "Blockchain Transformations of Financial Services", provider: "INSEAD", platform: "Coursera", tags: ["Blockchain/Web3"] },
  { title: "Blockchain, Cryptoassets, Decentralized Finance", provider: "INSEAD", platform: "Coursera", tags: ["Blockchain/Web3"] },
  { title: "Introduction to Blockchain for Financial Services", provider: "INSEAD", platform: "Coursera", tags: ["Blockchain/Web3"] },

  // UX / Design
  { title: "Foundations of User Experience (UX) Design", provider: "Google", platform: "Coursera", tags: ["UX/Design"] },

  // Virtual Experience (Forage)
  { title: "Technology in Banking Virtual Program", provider: "Commonwealth Bank Australia", platform: "Forage", tags: ["Virtual Experience"] },
  { title: "Back-End Engineering Virtual Experience", provider: "Lyft", platform: "Forage", tags: ["Virtual Experience"] },
  { title: "Visa Token Service Technology Virtual Experience", provider: "Visa", platform: "Forage", tags: ["Virtual Experience"] },
];

const GROUPS = [
  { key: "Microsoft", label: "Cloud & Security (Microsoft)" },
  { key: "Programming/CS", label: "Programming & CS" },
  { key: "Finance", label: "Finance" },
  { key: "Blockchain/Web3", label: "Blockchain & Web3" },
  { key: "UX/Design", label: "UX / Design" },
  { key: "Virtual Experience", label: "Virtual Experience (Forage)" },
];

function CertCard({ cert }) {
  return (
    <article className="chip" role="listitem">
      <div className="chip-title">{cert.title}</div>
      <div className="chip-meta">
        <span>{cert.provider}</span>
        <span className="dot">•</span>
        <span>{cert.platform}</span>
      </div>
    </article>
  );
}

function Group({ label, items }) {
  const [collapsed, setCollapsed] = useState(true);
  const LIMIT = 6;
  const visible = items.slice(0, collapsed ? Math.min(LIMIT, items.length) : items.length);

  return (
    <section className="group" role="region" aria-label={label}>
      <header className="group-head">
        <h3>{label}</h3>
        {items.length > LIMIT && (
          <button className="link-btn" onClick={() => setCollapsed((v) => !v)} aria-expanded={!collapsed}>
            {collapsed ? "Show all" : "Collapse"}
          </button>
        )}
      </header>

      <div className="grid" role="list">
        {visible.map((c, i) => (
          <CertCard cert={c} key={`${label}-${i}`} />
        ))}
      </div>
    </section>
  );
}

export default function Certifications() {
  const [q, setQ] = useState("");

  const grouped = useMemo(() => {
    const text = q.trim().toLowerCase();
    const filtered = !text
      ? CERTS
      : CERTS.filter(
          (c) =>
            c.title.toLowerCase().includes(text) ||
            c.provider.toLowerCase().includes(text) ||
            c.platform.toLowerCase().includes(text)
        );

    const byTag = new Map();
    for (const g of GROUPS) byTag.set(g.key, []);
    for (const c of filtered) {
      for (const t of c.tags) {
        if (!byTag.has(t)) byTag.set(t, []);
        byTag.get(t).push(c);
      }
    }
    return byTag;
  }, [q]);

  return (
    <div className="wrap">
      <div className="filterbar">
        <input
          className="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search by title, provider, or platform…"
          aria-label="Search certifications"
        />
      </div>

      {GROUPS.map(({ key, label }) => {
        const items = grouped.get(key) || [];
        if (!items.length) return null;
        return <Group key={key} label={label} items={items} />;
      })}

      <style>{`
        /* ========= Layout & responsive globals ========= */
        :root {
          /* Adjust this if your navbar height changes.
             We also include safe-area for iOS notch devices. */
          --nav-h: 72px;            /* base (mobile) navbar height */
          --sticky-gap: 8px;        /* extra breathing room under nav */
          --wrap-pad-x: 16px;       /* horizontal page padding */
        }
        @media (min-width: 640px) {
          :root { --nav-h: 84px; --wrap-pad-x: 24px; }
        }
        @media (min-width: 1024px) {
          :root { --nav-h: 96px; --wrap-pad-x: 28px; }
        }

        .wrap {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding-inline: var(--wrap-pad-x);
          padding-bottom: 32px;
        }

        /* ========= Sticky search bar (never overlaps content) ========= */
        .filterbar {
          position: sticky;
          top: calc(var(--nav-h) + env(safe-area-inset-top, 0px) + var(--sticky-gap));
          z-index: 50;                     /* above cards */
          padding-top: 2px;                /* tiny visual offset */
          margin: 8px 0 14px 0;
          backdrop-filter: blur(0px);      /* keeps layout stable on iOS */
        }
        .search {
          width: 100%;
          height: 44px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.85);
          box-shadow: 0 6px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4);
          outline: none;
          font-size: 0.95rem;
        }
        .search:focus { border-color: rgba(11, 99, 206, 0.45); }

        /* ========= Group header ========= */
        .group { margin-top: 1.1rem; }
        .group-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: .6rem;
          gap: 12px;
        }
        .group-head h3 {
          margin: 0; font-size: clamp(1.05rem, 2.2vw, 1.35rem);
          font-weight: 800; color: rgb(36,36,42);
          line-height: 1.25;
        }
        .link-btn {
          background: transparent; border: none; color: #0b63ce; font-weight: 700;
          cursor: pointer; padding: .35rem .5rem; border-radius: 8px;
        }
        .link-btn:hover { text-decoration: underline; }

        /* ========= Responsive grid ========= */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 12px;
        }
        @media (min-width: 420px) {
          .grid { grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); }
        }
        @media (min-width: 920px) {
          .grid { gap: 14px; }
        }

        /* ========= Card ========= */
        .chip {
          border-radius: 16px;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: 0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: .95rem 1rem;
          transition: transform 220ms cubic-bezier(.22,.9,.35,1), box-shadow 220ms;
          cursor: default;
        }
        .chip:hover { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 36px rgba(0,0,0,0.18); }

        .chip-title {
          font-weight: 800;
          color: rgb(36,36,42);
          font-size: 0.98rem;
          letter-spacing: -0.01em;
          margin-bottom: .25rem;
          line-height: 1.3;
        }
        .chip-meta {
          display: flex; align-items: center; flex-wrap: wrap; gap: .45rem;
          color: rgba(36,36,42,0.72);
          font-weight: 700; font-size: .9rem;
        }
        .dot { opacity: 0.5; }

        /* ========= Small-screen tuning ========= */
        @media (max-width: 720px) {
          .search { height: 42px; }
          .chip { padding: .85rem .9rem; }
          .chip-title { font-size: .96rem; }
          .chip-meta { font-size: .88rem; }
        }
      `}</style>
    </div>
  );
}

