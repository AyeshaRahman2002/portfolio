'use client';

import Image from '@/components/BasePathImage';
import Link from 'next/link';
import { useState } from 'react';
import { useMode } from '@/context/ModeContext';
import { EDUCATION, EXPERIENCE, SITE_CONFIG } from '@/data/portfolioData';
import { ArtistServices } from '@/components/ArtistServices';

const chapters = [
  { label:'Origins', title:'Built across cultures.', body:'Raised across India, Dubai and Saudi Arabia, I learned to adapt quickly, observe carefully and approach problems from more than one perspective.', meta:'INDIA / DUBAI / SAUDI ARABIA / LEEDS' },
  { label:'Education', title:'Computer science met intelligence.', body:'At the University of Leeds, I completed both BSc and MEng degrees in Computer Science with Artificial Intelligence. My work moved from software foundations into machine learning, security and research.', meta:'BSC 2:1 / MENG 2:1 / DISSERTATION 81%' },
  { label:'Direction', title:'Performance needs trust.', body:'Finance, health and identity projects made one question central to my practice: how do we build intelligent systems that remain secure, interpretable and useful outside controlled experiments?', meta:'AI / SECURITY / PRIVACY / SYSTEMS' },
] as const;

export default function AboutPage() {
  const { mode, setMode } = useMode();
  const [chapter,setChapter] = useState(0);
  const [practice,setPractice] = useState<'portrait'|'realism'|'abstract'|'digital'>('portrait');
  if (mode === 'artist') return <ArtistAbout practice={practice} setPractice={setPractice} onSwitch={() => setMode('engineer')} />;
  const item = chapters[chapter];
  return <article className="page about-engineer">
    <header className="about-engineer__hero">
      <div><p className="eyebrow">ABOUT / ENGINEER PROFILE</p><h1>Curiosity,<br/>made rigorous.</h1><p>I am Ayesha Rahman, an AI and machine learning engineer specialising in cybersecurity, trustworthy AI and privacy-aware systems.</p><div className="profile-facts"><span><b>02</b> AI DEGREES</span><span><b>81%</b> DISSERTATION</span><span><b>04</b> COUNTRIES</span><span><b>25+</b> BUILDS</span></div></div>
      <figure><Image src={SITE_CONFIG.portrait!} alt="Ayesha Rahman at her University of Leeds graduation" fill priority sizes="(max-width: 760px) 100vw, 42vw"/><span>AYESHA_RAHMAN.JPG / VERIFIED</span></figure>
    </header>
    <section className="about-console">
      <nav aria-label="About chapters">{chapters.map((entry,index)=><button key={entry.label} type="button" aria-pressed={chapter===index} onClick={()=>setChapter(index)}><span>0{index+1}</span>{entry.label}</button>)}</nav>
      <article key={item.label}><p className="eyebrow">PROFILE NODE / {item.label.toUpperCase()}</p><h2>{item.title}</h2><p>{item.body}</p><footer>{item.meta}</footer></article>
    </section>
    <section className="about-snapshot">
      <div><p className="eyebrow">CURRENTLY</p>{EXPERIENCE.filter(item=>item.primary).map(item=><article key={item.id}><span>{item.period}</span><h3>{item.organization}</h3><p>{item.role}</p></article>)}</div>
      <div><p className="eyebrow">EDUCATION</p>{EDUCATION.map(item=><article key={item.degree}><span>{item.period}</span><h3>{item.degree}</h3><p>{item.institution} / {item.grade}</p></article>)}</div>
    </section>
    <section className="about-next"><button onClick={()=>setMode('artist')}>VIEW ARTIST PROFILE ↗</button><Link href="/contact">CONTACT AYESHA ↗</Link></section>
  </article>;
}

function ArtistAbout({practice,setPractice,onSwitch}:{practice:'portrait'|'realism'|'abstract'|'digital';setPractice:(value:'portrait'|'realism'|'abstract'|'digital')=>void;onSwitch:()=>void}) {
  const details = {
    portrait:['Portrait sketching','Graphite, charcoal and close observation','Faces, expressions and the small details that make a likeness feel alive.'],
    realism:['Realism painting','Light, likeness and patient layering','Acrylic paintings grounded in observation, place, memory and carefully built colour.'],
    abstract:['Abstract painting','Colour, movement and intuitive composition','Material-led work where rhythm, gesture and colour carry the subject.'],
    digital:['Digital drawing','A contemporary extension of hand-drawn practice','Illustration and drawing that preserve the immediacy of a handmade mark.'],
  } as const;
  return <article className="page about-artist">
    <header className="about-artist__hero">
      <div className="about-artist__statement"><p className="eyebrow">ABOUT / ARTIST PROFILE</p><h1>Looking closely<br/><em>is the beginning.</em></h1><p>My practice moves between portrait sketching, realism, abstraction and digital drawing. Each work begins with attention to a face, a gesture, a colour, a room or a remembered place.</p><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer" className="about-artist__instagram"><span>FOLLOW THE STUDIO</span><b>@artxar_</b><i>↗</i></a></div>
      <figure><Image src={SITE_CONFIG.portrait!} alt="Ayesha Rahman, artist and engineer" fill priority sizes="(max-width:760px) 100vw, 42vw"/><figcaption>AYESHA RAHMAN / ARTIST</figcaption></figure>
    </header>
    <section className="about-artist__note"><p className="eyebrow">ARTIST STATEMENT / 01</p><blockquote>“The engineer asks how a system works. The artist asks how it feels to look.”</blockquote><p>I am drawn to work that rewards a second look. Across portraits, painted interiors and landscapes, I use detail and colour to hold atmosphere, identity and memory in the same frame.</p></section>
    <section className="practice-selector"><div className="practice-selector__heading"><p className="eyebrow">PRACTICE / SELECT A MEDIUM</p><p>Choose a discipline to explore how I approach it.</p></div><div>{(Object.keys(details) as Array<keyof typeof details>).map((key,index)=><button key={key} aria-pressed={practice===key} onClick={()=>setPractice(key)}><span>0{index+1}</span>{details[key][0]}</button>)}</div><article key={practice}><span>{details[practice][0]}</span><h2>{details[practice][1]}.</h2><p>{details[practice][2]}</p></article></section>
    <ArtistServices compact />
    <section className="about-next about-next--artist"><div><p className="eyebrow">CONTINUE EXPLORING</p><p>View finished paintings, enquire about an original or follow ongoing studio work on Instagram.</p></div><button onClick={onSwitch}>VIEW ENGINEER PROFILE ↗</button><Link href="/work">VIEW ARTWORK ↗</Link><a href={SITE_CONFIG.instagram} target="_blank" rel="noreferrer">INSTAGRAM @ARTXAR_ ↗</a></section>
  </article>;
}
