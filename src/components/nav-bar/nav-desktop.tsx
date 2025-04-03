import { SVGS } from '@/assets/svgs';
import { NavItems } from '@/types/interface';
import { NavigationMenuList } from '@/ui/navigation-menu';
import { NavbarItem } from './nav-bar-item';
import Link from 'next/link';
import { ThemeToggle } from '../theme/theme-toggle';

interface NavDesktopProps {
  navItems: NavItems[];
}

export const NavDesktop = ({ navItems }: NavDesktopProps) => {
  return (
    <div className="hidden md:flex flex-1 justify-between w-screen items-center p-0 mx-8">
      <NavigationMenuList>
        <Link href={'/'} legacyBehavior passHref>
          <SVGS.Logo25 className="text-background py-[4px] cursor-pointer" />
        </Link>
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
