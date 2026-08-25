import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/organisms/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "No Country",
  description:
    "Simulaciones laborales que generan evidencia real de cómo trabaja el talento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <body
        className="min-h-full flex flex-col bg-[#000115] text-white"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}