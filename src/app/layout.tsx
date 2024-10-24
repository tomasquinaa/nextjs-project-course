import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface IRootLayout extends Readonly<{ children: React.ReactNode }> { }

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}