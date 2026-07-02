// Components/ProjectCard.jsx
import { useState, useRef, useEffect } from "react";

export default function ProjectCard({
  image,
  title,
  category,
  tags,
  suggestions,
  description,
  descriptionBullets,
  githubLink,
  videoLink,
  reportLinks,
  getResponse,
}) {
  const defaultSuggestions = [
    "Give me a summary",
    "What tech was used?",
    "What were the key challenges?",
    "What were the results?",
    ...(githubLink ? ["Show me the GitHub"] : []),
    ...(reportLinks?.length ? ["Where's the report?"] : []),
  ];
  const chips = suggestions ?? defaultSuggestions;

  const [mode, setMode] = useState("closed"); // "closed" | "detail" | "chat"
  const [usedChips, setUsedChips] = useState(new Set());
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hi! Ask me anything about this project." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (mode !== "closed") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mode]);

  const defaultResponder = (input) => {
    const text = input.toLowerCase();
    if (/(github|code|repo)/.test(text) && githubLink)
      return `Explore the code on GitHub: ${githubLink}`;
    if (/(video|demo|presentation)/.test(text))
      return videoLink ? `Watch the demo here: ${videoLink}` : "No video available for this project.";
    if (/(report|paper|docs?)/.test(text)) {
      if (reportLinks?.length > 0)
        return `Documents:\n${reportLinks.map((r) => `• ${r.name}`).join("\n")}`;
      return "No report available for this project.";
    }
    if (/(summary|overview|what|about)/.test(text))
      return `${title}: click the Overview tab to see the project description and key highlights.`;
    return "Try asking about the approach, models, results, or links like GitHub, video and report.";
  };

  const responder = typeof getResponse === "function" ? getResponse : defaultResponder;

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setUsedChips((prev) => new Set([...prev, text]));
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "assistant", text: responder(text) }]);
    }, 350);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleKeyDown = (e) => { if (e.key === "Enter") handleSend(); };

  const hasLinks = githubLink || videoLink || (reportLinks?.length > 0);

  return (
    <>
      {/* ── Compact grid card ── */}
      <div
        className="pc-card"
        onClick={() => setMode("detail")}
        style={{
          borderRadius: 14,
          overflow: "hidden",
          background: "rgba(30,30,42,0.85)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
          cursor: "pointer",
          transition: "transform 200ms ease, box-shadow 200ms ease",
          display: "flex",
          flexDirection: "column",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.16)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)";
        }}
      >
        {/* Thumbnail */}
        <div style={{ height: 160, overflow: "hidden", flexShrink: 0 }}>
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
          />
        </div>

        {/* Card body */}
        <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
          <span style={{
            fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
            color: "rgba(160,200,255,0.85)", lineHeight: 1,
          }}>
            {category}
          </span>
          <h3 style={{
            margin: 0, fontSize: "0.95rem", fontWeight: 700, color: "#f0f0f8",
            lineHeight: 1.35, display: "-webkit-box", WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {title}
          </h3>

          {tags?.length > 0 && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  fontSize: 11, fontWeight: 700, padding: "2px 8px",
                  borderRadius: 6, background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(240,240,248,0.6)", letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span style={{ fontSize: 12, color: "rgba(240,240,248,0.35)", marginTop: "auto", paddingTop: 6 }}>
            Click to expand →
          </span>
        </div>
      </div>

      {/* ── Modal (detail + chat) ── */}
      {mode !== "closed" && (
        <div
          onClick={() => setMode("closed")}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(4px)",
            display: "flex", justifyContent: "center", alignItems: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%", maxWidth: 780,
              maxHeight: "88vh",
              borderRadius: 18,
              background: "rgba(14,14,24,0.96)",
              backdropFilter: "blur(32px) saturate(160%)",
              WebkitBackdropFilter: "blur(32px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.12)",
              display: "flex", flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Modal header */}
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "flex-start",
              gap: 12, padding: "20px 22px 16px",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}>
              <div style={{ minWidth: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(160,200,255,0.85)" }}>
                  {category}
                </span>
                <h2 style={{ margin: "4px 0 0", fontSize: "clamp(1rem,2.5vw,1.25rem)", fontWeight: 800, color: "#f0f0f8", lineHeight: 1.3 }}>
                  {title}
                </h2>
              </div>
              <button
                onClick={() => setMode("closed")}
                style={{ flexShrink: 0, border: "none", background: "rgba(255,255,255,0.08)", color: "#f0f0f8", fontSize: 16, cursor: "pointer", padding: "6px 10px", borderRadius: 8, lineHeight: 1 }}
              >
                ✕
              </button>
            </div>

            {/* Tab switcher */}
            <div style={{ display: "flex", gap: 8, padding: "12px 22px 0", flexShrink: 0 }}>
              {["detail", "chat"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setMode(tab)}
                  style={{
                    padding: "7px 16px", borderRadius: 10, border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: "0.88rem",
                    background: mode === tab ? "rgba(255,255,255,0.15)" : "transparent",
                    color: mode === tab ? "#f0f0f8" : "rgba(240,240,248,0.45)",
                    transition: "background 150ms, color 150ms",
                  }}
                >
                  {tab === "detail" ? "Overview" : "Chat"}
                </button>
              ))}
            </div>

            {/* Modal body */}
            <div style={{ overflowY: "auto", padding: "16px 22px 22px", flex: 1 }}>

              {mode === "detail" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {/* Image */}
                  <div style={{ borderRadius: 12, overflow: "hidden", maxHeight: 240 }}>
                    <img src={image} alt={title} style={{ width: "100%", height: "100%", maxHeight: 240, objectFit: "cover", objectPosition: "center top", display: "block" }} />
                  </div>

                  {/* Bullets */}
                  {Array.isArray(descriptionBullets) && descriptionBullets.length > 0 && (
                    <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                      {descriptionBullets.map((b, i) => (
                        <li key={i} style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(240,240,248,0.82)" }}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {!Array.isArray(descriptionBullets) && description && (
                    <p style={{ margin: 0, fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(240,240,248,0.82)" }}>{description}</p>
                  )}

                  {/* Links */}
                  {hasLinks && (
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer"
                          style={{ padding: "8px 16px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", background: "#111", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
                          GitHub ↗
                        </a>
                      )}
                      {videoLink && (
                        <a href={videoLink} target="_blank" rel="noopener noreferrer"
                          style={{ padding: "8px 16px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", background: "rgba(255,255,255,0.08)", color: "#f0f0f8", border: "1px solid rgba(255,255,255,0.13)" }}>
                          ▶ Video
                        </a>
                      )}
                      {reportLinks?.map((r) => (
                        <a key={r.url} href={r.url} download
                          style={{ padding: "8px 16px", borderRadius: 10, textDecoration: "none", fontWeight: 700, fontSize: "0.88rem", background: "rgba(255,255,255,0.08)", color: "#f0f0f8", border: "1px solid rgba(255,255,255,0.13)" }}>
                          ↓ {r.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* CTA to chat */}
                  <button
                    onClick={() => setMode("chat")}
                    style={{
                      alignSelf: "flex-start", padding: "10px 20px", borderRadius: 12, border: "1px solid rgba(160,200,255,0.3)",
                      background: "rgba(120,180,255,0.1)", color: "rgba(180,220,255,0.9)", fontWeight: 700,
                      fontSize: "0.9rem", cursor: "pointer",
                    }}
                  >
                    Chat about this project →
                  </button>
                </div>
              )}

              {mode === "chat" && (
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{
                    minHeight: 260, maxHeight: 360, borderRadius: 12, padding: "12px 14px",
                    background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                    overflowY: "auto", display: "flex", flexDirection: "column", gap: 10,
                  }}>
                    {messages.map((msg, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: msg.sender === "user" ? "flex-end" : "flex-start", gap: 2 }}>
                        <span style={{ fontSize: 11, fontWeight: 700, color: "rgba(240,240,248,0.4)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                          {msg.sender === "user" ? "You" : "AI"}
                        </span>
                        <div style={{
                          maxWidth: "85%", padding: "9px 13px", borderRadius: 12, fontSize: "0.9rem", lineHeight: 1.5,
                          background: msg.sender === "user" ? "rgba(120,180,255,0.15)" : "rgba(255,255,255,0.07)",
                          color: "#f0f0f8", border: "1px solid rgba(255,255,255,0.08)",
                          whiteSpace: "pre-wrap",
                        }}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggestion chips */}
                  {chips.filter((c) => !usedChips.has(c)).length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                      {chips.filter((c) => !usedChips.has(c)).map((chip) => (
                        <button
                          key={chip}
                          onClick={() => sendMessage(chip)}
                          style={{
                            padding: "6px 13px", borderRadius: 20,
                            border: "1px solid rgba(160,200,255,0.25)",
                            background: "rgba(120,180,255,0.08)",
                            color: "rgba(180,220,255,0.85)",
                            fontSize: "0.82rem", fontWeight: 600,
                            cursor: "pointer", transition: "background 150ms, border-color 150ms",
                            whiteSpace: "nowrap",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(120,180,255,0.18)";
                            e.currentTarget.style.borderColor = "rgba(160,200,255,0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "rgba(120,180,255,0.08)";
                            e.currentTarget.style.borderColor = "rgba(160,200,255,0.25)";
                          }}
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}

                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      type="text"
                      placeholder="Ask anything about this project..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      style={{
                        flex: 1, padding: "11px 14px", borderRadius: 12,
                        border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)",
                        color: "#f0f0f8", fontSize: "0.9rem", outline: "none",
                      }}
                    />
                    <button
                      onClick={handleSend}
                      style={{ padding: "10px 18px", borderRadius: 12, border: "none", background: "rgba(255,255,255,0.9)", color: "#0d0d1a", fontWeight: 800, cursor: "pointer", fontSize: "0.9rem" }}
                    >
                      Send
                    </button>
                  </div>
                  <small style={{ color: "rgba(240,240,248,0.3)", fontSize: 12 }}>Click outside to close</small>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
