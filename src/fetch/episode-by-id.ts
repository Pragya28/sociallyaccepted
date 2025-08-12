import { client } from '@/sanity/client';
import { EpisodeData, Platforms } from '@/types/interface';
import { type SanityDocument } from 'next-sanity';
import { format } from 'date-fns';

const EPISODE_BY_ID_QUERY = `*[_type == "episode" && _id == $id][0] {
  _id,
  title,
  slug,
  description,
  airDate,
  duration,
  image,
  spotifyUrl,
  applePodcastUrl,
  amazonMusicUrl,
  youtubeMusicUrl,
  pocketcastsUrl,
  youtubeUrl
}`;

export const fetchEpisodeById = async (id: string): Promise<EpisodeData | null> => {
  const episodeDocument = await client.fetch<SanityDocument | null>(EPISODE_BY_ID_QUERY, { id });

  if (!episodeDocument) {
    return null;
  }

  const urls = Object.fromEntries(
    Object.entries(episodeDocument)
      .filter(([key, value]) => key.toLowerCase().includes('url') && value !== null)
      .map(([key, value]) => [key.slice(0, -3), value])
  );

  const episode: EpisodeData = {
    id: episodeDocument._id,
    name: episodeDocument.title,
    airDate: format(new Date(episodeDocument.airDate), 'dd MMM yyyy'),
    coverImage: episodeDocument.image,
    description: episodeDocument.description,
    duration: episodeDocument.duration,
    slug: episodeDocument.slug.current,
    platforms: urls as Partial<Record<Platforms, string>>,
  };

  return episode;
};
