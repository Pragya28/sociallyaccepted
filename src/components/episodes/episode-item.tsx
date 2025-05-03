'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface EpisodeItemProps {
  episodeNumber: number;
  name: string;
  airDate: string;
  duration: string;
  description: string;
  coverImage: string;
  id: string;
}

const EpisodeItem: React.FC<EpisodeItemProps> = ({
  episodeNumber,
  name,
  airDate,
  duration,
  description,
  coverImage,
  id,
}) => {
  const router = useRouter();

  const handleListenNow = () => {
    router.push(`/episodes/${id}`);
  };

  return (
    <div className="w-full max-w bg-secondary text-foreground rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={coverImage}
          alt={`Episode ${episodeNumber}: ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">
            Episode {episodeNumber}: {name}
          </h3>
        </div>
        <div className="flex items-center text-sm mb-3">
          <span className="mr-4">{airDate}</span>
          <span>{duration}</span>
        </div>
        <p className="text-sm line-clamp-3 mb-4">{description}</p>
        <button
          onClick={handleListenNow}
          className="w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          Listen Now
        </button>
      </div>
    </div>
  );
};

// Dummy data for demonstration
const dummyEpisode = {
  id: '1',
  episodeNumber: 1,
  name: 'The Beginning',
  airDate: 'March 15, 2024',
  duration: '45 min',
  description:
    'In the series premiere, we meet our main characters and set the stage for the adventures to come. The episode explores the initial conflicts and relationships that will shape the rest of the season.',
  coverImage:
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fJ8&auto=format&fit=crop&w=800&q=80',
};

// Example usage
export const ExampleEpisodeItem = () => {
  return <EpisodeItem {...dummyEpisode} />;
};

export default EpisodeItem;
