// Components/blog2.jsx
export default function Blog2({ onBack }) {
    const meta = {
      title: "The Role of Artificial Intelligence in Transforming Healthcare",
      date: "2025-05-21",
      readingMins: 7,
      tags: ["Healthcare", "AI", "Security", "Cloud", "Ethics"],
    };
  
    return (
      <article style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        <button
          onClick={onBack}
          style={{
            border: "1px solid rgba(0,0,0,0.12)",
            background: "#fff",
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
  
        <h1 style={{ margin: "6px 0 8px", fontWeight: 900, letterSpacing: "-0.02em" }}>
          {meta.title}
        </h1>
  
        <div style={{ opacity: 0.7, marginBottom: 20 }}>
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
                border: "1px solid rgba(0,0,0,0.12)",
                background: "rgba(255,255,255,0.9)",
                fontWeight: 700,
              }}
            >
              #{t}
            </span>
          ))}
        </div>
  
        <div style={{ lineHeight: 1.7, fontSize: "1.04rem", color: "rgba(20,20,25,0.9)" }}>
          <p>
            Artificial intelligence is no longer a futuristic idea in healthcare. It is already driving progress in diagnostics, treatment, and patient care. For recruiters and industry leaders, the real value of AI is not only the technical lift but the ability to solve challenges around access, efficiency, and security in modern health systems.
          </p>
  
          <h3>Smarter and Earlier Diagnosis</h3>
          <p>
            AI excels at finding patterns in complex data. Learning models can study medical images, patient behavior, or even speech and text to flag early signs of conditions that might be missed during routine care. In my work I designed a digital health prototype that used learning models with eye tracking and natural language methods to support assessment for Autism Spectrum Disorder in adults. The goal was to give clinicians support tools that raise speed and reliability while keeping a patient friendly design.
          </p>
  
          <h3>Data Security and Privacy by Design</h3>
          <p>
            Health innovation does not work without trust. Sensitive records require strong safeguards, and AI systems should follow privacy first principles from the start. During development of health focused apps I implemented encrypted storage, secure sign in, and data anonymization. These choices were not just checkboxes. They were core parts of building solutions that patients and clinicians can adopt with confidence. For recruiters this shows an ability to align advanced AI work with compliance, security, and ethical standards.
          </p>
  
          <h3>Personalization Through Data</h3>
          <p>
            Beyond diagnosis, AI can tailor treatment to each person. Deep models can blend lifestyle data, genetic information, and medical history to recommend options that improve outcomes. My background with predictive modeling and time series forecasting shows how a data driven approach that I used in finance can extend to healthcare as well. The craft is to build, validate, and deploy models at scale so providers can deliver care that is precise and impactful.
          </p>
  
          <h3>Scalable and Reliable Systems</h3>
          <p>
            Health apps must serve diverse populations. By deploying on cloud platforms such as AWS and Azure I ensured secure delivery and resilience during heavy use. This foundation makes apps available not only in large medical centers but also in communities with limited resources, which expands reach and impact.
          </p>
  
          <h3>Responsible Innovation</h3>
          <p>
            Opportunity comes with responsibility. Reducing bias, improving transparency, and securing informed consent are as important as raw model performance. Across projects I focus on ethical AI practice, from careful handling of sensitive data to interfaces that support inclusion. For recruiters this reflects a focus on innovation that can last and earn trust.
          </p>
  
          <h3>Closing Thoughts</h3>
          <p>
            AI is not here to replace medical professionals. It is here to empower them, reduce workload, improve decisions, and make quality care more widely available. As organizations adopt AI at scale they will look for people who blend strong engineering with privacy and security awareness. With experience across AI, cloud engineering, and data protection I am ready to help health teams deliver solutions that are both innovative and responsible.
          </p>
        </div>
      </article>
    );
  }
  