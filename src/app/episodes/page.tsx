import { ExampleEpisodeItem } from '@/components/episodes/episode-item';
import { Container } from '@/ui/container';

export default function Episodes() {
  return (
    <Container className="flex-1 md:flex-col gap-5">
      <div className="font-bold text-[40px]">EPISODES</div>
      <ExampleEpisodeItem />
      <ExampleEpisodeItem />
      <ExampleEpisodeItem />
      <ExampleEpisodeItem />
    </Container>
  );
}
