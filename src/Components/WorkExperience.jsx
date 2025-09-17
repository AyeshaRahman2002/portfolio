// Components/WorkExperience.jsx
import React from "react";
import outlierLogo from "../assets/logos/outlier.png";
import utiLogo from "../assets/logos/UTI.png";
import cribsLogo from "../assets/logos/cribs.png";
import leedsLogo from "../assets/logos/UniofLeeds.png";
import instaLogo from "../assets/logos/insta.png";

const RELEVANT = [
  {
    role: "Freelance Software Developer",
    company: "Outlier",
    location: "Remote",
    dates: "Dec 2024 - Sep 2025",
    logo: outlierLogo,
    bullets: [
      "Designed and tested AI prompts with emphasis on edge cases and QA.",
      "Built full-stack client websites using HTML, CSS, JavaScript, and Flask.",
      "Collaborated with cross-functional teams to develop web tools aligned with client needs.",
    ],
  },
  {
    role: "Equity Research Analyst",
    company: "UTI Mutual Fund (Mumbai)",
    location: "Mumbai, India",
    dates: "Jul 2023 - Sep 2023",
    logo: utiLogo,
    bullets: [
      "Built two web-scraping tools (hotel room pricing, Google Flight pricing).",
      "Analyzed travel & hospitality datasets and presented comparative research to equity managers.",
      "Contributed to sectoral analysis and financial trend reporting for potential portfolios.",
    ],
  },
];

const OTHER = [
  {
    role: "Brand Manager (Part-time)",
    company: "Student Cribs",
    location: "Leeds, UK",
    dates: "Oct 2022 - Sep 2023",
    logo: cribsLogo,
    bullets: ["Campus marketing, partnerships, and student outreach to drive lead generation."],
  },
  {
    role: "Events Promoter & Night Staff",
    company: "University of Leeds",
    location: "Leeds, UK",
    dates: "2023 - 2024",
    logo: leedsLogo,
    bullets: ["Supported event logistics and student engagement across multiple venues."],
  },
  {
    role: "Freelance Artist",
    company: "Self-employed",
    location: "Remote",
    dates: "Ongoing",
    logo: instaLogo,
    bullets: ["Commission-based illustrations and digital artwork."],
  },
];

const VOLUNTEER = [
  {
    role: "Teacher",
    company: "Government Primary School",
    location: "Bihar, India",
    dates: "Aug 2018 - Dec 2018",
    bullets: [
      "Taught Mathematics and English to primary and secondary students in village schools.",
      "Developed lesson plans and class materials to improve learning outcomes.",
    ],
  },
  {
    role: "Freelance Translator",
    company: "Government Primary School",
    location: "Bihar, India",
    dates: "Aug 2018 - Dec 2018",
    bullets: [
      "Translated educational materials Hindi/Urdu ↔ English for students learning English.",
      "Supported students’ language proficiency through 1:1 and small-group assistance.",
    ],
  },
];

function Card({ item }) {
  return (
    <article className="glass-card">
      <header className="card-head">
        {item.logo && (
          <img
            src={item.logo}
            alt={`${item.company} logo`}
            className="logo"
            loading="lazy"
            decoding="async"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        )}
        <div>
          <h3 className="role">{item.role}</h3>
          <div className="meta">
            <span className="company">{item.company}</span>
            <span className="dot">•</span>
            <span className="dates">{item.dates}</span>
          </div>
          <div className="submeta">{item.location}</div>
        </div>
      </header>

      {item.bullets?.length ? (
        <ul className="bullets">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function WorkExperience() {
  return (
    <section className="wrap">
      {/* SECTION: Relevant */}
      <h2 className="section-title">Relevant Experience</h2>
      <div className="grid">
        {RELEVANT.map((item, idx) => (
          <Card key={`rel-${idx}`} item={item} />
        ))}
      </div>

      {/* SECTION: Other */}
      <h2 className="section-title" style={{ marginTop: "2.25rem" }}>
        Other Experience
      </h2>
      <div className="grid">
        {OTHER.map((item, idx) => (
          <Card key={`oth-${idx}`} item={item} />
        ))}
      </div>

      {/* SECTION: Volunteering */}
      <h2 className="section-title" style={{ marginTop: "2.25rem" }}>
        Volunteering
      </h2>
      <div className="grid">
        {VOLUNTEER.map((item, idx) => (
          <Card key={`vol-${idx}`} item={item} />
        ))}
      </div>

      {/* styles local to this component */}
      <style>{`
        .wrap {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding-top: clamp(50px, 11vh, 100px);
          scroll-margin-top: 50px;
        }

        .section-title {
          margin: 0 0 0.9rem 0;
          font-size: clamp(1.4rem, 3.2vw, 1.9rem);
          font-weight: 900;
          letter-spacing: -0.01em;
          color: rgb(36,36,42);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .glass-card {
          position: relative;
          padding: 1.25rem 1.25rem 1.1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: 0 10px 28px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.4);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transform: translateZ(0) scale(1);
          transition: transform 240ms cubic-bezier(.22,.9,.35,1),
                      box-shadow 240ms cubic-bezier(.22,.9,.35,1),
                      background 240ms ease;
          will-change: transform, box-shadow;
          cursor: pointer;
        }

        .glass-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 16px 42px rgba(0,0,0,0.22), 0 0 0 1px rgba(0,0,0,0.02) inset;
          background: rgba(255, 255, 255, 0.34);
        }

        .card-head {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.6rem;
        }

        .logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
          border-radius: 8px;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.6);
        }

        .role {
          margin: 0 0 0.25rem 0;
          font-size: clamp(1.1rem, 1.8vw, 1.35rem);
          line-height: 1.2;
          font-weight: 800;
          color: rgb(36,36,42);
          letter-spacing: -0.01em;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          color: rgba(36,36,42,0.88);
          font-size: 0.98rem;
        }

        .submeta {
          margin-top: 0.2rem;
          color: rgba(36,36,42,0.65);
          font-size: 0.9rem;
        }

        .dot { opacity: 0.5; }
        .company { font-weight: 800; }
        .dates { font-weight: 600; }

        .bullets {
          margin: 0.6rem 0 0;
          padding: 0 0 0 1.1rem;
          display: grid;
          gap: 0.4rem;
          color: rgba(36,36,42,0.86);
          font-size: 0.98rem;
          line-height: 1.5;
        }

        @media (max-width: 720px) {
          .wrap { padding-top: 96px; } /* a bit tighter on small screens */
          .glass-card { padding: 1rem; }
        }
      `}</style>
    </section>
  );
}
