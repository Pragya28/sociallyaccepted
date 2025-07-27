import { notFound } from 'next/navigation';
import Image from 'next/image';
import { fetchEpisodeById } from '@/fetch/episode-by-id';

type EpisodePageProps = Promise<{ id: string }>;

export default async function EpisodePage(props: { params: EpisodePageProps }) {
  const params = await props.params;

  const episode = await fetchEpisodeById(params.id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={episode.coverImage}
            alt={`Episode: ${episode.name}`}
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Episode: {episode.name}</h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="mr-4">{episode.airDate}</span>
              <span>{episode.duration}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">{episode.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
