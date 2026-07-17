import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Koin E&C | Engineering, Procurement & Construction",
  description:
    "PT. Koin Pratama & PT. Koin Konstruksi — EPC and plant maintenance services for power plant, refinery, and chemical plant projects across Indonesia. On time delivery of quality work with safety first minded operation.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#faf9f6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full bg-koin-bg font-body text-koin-ink antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
