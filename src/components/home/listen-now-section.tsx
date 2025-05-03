import { SVGS } from '@/assets/svgs';
import { Container } from '@/ui/container';
import React from 'react';

const PLATFORM_INFO = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/show/3aNV9l2JFtzjOJlqQSEbCG',
    icon: SVGS.Spotify,
  },
  {
    name: 'Apple Podcast',
    url: 'https://podcasts.apple.com/us/podcast/socially-accepted/id1786220734',
    icon: SVGS.ApplePodcast,
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.com/podcasts/503d7b17-2a34-4a53-9a38-180357c27510/socially-accepted',
    icon: SVGS.AmazonMusic,
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/playlist?list=PLSs1WLMZOZF-lKMiR20jS9EnGwrSOXWu-&si=Q3KDzAHVX-ngTVii',
    icon: SVGS.YoutubeMusic,
  },
  {
    name: 'Pocketcasts',
    url: 'https://pca.st/q0uyrxzn',
    icon: SVGS.Pocketcasts,
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@shreya1100',
    icon: SVGS.Youtube,
  },
];

export const ListenNowSection = () => {
  return (
    <Container className="">
      <div className="font-semibold text-[20px] mb-8 tracking-wide">
        Subscribe and listen to Socially Accepted wherever you get your podcasts
      </div>
      <div className="flex justify-center items-start gap-16 flex-wrap max-w-5xl mx-auto">
        {PLATFORM_INFO.map(({ icon: Icon, name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 rounded-2xl mb-4 flex items-center justify-center ">
              <Icon className="w-24 h-24" />
            </div>
            <div className="font-semibold text-lg tracking-wide leading-tight text-center">
              {name.split(' ').map((word, i) => (
                <div key={i}>{word}</div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Container>
  );
};
