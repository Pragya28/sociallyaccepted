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
import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col gap-1">
      <Navbar />
      <NavigationMenu className="p-[2px] bg-foreground text-background">
        <div className="flex flex-1 justify-between w-screen items-center p-0">
          <NavigationMenuList>
            <SVGS.FullLogo className="text-background" />
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
          </NavigationMenuList>
          <NavigationMenuList>
            <ThemeToggle />
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}
