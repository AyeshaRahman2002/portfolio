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
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    provider: "Microsoft",
    platform: "Microsoft",
    tags: ["Microsoft"],
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft",
    platform: "Microsoft",
    tags: ["Microsoft"],
  },

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
  const limit = 6;
  const visible = items.slice(0, collapsed ? Math.min(limit, items.length) : items.length);

  return (
    <section className="group" role="region" aria-label={label}>
      <header className="group-head">
        <h3>{label}</h3>
        <div className="group-actions">
          {items.length > limit && (
            <button className="link-btn" onClick={() => setCollapsed((v) => !v)}>
              {collapsed ? "Show all" : "Collapse"}
            </button>
          )}
        </div>
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
        .wrap { width: 100%; max-width: 1100px; margin: 0 auto; }

        /* Keep the search fixed in place so the list doesn't jump */
        .filterbar {
          position: sticky;
          top: 115px; /* adjust to your navbar height */
          padding-top: .25rem;
          background: transparent;
          z-index: 1;
          margin-bottom: 1rem;
        }
        .search {
          width: 100%;
          padding: .75rem .9rem;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.65);
          box-shadow: 0 6px 18px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(10px);
          outline: none;
          font-size: 0.95rem;
        }

        .group { margin-top: 1.1rem; }
        .group-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: .6rem;
        }
        .group-head h3 {
          margin: 0; font-size: clamp(1.1rem, 2.4vw, 1.35rem);
          font-weight: 800; color: rgb(36,36,42);
        }
        .group-actions .link-btn {
          background: transparent; border: none; color: #0b63ce; font-weight: 700;
          cursor: pointer; padding: .25rem .4rem; border-radius: 8px;
        }
        .group-actions .link-btn:hover { text-decoration: underline; }

        /* Flex so each card keeps its own height (no stretching) */
        .grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
        }

        .chip {
          flex: 1 1 280px;        /* min width */
          border-radius: 16px;
          background: rgba(255,255,255,0.28);
          border: 1px solid rgba(255,255,255,0.55);
          box-shadow: 0 10px 24px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: .95rem 1rem;
          transition: transform 220ms cubic-bezier(.22,.9,.35,1), box-shadow 220ms;
          align-self: flex-start;
          cursor: default;        /* no click */
        }
        .chip:hover { transform: translateY(-3px) scale(1.005); box-shadow: 0 16px 36px rgba(0,0,0,0.18); }

        .chip-title {
          font-weight: 800;
          color: rgb(36,36,42);
          font-size: 0.98rem;
          letter-spacing: -0.01em;
          margin-bottom: .25rem;
        }
        .chip-meta {
          display: flex; align-items: center; gap: .45rem;
          color: rgba(36,36,42,0.72);
          font-weight: 700; font-size: .9rem;
        }
        .dot { opacity: 0.5; }

        @media (max-width: 720px) {
          .chip { padding: .85rem .9rem; }
        }
      `}</style>
    </div>
  );
}
