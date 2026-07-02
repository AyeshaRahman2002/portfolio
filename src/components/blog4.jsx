// Components/Blog4.jsx
export default function Blog4({ onBack }) {
  const meta = {
    title: "Exploring Cybersecurity through AI and Building a Risk-Aware System",
    date: "2025-10-11",
    readingMins: 7,
    tags: ["Cybersecurity", "Adaptive Security", "Risk Intelligence", "Identity", "Explainable AI"],
  };

  return (
    <article style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
      <button
        onClick={onBack}
        style={{
          border: "1px solid rgba(255,255,255,0.15)",
          background: "rgba(255,255,255,0.08)",
          color: "#f0f0f8",
          borderRadius: 12,
          padding: "10px 15px",
          cursor: "pointer",
          fontWeight: 700,
          marginTop: 50,
          marginBottom: 16,
        }}
      >
        ← Back to Blog
      </button>

      <h1 style={{ margin: "6px 0 8px", fontWeight: 900, letterSpacing: "-0.02em", color: "#f0f0f8" }}>
        {meta.title}
      </h1>

      <div style={{ opacity: 0.7, marginBottom: 20, color: "#f0f0f8" }}>
        {new Date(meta.date).toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}{" "}
        • ~{meta.readingMins} min read
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {meta.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: ".85rem",
              padding: "4px 10px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.08)",
              color: "#f0f0f8",
              fontWeight: 700,
            }}
          >
            #{t}
          </span>
        ))}
      </div>

      <div style={{ lineHeight: 1.7, fontSize: "1.04rem", color: "rgba(240,240,248,0.85)" }}>
        <p>
          My introduction to cybersecurity did not start from encryption algorithms or 
          network firewalls. It began with a simple question can an app understand the 
          risk behind every login and transaction, instead of treating all users the same?
          That question led me into the intersection of AI and security, where systems learn 
          to recognize context, adapt behavior, and make decisions that are both explainable 
          and fair.
        </p>

        <h3>Learning security by building it</h3>
        <p>
          I started by designing a finance app that went beyond managing budgets. 
          The goal was to make it aware of its own users and their risk profiles. 
          Using Flutter for the frontend and FastAPI for the backend, I built a 
          small ecosystem where every login, transaction, and device connection 
          became part of a larger learning loop. I implemented adaptive authentication, 
          geo-intelligence, and device trust using lightweight scoring models. 
          Over time, this evolved into a complete Security Center inside the app.
        </p>

        <h3>How AI fits into security</h3>
        <p>
          AI came in where rules stopped being enough. I trained contextual models 
          that analyzed login behavior, transaction frequency, and device consistency 
          to calculate a dynamic risk score. Instead of labeling users as safe or unsafe, 
          the system evaluated intent, time, and context. It surfaced “why” a login 
          was flagged, using explainable AI methods so that the user could see the reason 
          behind every alert. This transparency became the bridge between security and trust.
        </p>

        <h3>Challenges that shaped my understanding</h3>
        <p>
          I learned quickly that cybersecurity is as much about restraint as detection. 
          Collecting every possible signal may look powerful, but it also risks privacy 
          and interpretability. I focused on designing clear audit trails and 
          transparent scoring mechanisms. The hardest part was building a risk 
          system that was both proactive and respectful strong enough to detect 
          anomalies yet simple enough for the user to understand.
        </p>

        <h3>Simulating real threats</h3>
        <p>
          To evaluate my system, I tested adversarial patterns such as rapid 
          login attempts from similar networks, inconsistent device identifiers, 
          and location spoofing. These tests helped refine my anomaly detection logic 
          and improve the system’s explainability layer. Each test was less about 
          catching an intruder and more about understanding how adaptive systems 
          should respond to uncertainty.
        </p>

        <h3>What this journey taught me</h3>
        <ul>
          <li>AI in security should explain, not just decide.</li>
          <li>Privacy is a feature, not an afterthought.</li>
          <li>Users trust systems that are transparent and reversible.</li>
          <li>Small context-aware models outperform rigid rule engines.</li>
          <li>Every alert should lead to insight, not panic.</li>
        </ul>

        <h3>Looking forward</h3>
        <p>
          My next step is to expand the adaptive scoring into a continuous learning loop 
          that adjusts risk thresholds over time. I also plan to integrate behavioral 
          analytics that can learn from new devices and travel patterns without storing 
          sensitive personal data. What started as a finance app experiment has grown 
          into a real appreciation for the balance between intelligence, transparency, 
          and user control in modern cybersecurity.
        </p>

        <p>
          This journey taught me that security is not just a backend feature it is a 
          conversation between a user, their context, and a system that learns to protect 
          them intelligently.
        </p>
      </div>
    </article>
  );
}
