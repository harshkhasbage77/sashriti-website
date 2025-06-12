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

export const metadata = {
  title: "Sashriti - Know The Real Value",
  description: "Protector of wealth",
  openGraph: {
    title: "Sashriti - Know The Real Value",
    description: "Protector of wealth",
    url: "https://sashriti-website.vercel.app", // or your production domain
    siteName: "Sashriti",
    images: [
      {
        url: "/preview.png", // MUST be in the public folder
        width: 1200,
        height: 630,
        alt: "Sashriti Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sashriti - Know The Real Value",
    description: "Protector of wealth",
    images: ["/preview.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
    bbai-tooltip-injected="true"
    lang="en"
    className="dark"
    >
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
