import { NavItems } from '@/types/interface';
import { NavigationMenu } from '@/ui/navigation-menu';
import { NavDesktop } from './nav-desktop';
import { NavMobile } from './nav-mobile';

export const Navbar = () => {
  const navItems: NavItems[] = [{ title: 'Episodes', linkTo: '/episodes' }];

  return (
    <NavigationMenu className="p-[2px] bg-foreground text-background shadow-md flex-col md:flex-row">
      <NavDesktop navItems={navItems} />
      <NavMobile navItems={navItems} />
    </NavigationMenu>
  );
};
