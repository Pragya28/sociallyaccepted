import { client } from '@/sanity/client';
import { EpisodeData } from '@/types/interface';
import { type SanityDocument } from 'next-sanity';
import { format } from 'date-fns';

const baseQuery = `*[
  _type == "episode"
]|order(airDate desc)[OFFSET...LIMIT]{_id, title, slug, description, airDate, duration, image}`;

const options = { next: { revalidate: 30 } };

interface Request {
  pageNo?: number;
  pageSize?: number;
}

export const fetchAllEpisodes = async ({
  pageNo = 1,
  pageSize = 10,
}: Request): Promise<EpisodeData[]> => {
  // Calculate offset and limit based on pageNo and pageSize
  const offset = (pageNo - 1) * pageSize;
  const limit = offset + pageSize;

  // Replace OFFSET and LIMIT placeholders with actual numbers in query
  const paginatedQuery = baseQuery
    .replace('OFFSET', offset.toString())
    .replace('LIMIT', limit.toString());

  const episodesDocument = await client.fetch<SanityDocument[]>(paginatedQuery, {}, options);

  const episodes: EpisodeData[] = episodesDocument.map((item) => ({
    id: item._id,
    name: item.title,
    airDate: format(new Date(item.airDate), 'dd MMM yyyy'),
    coverImage: item.image,
    description: item.description,
    duration: item.duration,
    slug: item.slug.current,
    platforms: {},
  }));

  return episodes;
};
