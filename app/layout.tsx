import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const sans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Caldera — Cold Plunge, Sauna & Recovery Equipment",
    template: "%s · Caldera",
  },
  description:
    "Premium cold plunges, saunas, massage, red light, and recovery equipment for home and business. Free shipping quotes, flexible payment options, and clear specs.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} h-full`}>
      <body className="site antialiased">
        <CartProvider>
          <CompareProvider>
            <Header />
            <main>{children}</main>
            <CompareBar />
            <Footer />
          </CompareProvider>
        </CartProvider>
      </body>
    </html>
  );
}
