import type { Metadata } from "next";
import "./globals.css";
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Mario's Home Page",
  description: "Generated with love by Vercel",
};

export default function RootLayout ({ children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
}
