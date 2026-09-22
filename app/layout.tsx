import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Digital Quotient | Operations Wall",
  description: "Digital Quotient control room dashboard — dummy data build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="wall-bg min-h-screen">{children}</body>
    </html>
  );
}
