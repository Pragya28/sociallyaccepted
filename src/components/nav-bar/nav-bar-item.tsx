import { cn } from '@/lib/utils';
import { NavigationMenuItem } from '@/ui/navigation-menu';
import { PropsWithChildren } from 'react';

type NavbarItemProps = PropsWithChildren<{
  className?: string;
  onClick?: () => void;
}>;

export const NavbarItem = ({ children, onClick, className }: NavbarItemProps) => {
  return (
    <NavigationMenuItem
      className={cn(
        'px-[8px] py-[4px] rounded-xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        className
      )}
      onClick={onClick}
    >
      {children}
    </NavigationMenuItem>
  );
};
