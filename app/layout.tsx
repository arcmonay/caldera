import type { Metadata } from "next";
import { Barlow, Cormorant } from "next/font/google";
import { CompareBar } from "@/components/CompareBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HotSpringDock } from "@/components/HotSpringDock";
import { CartProvider } from "@/lib/cart-context";
import { CompareProvider } from "@/lib/compare-context";
import "./globals.css";

const display = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const sans = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Caldera — Mineral Wellness Equipment",
    template: "%s · Caldera",
  },
  description:
    "Volcanic spa retreat equipment for the home — cold plunges, saunas, massage, red light, and recovery rooms. Shop by goal, compare, package.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="retreat antialiased">
        <div className="crater-mark" aria-hidden="true" />
        <CartProvider>
          <CompareProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <CompareBar />
            <HotSpringDock />
          </CompareProvider>
        </CartProvider>
      </body>
    </html>
  );
}
