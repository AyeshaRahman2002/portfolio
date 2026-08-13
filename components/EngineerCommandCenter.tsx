'use client';

import Image from '@/components/BasePathImage';
import { useEffect, useState } from 'react';

const profiles = [
  {
    key: 'ai', label: 'AI / ML', command: 'inspect --discipline ai-ml', code: 'ML-01',
    title: 'Machine intelligence built for real systems.',
    description: 'I build and evaluate learning systems across forecasting, language, vision, agentic AI and behavioural modelling, with a focus on evidence, reliability and deployment.',
    skills: ['PyTorch', 'Transformers', 'Agentic AI', 'Multi-agent systems', 'RAG', 'Time-series ML', 'Computer vision', 'Explainable AI', 'Federated ML'],
    implementations: [
      ['MODEL PIPELINES', 'Built forecasting, classification, anomaly-detection, retrieval and multimodal pipelines using PyTorch, scikit-learn and Hugging Face.'],
      ['AGENTIC + VISION', 'Designed BDI multi-agent simulations, agentic workflow orchestration, vision-language annotation and NeRF-based neural reconstruction.'],
      ['EVALUATION', 'Used walk-forward validation, cross-validation, LOKO testing, nDCG, ROUGE, BERTScore, SHAP and error analysis.'],
      ['EFFICIENCY', 'Implemented CPU-ready RAG, LoRA and PEFT experiments, vector retrieval, model comparison and reproducible Docker workflows.'],
    ],
  },
  {
    key: 'security', label: 'Cybersecurity', command: 'inspect --discipline cybersec', code: 'SEC-02',
    title: 'Trust should continue after login.',
    description: 'My specialism connects AI with cybersecurity: behavioural identity, continuous authentication, adaptive risk and privacy-preserving learning.',
    skills: ['Zero trust', 'Behavioural modelling', 'Behaviour monitoring', 'Behavioural identity', 'Anomaly detection', 'Federated learning', 'Differential privacy'],
    implementations: [
      ['POST-LOGIN TRUST', 'Built behavioural models from human, process and temporal telemetry for continuous behaviour monitoring, so identity evidence can evolve throughout a session.'],
      ['PRIVACY LAYER', 'Investigated federated learning and differential privacy for learning across organisations without centralising raw data.'],
      ['AUDITABLE RISK', 'Combined anomaly evidence, adaptive scoring and explainability to support reviewable security decisions.'],
    ],
  },
  {
    key: 'systems', label: 'Systems', command: 'inspect --discipline systems', code: 'SYS-03',
    title: 'From model idea to operational software.',
    description: 'I connect research, application engineering and enterprise workflows, designing inspectable systems that can move beyond a notebook.',
    skills: ['Python', 'FastAPI', 'React', 'Docker', 'Odoo ERP'],
    implementations: [
      ['APPLICATION LAYERS', 'Developed authenticated Flask, FastAPI and React applications with databases, APIs and accessible interfaces.'],
      ['ENTERPRISE FLOWS', 'Configured Odoo business modules and mapped sales, inventory, accounting and fiscal behaviour to client processes.'],
      ['LOW-LEVEL SYSTEMS', 'Implemented xv6 memory allocation, OpenGL renderers, ROS2 navigation and ML-guided compiler optimisation.'],
    ],
  },
] as const;

export function EngineerCommandCenter() {
  const [active, setActive] = useState(0);
  const [time, setTime] = useState('');
  const profile = profiles[active];

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Riyadh', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(new Date()));
    update(); const timer = window.setInterval(update, 1000); return () => window.clearInterval(timer);
  }, []);

  return <div className="command-center">
    <div className="command-center__topbar">
      <span className="window-dots" aria-hidden="true"><i/><i/><i/></span>
      <span>AR_OS / PROFESSIONAL PROFILE</span><span className="command-center__clock">JED {time || '--:--:--'}</span>
    </div>
    <div className="command-center__grid">
      <aside className="command-center__rail">
        <div className="profile-scan">
          <Image src="/images/ayesha-rahman.jpg" alt="Ayesha Rahman at her University of Leeds graduation" fill priority sizes="(max-width: 760px) 100vw, 320px" />
          <div className="profile-scan__line" aria-hidden="true" />
          <span>IDENTITY VERIFIED</span>
        </div>
        <div className="profile-id"><p>AYESHA RAHMAN</p><span>MEng Computer Science with AI</span><span>BSc Computer Science with AI</span><span>University of Leeds</span><span>Jeddah, Saudi Arabia</span></div>
        <div className="profile-certifications"><span>MICROSOFT CERTIFIED</span><p>Security, Compliance and Identity Fundamentals</p><p>Azure AI Fundamentals</p><p>Azure Fundamentals</p></div>
        <div className="profile-signal"><span>STATUS</span><b>ONLINE / OPEN TO WORK</b></div>
      </aside>
      <div className="command-center__main">
        <div className="terminal-kicker"><span>ayesha@portfolio:~$</span> ./introduce --professional</div>
        <h1>AI &amp; ML<br/>Engineer<span className="accent-dot">.</span></h1>
        <p className="command-center__position">Specialising in <strong>AI for cybersecurity</strong>, behavioural modelling, continuous behaviour monitoring and privacy-aware intelligent systems.</p>
        <p className="interaction-hint"><span>INTERACTIVE</span> Select a discipline to inspect the profile</p>
        <div className="discipline-tabs" role="tablist" aria-label="Engineering disciplines">
          {profiles.map((item, index) => <button key={item.key} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} onKeyDown={event => { if (event.key === 'ArrowRight') setActive((active + 1) % profiles.length); if (event.key === 'ArrowLeft') setActive((active + profiles.length - 1) % profiles.length); }}><span>0{index + 1}</span>{item.label}<i aria-hidden="true" /></button>)}
        </div>
        <section className="discipline-panel" role="tabpanel" key={profile.key}>
          <div className="discipline-panel__head"><span>{profile.code}</span><span>{profile.command}</span></div>
          <h2>{profile.title}</h2><p>{profile.description}</p>
          <div className="skill-stream">{profile.skills.map((skill, index) => <span key={skill}><i style={{animationDelay: `${index * 80}ms`}} />{skill}</span>)}</div>
          <div className="implementation-list" aria-label={`${profile.label} implementation details`}>
            {profile.implementations.map(([label,detail],index)=><article key={label}><span>{String(index+1).padStart(2,'0')}</span><strong>{label}</strong><p>{detail}</p></article>)}
          </div>
        </section>
      </div>
    </div>
    <div className="command-center__footer"><span>RESEARCH + PRODUCTION ENGINEERING</span><span>CYBERSAR / KAUST · PALMATE TECHNOLOGY</span><span><i/> SECURE CONNECTION</span></div>
  </div>;
}
