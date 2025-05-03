'use client';

import { NavItems } from '@/types/interface';
import { NavigationMenuList } from '@/ui/navigation-menu';
import { NavbarItem } from './nav-bar-item';
import Link from 'next/link';
import { ThemeToggle } from '../theme/theme-toggle';
import { usePathname } from 'next/navigation';
import { getIsHalfwayScrollPosition, useStore } from '@/context/store-provider';
import { Logo } from '@/assets/logo';

interface NavDesktopProps {
  navItems: NavItems[];
}

export const NavDesktop = ({ navItems }: NavDesktopProps) => {
  const pathname = usePathname();
  const { state } = useStore();
  const halfHeightReached = getIsHalfwayScrollPosition(state);

  return (
    <div className="hidden md:flex flex-1 justify-between w-screen items-center p-0 mx-8 min-h-[65px]">
      <NavigationMenuList>
        {(pathname !== '/' || halfHeightReached) && (
          <Link href={'/'} legacyBehavior passHref>
            <div>
              <Logo.SingleLine
                className="text-background py-[4px] h-[65px] w-[415px] cursor-pointer"
                scale={0.25}
              />
            </div>
          </Link>
        )}
      </NavigationMenuList>
      <NavigationMenuList>
        {navItems.map(({ title, linkTo }, index) => (
          <NavbarItem key={index}>
            <Link href={linkTo} legacyBehavior passHref>
              {title}
            </Link>
          </NavbarItem>
        ))}
        <ThemeToggle />
      </NavigationMenuList>
    </div>
  );
};
