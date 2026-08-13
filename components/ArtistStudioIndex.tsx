import Image from 'next/image';
import Link from 'next/link';
import type { Artwork } from '@/types/portfolio';

export function ArtistStudioIndex({ artworks }: { artworks: Artwork[] }) {
  const visible = artworks.filter(item => item.image);
  if (!visible.length) return null;

  return <section className="studio-index" aria-labelledby="studio-index-title">
    <header><div><p className="eyebrow">ON THE STUDIO WALL / 06 ORIGINALS</p><h2 id="studio-index-title">Paintings with<br/><em>a point of view.</em></h2></div><div><p>Browse original acrylic paintings from the four-part India Through a Window series and independent narrative works.</p><Link href="/work">OPEN THE FULL COLLECTION ↗</Link></div></header>
    <div className="studio-index__wall">{visible.map((artwork,index)=><Link href={`/artwork/${artwork.slug}`} key={artwork.id} className="studio-index__card"><span className="studio-index__tape" aria-hidden="true"/><div className="studio-index__image"><Image src={artwork.image!} alt={artwork.title || 'Original artwork'} fill priority={index < 3} sizes="(max-width:700px) 82vw, (max-width:1050px) 42vw, 26vw"/></div><div className="studio-index__caption"><small>{String(index+1).padStart(2,'0')} / {String(visible.length).padStart(2,'0')}</small><h3>{artwork.title}</h3><p>{artwork.medium}</p><span>OPEN ↗</span></div></Link>)}</div>
    <nav className="studio-index__routes" aria-label="Artist studio routes"><Link href="/work"><span>01</span><b>Original artwork</b><small>View the collection</small><i>↗</i></Link><Link href="/contact"><span>02</span><b>Commission a portrait</b><small>Traditional or charcoal</small><i>↗</i></Link><Link href="/contact"><span>03</span><b>Commission artwork</b><small>Acrylic, digital or illustrative</small><i>↗</i></Link><Link href="/about"><span>04</span><b>Meet the artist</b><small>Practice and process</small><i>↗</i></Link></nav>
  </section>;
}
