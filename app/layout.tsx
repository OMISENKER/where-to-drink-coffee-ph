import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "W2DCoffeePH",
  description:
    "A website for coffee lovers and cafe enthusiasts in the Philippines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-nunito antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
