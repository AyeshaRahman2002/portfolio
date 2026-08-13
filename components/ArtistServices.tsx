import Link from 'next/link';

const services = [
  { number: '01', title: 'Traditional portrait sketching', medium: 'Graphite / pencil', detail: 'Hand-drawn portraits developed from a clear reference photograph, with attention to likeness and expression.' },
  { number: '02', title: 'Charcoal portrait sketching', medium: 'Charcoal', detail: 'High-contrast portrait studies with expressive tonal depth, texture and a strong physical presence.' },
  { number: '03', title: 'Abstract acrylic art', medium: 'Acrylic', detail: 'Original colour-led compositions created for personal collections, gifts and considered interior spaces.' },
  { number: '04', title: 'Realism acrylic art', medium: 'Acrylic', detail: 'Detailed paintings of people, places, objects and memories, developed as original works or commissions.' },
  { number: '05', title: 'Digital art', medium: 'Digital', detail: 'Custom digital artwork with a hand-drawn sensibility, created for personal use, gifts and online presentation.' },
  { number: '06', title: 'Illustrative art', medium: 'Traditional / digital', detail: 'Narrative illustrations developed around a character, memory, idea or visual story in a selected medium.' },
] as const;

export function ArtistServices({ compact = false }: { compact?: boolean }) {
  return <section className={`artist-services ${compact ? 'artist-services--compact' : ''}`} aria-labelledby="artist-services-title">
    <header><div><p className="eyebrow">STUDIO SERVICES / COMMISSIONS</p><h2 id="artist-services-title">Made by hand,<br/><em>made for you.</em></h2></div><div><p>Original artworks are available to purchase, and selected commissions are accepted. Share your idea, preferred medium and reference images to begin.</p><Link href="/contact">REQUEST A COMMISSION ↗</Link></div></header>
    <div className="artist-services__grid">{services.map(service=><article key={service.number}><span>{service.number}</span><small>{service.medium}</small><h3>{service.title}</h3><p>{service.detail}</p><Link href="/contact">ENQUIRE ↗</Link></article>)}</div>
  </section>;
}
