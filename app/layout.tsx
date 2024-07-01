import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const inter = Gothic_A1({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seaside Explorers",
  description: "Seaside Explorers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
