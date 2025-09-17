// Components/ProjectCard.jsx
import { useState, useRef, useEffect } from "react";

export default function ProjectCard({
  image,
  title,
  description,
  descriptionBullets,
  githubLink,
  videoLink,
  reportLinks,
  getResponse,
}) {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hi! Ask me anything about this project!" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const defaultResponder = (input) => {
    const text = input.toLowerCase();

    if (/(github|code|repo)/.test(text) && githubLink) {
      return `You can explore the full project code on GitHub: ${githubLink}`;
    }
    if (/(video|demo|presentation)/.test(text)) {
      return videoLink ? `Watch the project video or demo here: ${videoLink}` : "No video link is available for this project.";
    }
    if (/(report|paper|documentation|docs?)/.test(text)) {
      if (reportLinks && reportLinks.length > 0) {
        const list = reportLinks.map((r) => `• ${r.name}: ${r.url}`).join("\n");
        return `Project documents:\n${list}`;
      }
      return "No report link is available for this project.";
    }

    if (/(architecture|approach)/.test(text)) {
      return "This project uses a modular pipeline with data ingestion preprocessing model training evaluation and reporting.";
    }
    if (/(model|models)/.test(text)) {
      return "Several baseline and advanced models were compared with selection by cross validated performance and interpretability.";
    }
    if (/(dataset|data set|data)/.test(text)) {
      return "The dataset was cleaned normalised and split into train validation and test with careful leakage prevention.";
    }
    if (/(results|metrics|performance|error|accuracy|rmse|mae|r2)/.test(text)) {
      return "Results were benchmarked with standard metrics and ablations to understand sensitivity to features and hyperparameters.";
    }

    return "Try asking about architecture models datasets results benchmarks or links like GitHub video and report.";
  };

  const responder = typeof getResponse === "function" ? getResponse : defaultResponder;

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [...prev, { sender: "user", text: inputValue }]);

    setTimeout(() => {
      const response = responder(inputValue);
      setMessages((prev) => [...prev, { sender: "assistant", text: response }]);
    }, 400);

    setInputValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* Project Card */}
      <div
        className="project-card"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          borderRadius: 16,
          padding: "18px",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(18px) saturate(120%)",
          boxShadow: "0 8px 30px rgba(10,10,10,0.12)",
          border: "1px solid rgba(255,255,255,0.08)",
          cursor: "default",
        }}
      >
        {/* Image */}
        <div style={{ flex: "0 0 48%", minWidth: 320 }}>
          <img
            src={image}
            alt={title}
            onClick={() => setChatOpen(true)}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 12,
              objectFit: "cover",
              display: "block",
              boxShadow: "0 12px 30px rgba(0,0,0,0.18)",
              cursor: "pointer",
            }}
          />
        </div>

        {/* Project info */}
        <div style={{ flex: "1 1 52%", display: "flex", flexDirection: "column", gap: 12 }}>
          <h3 style={{ margin: 0, fontSize: "1.5rem", lineHeight: 1.1, fontWeight: 700, color: "rgb(20,20,25)" }}>
            {title}
          </h3>

          {Array.isArray(descriptionBullets) && descriptionBullets.length > 0 ? (
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: "1rem", lineHeight: 1.6, color: "rgba(20,20,25,0.85)" }}>
              {descriptionBullets.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          ) : description ? (
            <p style={{ margin: 0, fontSize: "1rem", lineHeight: 1.5, color: "rgba(20,20,25,0.85)" }}>
              {description}
            </p>
          ) : null}

        </div>
      </div>

      {/* Chatbot overlay */}
      {chatOpen && (
        <div
          className="project-chat-overlay"
          onClick={() => setChatOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "12vh 20px",
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(8px)",
            overflowY: "auto",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 920,
              borderRadius: 14,
              padding: "18px",
              background: "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.45)",
              backdropFilter: "blur(18px) saturate(120%)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <div>
                <strong style={{ fontSize: "1.1rem", color: "rgb(18,18,20)" }}>{title}</strong>
                <div style={{ fontSize: "0.9rem", color: "rgba(18,18,20,0.65)" }}>Project assistant</div>
              </div>
              <button onClick={() => setChatOpen(false)} style={{ border: "none", background: "transparent", fontSize: 18, cursor: "pointer", padding: 8, borderRadius: 8 }}>✕</button>
            </div>

            {/* Links */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 16px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid rgba(255,255,255,0.14)",
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(12px)",
                    color: "rgb(18,18,20)",
                    boxShadow: "0 6px 18px rgba(0,0,0,0.18)"
                  }}
                >
                  GitHub
                </a>
              )}
              {videoLink && (
                <a
                  href={videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: "10px 16px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    color: "rgb(18,18,20)"
                  }}
                >
                  ▶ Video
                </a>
              )}
              {(reportLinks && reportLinks.length > 0) && reportLinks.map((r) => (
                <a
                  key={r.url}
                  href={r.url}
                  download
                  style={{
                    padding: "10px 16px",
                    borderRadius: 12,
                    textDecoration: "none",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    backdropFilter: "blur(10px)",
                    color: "rgb(18,18,20)"
                  }}
                >
                  {r.name}
                </a>
              ))}
            </div>

            {/* Chat area */}
            <div style={{ marginTop: 6, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ minHeight: 220, borderRadius: 10, padding: 12, background: "rgba(250,250,250,0.98)", border: "1px solid rgba(0,0,0,0.04)", overflowY: "auto" }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ marginBottom: 8, textAlign: msg.sender === "user" ? "right" : "left" }}>
                    <div style={{ fontWeight: 700, fontSize: 13 }}>{msg.sender === "user" ? "You" : "Assistant"}</div>
                    <div style={{ fontSize: 14, color: "rgb(28,28,30)" }}>{msg.text}</div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="text"
                  placeholder="Type a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{ flex: 1, padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(18,18,20,0.08)", fontSize: 14, outline: "none" }}
                />
                <button
                  onClick={handleSend}
                  style={{ padding: "10px 14px", borderRadius: 12, border: "none", background: "rgb(20,20,25)", color: "#fff", fontWeight: 700, cursor: "pointer" }}
                >
                  Send
                </button>
              </div>
            </div>

            <small style={{ color: "rgba(18,18,20,0.55)", marginTop: 4 }}>Click outside the box to close</small>
          </div>
        </div>
      )}
    </>
  );
}
