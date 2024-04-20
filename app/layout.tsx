import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portals Assignment - Aleksandar Timic",
  description: "Portals Assignment - Aleksandar Timic",
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
