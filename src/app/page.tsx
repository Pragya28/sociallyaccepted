'use client';

import { EpisodeSection, IntroSection, ListenNowSection } from '@/components/home';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <hr className="my-4 border-t-primary border-1 w-full" />
      <EpisodeSection />
      <hr className="my-4 border-t-primary border-1 w-full" />
      <ListenNowSection />
    </div>
  );
}
