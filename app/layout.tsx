import type { Metadata } from 'next';

import { Playfair_Display, Montserrat } from "next/font/google";
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const playfair = Playfair_Display({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: 'Strandé',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.className} ${playfair.className}`}>
           <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
