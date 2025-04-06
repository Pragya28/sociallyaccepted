import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/nav-bar';
import { StoreProvider } from '@/context/store-provider';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Socially Accepted',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className} antialiased`}>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <StoreProvider>
            <div className="w-screen flex flex-col gap-1">
              <div className="sticky top-0 z-50">
                <Navbar />
              </div>
              <div className="flex py-5 px-8 md:px-48">{children}</div>
            </div>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
