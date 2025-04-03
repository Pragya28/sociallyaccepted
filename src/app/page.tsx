'use client';
import { PNGS } from '@/assets/pngs';
import { Navbar } from '@/components/nav-bar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-50 w-50 md:h-66 md:w-66 rounded-[200px] md:rounded-[264px] border-foreground border-[1px] items-center justify-center shadow-md">
      <Image
        src={PNGS.LogoCircle}
        alt="Logo"
        className="h-48 w-48 md:h-64 md:w-64" // responsive sizing
      />
    </div>
  );
}
