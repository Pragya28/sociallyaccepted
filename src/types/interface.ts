export interface NavItems {
  title: string;
  linkTo: string;
}

export interface LogoProps {
  className: string;
  scale?: number;
}

export interface EpisodeData {
  name: string;
  airDate: string;
  duration: string;
  description: string;
  coverImage: string;
  id: string;
  slug: string;
}
