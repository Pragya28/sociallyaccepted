import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/nav-bar';

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
          <div className="h-screen w-screen flex flex-col gap-1">
            <div className="sticky top-0 z-50">
              <Navbar />
            </div>
            <div className="flex my-5 mx-12 md:mx-48">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
