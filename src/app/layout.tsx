import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

import Menu from "./components/navbar/nav";
export const metadata: Metadata = {
  title: "Rolcka",
  description: "web Rolcka",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="es">
        <body className={inter.className}>
          <Menu />
          {children}
        </body>
      </html>
    </>
  );
}
