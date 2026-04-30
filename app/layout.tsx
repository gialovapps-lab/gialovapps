import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gialovapps.com"),
  title: "Gialova Apps - App & Software Development",
  description:
    "We build motorcycle telemetry tools and mobile games. Quality apps for riders and gamers.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0e17] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
