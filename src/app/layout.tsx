import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "specAI | AI Systems & Automation Engineering",
  description: "AI-first company specializing in RAG systems, LLM apps, automation, and secure engineering. Founded by Venkaiah P.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-zinc-950 text-zinc-50 selection:bg-purple-500/30`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
