'use client';

import { SVGS } from '@/assets/svgs';
import { NavItems } from '@/types/interface';
import { Menu, X } from 'lucide-react';
import { Fragment, useState } from 'react';
import { ThemeToggle } from '../theme/theme-toggle';
import { NavigationMenuList } from '@/ui/navigation-menu';
import { NavbarItem } from './nav-bar-item';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getIsHalfwayScrollPosition, useStore } from '@/context/store-provider';

interface NavMobileProps {
  navItems: NavItems[];
}

export const NavMobile = ({ navItems }: NavMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { state } = useStore();
  const halfHeightReached = getIsHalfwayScrollPosition(state);

  return (
    <>
      <div className="md:hidden flex flex-1 justify-between w-screen items-center p-2 mx-4">
        {isOpen ? <X onClick={() => setIsOpen(false)} /> : <Menu onClick={() => setIsOpen(true)} />}
        {(pathname !== '/' || halfHeightReached) && (
          <Link href={'/'} legacyBehavior passHref>
            <SVGS.Logo10 className="text-background cursor-pointer" />
          </Link>
        )}
        <ThemeToggle />
      </div>
      {isOpen && (
        <div className="md:hidden flex">
          <NavigationMenuList className="flex flex-col">
            {navItems.map(({ title, linkTo }, index) => (
              <Fragment key={index}>
                <NavbarItem onClick={() => setIsOpen(false)}>
                  <Link href={linkTo} legacyBehavior passHref>
                    {title}
                  </Link>
                </NavbarItem>
                {index !== navItems.length - 1 && (
                  <div className="w-[90vw] bg-background h-[1px]" />
                )}
              </Fragment>
            ))}
          </NavigationMenuList>
        </div>
      )}
    </>
  );
};
