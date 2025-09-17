// Components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const [cooldown, setCooldown] = useState(false);

  const FORMSPREE_ID = "mqadonld";
  const action = `https://formspree.io/f/${FORMSPREE_ID}`;

  async function onSubmit(e) {
    e.preventDefault();
    if (cooldown) return;

    const form = e.currentTarget;
    const data = new FormData(form);

    // honeypot
    if (data.get("website")) return;

    // basic validation
    const email = String(data.get("email") || "");
    if (!data.get("name") || !email || !data.get("message")) {
      setStatus({ state: "error", msg: "Please fill in all required fields." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ state: "error", msg: "Please enter a valid email address." });
      return;
    }

    setStatus({ state: "loading", msg: "Sending..." });
    setCooldown(true);

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        form.reset();
        setStatus({ state: "success", msg: "Thanks! I’ll get back to you soon." });
      } else {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Something went wrong.");
      }
    } catch (err) {
      setStatus({ state: "error", msg: err.message || "Failed to send message." });
    } finally {
      setTimeout(() => setCooldown(false), 6000);
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    borderRadius: "12px",
    border: "1px solid rgba(0,0,0,0.08)",
    background: "rgba(255,255,255,0.45)",
    backdropFilter: "blur(10px)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
    outline: "none",
    fontSize: "1rem",
  };

  return (
    <div
        style={{
            maxWidth: 780,
            width: "100%",
            margin: "0 auto",
            padding: "2rem",
            borderRadius: 20,
            background:
            "linear-gradient(135deg, rgba(255,192,203,0.35), rgba(173,216,230,0.35))",
            border: "1px solid rgba(255,255,255,0.6)",
            boxShadow: `
            0 12px 35px rgba(0,0,0,0.25),   /* main shadow */
            0 6px 15px rgba(0,0,0,0.12),   /* softer inner falloff */
            inset 0 1px 1px rgba(255,255,255,0.6) /* subtle glass highlight */
            `,
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
        }}
        >
      <h2 style={{ marginTop: 0, marginBottom: "1rem", fontWeight: 800 }}>
        Get in Touch
      </h2>
      <p style={{ marginTop: 0, marginBottom: "1.25rem", opacity: 0.8 }}>
        Prefer email?{" "}
        <a href="mailto:ayesharahman7755@gmail.com">ayesharahman7755@gmail.com</a>
      </p>

      <form onSubmit={onSubmit} action={action} method="POST" noValidate>
        {/* Honeypot (spam trap) */}
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          style={{ position: "absolute", left: "-5000px" }}
        />

        <div style={{ display: "grid", gap: "12px", gridTemplateColumns: "1fr 1fr" }}>
          <div>
            <label style={{ fontWeight: 700, display: "block", marginBottom: 6 }}>
              Name<span style={{ opacity: 0.6 }}>*</span>
            </label>
            <input name="name" type="text" required placeholder="Your name" style={inputStyle} />
          </div>

          <div>
            <label style={{ fontWeight: 700, display: "block", marginBottom: 6 }}>
              Email<span style={{ opacity: 0.6 }}>*</span>
            </label>
            <input name="email" type="email" required placeholder="you@example.com" style={inputStyle} />
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <label style={{ fontWeight: 700, display: "block", marginBottom: 6 }}>
            Subject
          </label>
          <input name="subject" type="text" placeholder="How can I help?" style={inputStyle} />
        </div>

        <div style={{ marginTop: 12 }}>
          <label style={{ fontWeight: 700, display: "block", marginBottom: 6 }}>
            Message<span style={{ opacity: 0.6 }}>*</span>
          </label>
          <textarea
            name="message"
            required
            placeholder="Write your message..."
            rows={6}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center", marginTop: 16 }}>
          <button
            type="submit"
            disabled={status.state === "loading" || cooldown}
            style={{
              padding: "12px 18px",
              borderRadius: 12,
              border: "1px solid rgba(0,0,0,0.1)",
              background: "linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0.35))",
              backdropFilter: "blur(10px)",
              fontWeight: 800,
              cursor: cooldown ? "not-allowed" : "pointer",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          >
            {status.state === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status.state !== "idle" && (
            <span
              role="status"
              aria-live="polite"
              style={{
                fontWeight: 700,
                opacity: status.state === "error" ? 1 : 0.85,
                color: status.state === "error" ? "#b00020" : "#0b5",
              }}
            >
              {status.msg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
