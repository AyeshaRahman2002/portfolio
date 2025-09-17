// Components/blog1.jsx
export default function Blog1({ onBack }) {
    const meta = {
      title: "My journey as a computer science student",
      date: "2025-05-21",
      readingMins: 6,
      tags: ["Journey", "Student Life", "CS"],
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
            I did not start computer science by cracking algorithms. I started by breaking things.
            My first project was a todo app that deleted everything when I refreshed the page.
            It was frustrating and it was the moment I realized I love building systems even when they misbehave.
          </p>
  
          <p>
            In my early semesters I focused on the fundamentals: data structures, operating systems,
            networks, and a lot of debugging. The turning point came when I paired the foundation
            with projects that felt real, from small web apps and visualizations to machine learning
            experiments that connected code with people.
          </p>
  
          <h3>Why projects mattered more than perfect grades</h3>
          <p>
            Shipping tiny and imperfect projects taught me real tradeoffs. I learned to choose simple designs,
            write readable code, and iterate. That loop of build → break → fix is where I learned the most.
          </p>
  
          <h3>Discovering AI and ML</h3>
          <p>
            My curiosity shifted to machine learning when I realized that models are software with statistics.
            I enjoyed building preprocessing pipelines, evaluating results, and telling clear stories with data.
            Finance and health soon became my favorite places to test ideas in the real world.
          </p>
  
          <h3>What I built in finance and health</h3>
          <p>
            <strong>Finance:</strong> I automated data collection for research, explored market sentiment for
            movement in stock prices, and built time series models for inflation forecasting. The key lesson was
            that clean data and honest baselines beat clever tricks every time.
          </p>
          <p>
            <strong>Health:</strong> I prototyped a digital support tool for adults with autism that used eye tracking
            signals and a lightweight NLP game. It taught me that privacy, consent, and clear interfaces matter as much
            as accuracy, especially when systems support people directly.
          </p>
  
          <h3>What I wish I knew sooner</h3>
          <ul>
            <li>Write docs for your future self. Past me is my most frequent collaborator.</li>
            <li>Small daily practice beats weekend marathons.</li>
            <li>Read source code. Frameworks are friendlier than they look.</li>
          </ul>
  
          <h3>Where I am headed</h3>
          <p>
            I want to keep building tools at the intersection of software engineering and AI for finance and health.
            I care about forecasting under uncertainty, privacy aware data products, and interfaces that explain decisions.
            This portfolio and this post are part of that journey.
          </p>
  
          <p>Thanks for reading. If you are a student starting out, build, share, and repeat.</p>
        </div>
      </article>
    );
  }
  