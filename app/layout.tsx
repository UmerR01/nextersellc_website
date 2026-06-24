import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Footer from "@/components/home/Footer";

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexterse — Custom Software & AI Development",
  description:
    "Nexterse builds custom software and AI-driven solutions that ship on time, scale with your business, and outlast their launch.",
  icons: {
    icon: "/brand/favicon-nexterse.ico",
    shortcut: "/brand/favicon-nexterse.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={interTight.variable}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
