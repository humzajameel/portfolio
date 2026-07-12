import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from "./components/ThemeProvider"; // optional later

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Muhammad Humza | Full Stack & AI Engineer",
  description:
    "Full Stack & AI Engineer based in Berlin. M.Sc. Artificial Intelligence student with 3+ years building production React/TypeScript frontends and Python/FastAPI backends.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
