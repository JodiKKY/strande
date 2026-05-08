import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Montserrat } from "next/font/google";
import './globals.css';

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
       
        {children}
  
      </body>
    </html>
  );
}
