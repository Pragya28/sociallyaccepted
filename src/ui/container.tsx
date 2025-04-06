import { cn } from '@/utils/cn';
import { forwardRef, PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className: string;
}>;

export const Container = forwardRef<HTMLDivElement | null, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col md:flex-row gap-1 items-center justify-center', className)}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';
