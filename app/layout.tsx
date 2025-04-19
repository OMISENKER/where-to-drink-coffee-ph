import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
