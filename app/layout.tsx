import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const sans = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Caldera — Premium Wellness Equipment",
    template: "%s · Caldera",
  },
  description:
    "Premium equipment for recovery, relaxation, performance, and everyday well-being. Cold plunges, saunas, massage, red light, and sanctuary rooms. Flexible payment options available.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="house antialiased">
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
