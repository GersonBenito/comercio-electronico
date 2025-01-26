import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/grid.css";
import "../styles/spacing.css";
import "../styles/text.css";
import { font } from "@/config/font";


export const metadata: Metadata = {
  title: "eCommerce",
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
