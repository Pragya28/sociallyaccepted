import { Container } from '@/ui/container';
import { ExampleEpisodeItem } from '../episodes/episode-item';

export const EpisodeSection = () => {
  return (
    <Container className="">
      <div className="font-bold text-[20px]">Latest Episode</div>
      <ExampleEpisodeItem />
    </Container>
  );
};
