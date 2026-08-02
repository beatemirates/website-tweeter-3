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
  metadataBase: new URL(
    "https://northstar-it-services.johnhardaway216.chatgpt.site",
  ),
  title: "Tweeter Technical Services | Integrity built",
  description:
    "Nationwide mobile technology, telematics, camera, and low-voltage installation services for commercial fleets and specialized transportation assets.",
  openGraph: {
    title: "Tweeter Technical Services",
    description: "Nationwide fleet technology installation.",
    images: [{ url: "/og.png", width: 1729, height: 910 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tweeter Technical Services",
    description: "Nationwide fleet technology installation.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
