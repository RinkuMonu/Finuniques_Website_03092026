import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AppSplash } from "@/components/app-splash";
import { MotionEffects } from "@/components/motion-effects";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata = {
  title: { default: "Finunique — Payments made simple", template: "%s | Finunique" },
  description: "Simple, secure payment solutions for modern businesses.",
  icons: { icon: "/finunique-mark.svg", apple: "/finunique-mark.svg" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className} suppressHydrationWarning>
        <AppSplash />
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
