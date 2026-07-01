// Components/blog3.jsx
export default function Blog3({ onBack }) {
    const meta = {
      title: "The Role of Artificial Intelligence in Finance",
      date: "2025-05-22",
      readingMins: 7,
      tags: ["Finance", "AI", "Forecasting", "NLP", "Security", "Blockchain"],
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
            Artificial intelligence has become one of the most valuable tools in modern finance. From forecasting trends to detecting fraud, AI helps institutions make faster and smarter decisions with stronger security. For recruiters the appeal is not only technical depth but direct impact on profit, risk control, and customer trust.
          </p>
  
          <h3>Smarter Forecasting and Investment Decisions</h3>
          <p>
            Markets are complex and influenced by many variables. Traditional models can miss these dynamics, while AI brings stronger predictive power. I built forecasting models for United States inflation using deep learning architectures such as LSTM, GRU, and NBEATS. With robust data pipelines, feature checks, and validation across multiple horizons, the models delivered accurate forecasts that informed macro views and asset allocation. This shows practical skill in bringing AI to real economic problems with precision.
          </p>
  
          <h3>Automating Data Collection and Analysis</h3>
          <p>
            Decisions are only as good as the data that supports them. During my role as an Equity Research Analyst at UTI Mutual Fund I created automated scraping tools to gather structured datasets such as hotel prices and flight costs. These tools reduced manual effort by thirty percent and gave analysts richer inputs for coverage and valuation work. The result was a faster research loop that combined AI with automation to support data driven strategies.
          </p>
  
          <h3>AI in Market Sentiment Analysis</h3>
          <p>
            Public opinion and investor mood shape price action. Using natural language methods and classification models, AI can track sentiment in news and social streams and relate those signals to movement in equities. I built a sentiment system that linked crowd opinion with discretized stock price moves, which created a clear feature for tactical models used by traders and fintech products.
          </p>
  
          <h3>Fraud Detection and Security</h3>
          <p>
            Protecting customers and platforms is essential. Learning models can flag unusual patterns in transactions and detect fraud in real time. My background in security and privacy, including Microsoft Security Compliance and Identity certification, guides my approach to AI solutions that respect regulation and earn trust. I design systems that keep data safe while supporting practical monitoring and audit.
          </p>
  
          <h3>Blockchain and Decentralized Finance</h3>
          <p>
            The next frontier is the meeting point of AI and blockchain. Through academic and industry training I explored blockchain transformation in financial services and the rise of decentralized finance. Bringing AI to this space enables secure digital identity, risk scoring, and smarter settlement. These building blocks support inclusive financial ecosystems that scale across regions.
          </p>
  
          <h3>Looking Ahead</h3>
          <p>
            Finance is changing quickly and AI is at the center of this shift. From inflation prediction to automated analysis and stronger compliance, AI is redefining how institutions operate. Recruiters need builders who combine strong engineering with a deep understanding of financial workflows. My experience across equity research, forecasting, sentiment modeling, and secure AI delivery positions me to contribute to teams that bridge technology and strategy.
          </p>
          <p>
            The future will favor organizations that adopt AI responsibly and professionals who can turn models into decisions that create value for clients and stakeholders.
          </p>
        </div>
      </article>
    );
  }
  