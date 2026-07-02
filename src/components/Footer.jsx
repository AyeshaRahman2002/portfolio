// Components/Footer.jsx
export default function Footer({ email, linkedin, github }) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "1.25rem clamp(16px, 8vw, 80px)",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.75rem",
      }}
    >
      <div style={{ color: "rgba(240,240,248,0.45)", fontSize: "0.85rem", fontWeight: 600 }}>
        © {year} Ayesha Rahman
      </div>
      <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
        <a
          href={`mailto:${email}`}
          style={{ color: "rgba(240,240,248,0.6)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
        >
          Gmail
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(240,240,248,0.6)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
        >
          LinkedIn
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{ color: "rgba(240,240,248,0.6)", fontSize: "0.85rem", fontWeight: 600, textDecoration: "none" }}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
