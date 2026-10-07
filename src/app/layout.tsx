import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PopupCtaProvider from "./components/popup-cta";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mossierp.com"),
  title: {
    default: "Mossie ERP | One calm platform for your whole business",
    template: "%s | Mossie ERP",
  },
  description: "Connect finance, HR, sales, inventory, operations and reporting in one intelligent ERP platform built for growing businesses.",
  openGraph: {
    title: "Mossie ERP | One calm platform for your whole business",
    description: "Connect finance, HR, sales, inventory, operations and reporting in one intelligent ERP platform built for growing businesses.",
    url: "https://mossierp.com",
    siteName: "Mossie ERP",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mossie ERP | One calm platform for your whole business",
    description: "Connect finance, HR, sales, inventory, operations and reporting in one intelligent ERP platform built for growing businesses.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body style={{ 
        fontFamily: 'var(--font-inter), sans-serif',
      }}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#006fc9] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white text-sm font-semibold"
        >
          Skip to main content
        </a>
        <PopupCtaProvider>{children}</PopupCtaProvider>
      </body>
    </html>
  );
}
