import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oscar KOÏ | Data · Web · Digital",
  description:
    "Portfolio professionnel d'Oscar KOÏ — Data, développement web et stratégie digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}