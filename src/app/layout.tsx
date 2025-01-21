import type { Metadata } from "next";
import "./globals.css";
import { font } from "@/config/font";


export const metadata: Metadata = {
  title: "Ecomerce",
  description: "Tienda en linea de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        {children}
      </body>
    </html>
  );
}
