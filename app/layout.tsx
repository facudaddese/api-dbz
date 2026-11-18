import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dragon Ball Explorer",
    template: "%s | Dragon Ball Explorer",
  },
  description:
    "Explorá el universo de Dragon Ball Z. Descubrí personajes, transformaciones, planetas y mucho más.",
  applicationName: "Dragon Ball Explorer",
  keywords: [
    "Dragon Ball",
    "Dragon Ball Z",
    "Personajes",
    "Saiyajins",
    "Transformaciones",
    "Dragon Ball Explorer",
  ],
  authors: [{ name: "Facundo Daddese" }],
  openGraph: {
    title: "Dragon Ball Explorer",
    description:
      "Explorá personajes, transformaciones y todo el universo de Dragon Ball Z.",
    siteName: "Dragon Ball Explorer",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="grid">{children}</div>
      </body>
    </html>
  );
}
