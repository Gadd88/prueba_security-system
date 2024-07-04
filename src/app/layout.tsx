import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar, Footer  } from "@/components";
import { Toaster } from 'sonner';


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Security & System",
  description: "Prueba técnica frontend para Security and System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <Navbar />
        <Toaster position="top-center" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
