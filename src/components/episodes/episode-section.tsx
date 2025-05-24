import { ExampleEpisodeItem } from './episode-item';
import React from 'react';

interface EpisodeSectionProps {
  count: number;
}

export const EpisodeSection: React.FC<EpisodeSectionProps> = ({ count }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {Array.from({ length: count }).map((_, idx) => (
        <ExampleEpisodeItem key={idx} />
      ))}
    </div>
  );
};
