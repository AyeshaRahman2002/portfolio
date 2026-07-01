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
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.07)",

    outline: "none",
    fontSize: "1rem",
    color: "#f0f0f8",
  };

  return (
    <div
        style={{
            maxWidth: 780,
            width: "100%",
            margin: "0 auto",
            padding: "2rem",
            borderRadius: 20,
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
            backdropFilter: "blur(28px) saturate(160%)",
            WebkitBackdropFilter: "blur(28px) saturate(160%)",
            color: "#f0f0f8",
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
              border: "1px solid transparent",
              background: "rgba(255,255,255,0.92)",
              color: "#0d0d1a",
          
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
