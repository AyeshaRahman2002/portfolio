import { redirect } from 'next/navigation';
import { ARTWORKS } from '@/data/portfolioData';

export function generateStaticParams() { return ARTWORKS.map(({slug})=>({slug})); }

export default function ArtworkPage({params}:{params:{slug:string}}) {
  redirect(`/artwork/${params.slug}`);
}
