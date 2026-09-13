import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imad Ennouaimi — Software Engineer',
  description: 'Portfolio of Imad Ennouaimi, software engineer and product builder.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
