import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// This would typically come from your database or API
const getEpisodeById = (id: string) => {
  const episodes = [
    {
      id: '1',
      episodeNumber: 1,
      name: 'The Beginning',
      airDate: 'March 15, 2024',
      duration: '45 min',
      description:
        'In the series premiere, we meet our main characters and set the stage for the adventures to come. The episode explores the initial conflicts and relationships that will shape the rest of the season.',
      coverImage:
        'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fJ8&auto=format&fit=crop&w=800&q=80',
      audioUrl: 'https://example.com/audio.mp3', // Replace with actual audio URL
    },
  ];

  return episodes.find((episode) => episode.id === id);
};

interface EpisodePageProps {
  params: {
    id: string;
  };
}

export default async function EpisodePage({ params }: EpisodePageProps) {
  const episode = getEpisodeById(params.id);

  if (!episode) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <Image
            src={episode.coverImage}
            alt={`Episode ${episode.episodeNumber}: ${episode.name}`}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Episode {episode.episodeNumber}: {episode.name}
            </h1>
            <div className="flex items-center text-sm text-muted-foreground">
              <span className="mr-4">{episode.airDate}</span>
              <span>{episode.duration}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <p className="text-lg">{episode.description}</p>
          </div>

          {/* <div className="bg-secondary p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Listen to Episode</h2>
            <audio controls className="w-full">
              <source src={episode.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div> */}
        </div>
      </div>
    </div>
  );
}
