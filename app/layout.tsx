import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModalProvider } from "@/components/ModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Project Medical — Workers' Comp Medicare Set-Asides in seven business days",
  description:
    "Clinician-authored WCMSA reports for any state file, returned seven business days after engagement and records intake. Methodology follows the CMS WCMSA Reference Guide.",
  metadataBase: new URL("https://projectmedical.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-pm-paper text-pm-ink antialiased">
        <ModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
