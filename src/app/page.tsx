'use client';
import { SVGS } from '@/assets/svgs';
import { Navbar } from '@/components/nav-bar/nav-bar';
import { NavbarItem } from '@/components/nav-bar/nav-bar-item';
import { NavigationMenuDemo } from '@/components/nav-bar/nav-demo';
import { ThemeToggle } from '@/components/theme';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/ui/navigation-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col gap-1">
      <Navbar />
      <NavigationMenu className="p-[2px] bg-foreground text-background shadow-md">
        <div className="hidden md:flex flex-1 justify-between w-screen items-center p-0 mx-8">
          <NavigationMenuList>
            <SVGS.Logo25 className="text-background" />
          </NavigationMenuList>
          <NavigationMenuList>
            <NavbarItem>
              <Link href="/" legacyBehavior passHref>
                Item One
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/" legacyBehavior passHref>
                Item Two
              </Link>
            </NavbarItem>
            <ThemeToggle />
          </NavigationMenuList>
        </div>
        <div className="md:hidden flex flex-1 justify-between w-screen items-center p-0 mx-4">
          <Menu onClick={() => setIsOpen(!isOpen)} />
          <SVGS.Logo10 className="text-background" />
          <ThemeToggle />
        </div>
      </NavigationMenu>
    </div>
  );
}
