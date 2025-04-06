'use client';

import { Logo } from '@/assets/logo';
import { ActionType, useStore } from '@/context/store-provider';
import { useScrollPosition } from '@/hooks/scroll-position';
import { Container } from '@/ui/container';
import { useEffect, useRef, useState } from 'react';

export const SectionOne = () => {
  const { dispatch } = useStore();
  const firstDivRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();
  const [scale, setScale] = useState(0.25); // default to mobile (safe for SSR)

  useEffect(() => {
    if (firstDivRef.current) {
      const halfHeight = firstDivRef.current.offsetHeight / 2;
      dispatch({ type: ActionType.HalfWayScrollState, payload: scrollPosition >= halfHeight });
    }
  }, [scrollPosition]);

  useEffect(() => {
    const handleResize = () => {
      setScale(window.innerWidth >= 768 ? 0.6 : 0.25);
    };

    handleResize(); // set initial
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container
      ref={firstDivRef}
      className="flex flex-1 flex-col md:flex-row gap-1 items-center justify-center"
    >
      <div className="flex flex-col items-center gap-1 p-5 border-b-1 border-foreground md:border-b-0 md:border-r-1 md:flex-3/5">
        <Logo.TwoLines
          className="text-foreground w-[220px] h-[90px] md:w-[525px] md:h-[220px]"
          scale={scale}
        />
        <Logo.TagLine className="text-foreground w-[220px] h-[22px] md:w-[525px] md:h-[52px]" />
      </div>
      <div className="md:flex-2/5 p-5 font-semibold text-center">
        A very strict guide to sounding smart in social settings. Smart and informed. But not a
        nerd. On-the-internet stuff, popular culture, and more.
      </div>
    </Container>
  );
};
