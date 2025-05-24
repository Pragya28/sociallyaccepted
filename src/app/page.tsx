'use client';

import { EpisodeSection } from '@/components/episodes';
import { IntroSection, ListenNowSection } from '@/components/home';
import { Container } from '@/ui/container';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <Container className="flex-1 md:flex-col gap-5 bg-highlight border-t-2 border-b-2">
        <div className="font-bold text-[20px]">Latest Episodes</div>
        <EpisodeSection count={3} />
      </Container>
      <ListenNowSection />
    </div>
  );
}
