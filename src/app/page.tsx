'use client';

import { ActionType, useStore } from '@/context/store-provider';
import { useScrollPosition } from '@/hooks/scroll-position';
import { useEffect, useRef } from 'react';

export default function Home() {
  const { dispatch } = useStore();
  const firstDivRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();

  useEffect(() => {
    if (firstDivRef.current) {
      const halfHeight = firstDivRef.current.offsetHeight / 2;
      dispatch({ type: ActionType.HalfWayScrollState, payload: scrollPosition >= halfHeight });
    }
  }, [scrollPosition]);

  return (
    <div>
      <div ref={firstDivRef} className="flex flex-col gap-1"></div>
    </div>
  );
}
