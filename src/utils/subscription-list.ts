import { SVGS } from '@/assets/svgs';

export const getSubscriptionList = (isGS: boolean) => {
  return [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/show/3aNV9l2JFtzjOJlqQSEbCG',
      icon: isGS ? SVGS.SpotifyGS : SVGS.Spotify,
    },
    {
      name: 'Apple Podcast',
      url: 'https://podcasts.apple.com/us/podcast/socially-accepted/id1786220734',
      icon: isGS ? SVGS.ApplePodcastGS : SVGS.ApplePodcast,
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/podcasts/503d7b17-2a34-4a53-9a38-180357c27510/socially-accepted',
      icon: isGS ? SVGS.AmazonMusicGS : SVGS.AmazonMusic,
    },
    {
      name: 'YouTube Music',
      url: 'https://music.youtube.com/playlist?list=PLSs1WLMZOZF-lKMiR20jS9EnGwrSOXWu-&si=Q3KDzAHVX-ngTVii',
      icon: isGS ? SVGS.YoutubeMusicGS : SVGS.YoutubeMusic,
    },
    {
      name: 'Pocketcasts',
      url: 'https://pca.st/q0uyrxzn',
      icon: isGS ? SVGS.PocketcastsGS : SVGS.Pocketcasts,
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@shreya1100',
      icon: isGS ? SVGS.YoutubeGS : SVGS.Youtube,
    },
  ];
};
