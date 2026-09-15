import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mayimunah's PHD Applications tracker",
  description: "PhD applications, document preparation and start-date planning.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
