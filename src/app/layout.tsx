import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SideNav from '@/ui/sidebar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Crypto dashboard app',
  description:
    'Crypto Dashboard App is a user-friendly web application designed to help you manage and monitor your cryptocurrency investments. Track real-time portfolio values, view interactive charts, analyze transaction history, and stay updated with the latest market news.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-80">
            <SideNav />
          </div>
          <div className="flex-grow md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
