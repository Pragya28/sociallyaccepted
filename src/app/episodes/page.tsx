import { EpisodeSection } from '@/components/episodes';
import { Container } from '@/ui/container';

export default function Episodes() {
  return (
    <Container className="flex-1 md:flex-col gap-5">
      <div className="font-bold text-[40px]">EPISODES</div>
      <EpisodeSection count={5} />
    </Container>
  );
}
