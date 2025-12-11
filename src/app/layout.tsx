import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MiniappReady from "@/components/MiniappReady";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { base } from "wagmi/chains";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export async function generateMetadata(): Promise<Metadata> {
  return {
      other: {
      'fc:miniapp': JSON.stringify({
          version: 'next',
          imageUrl: 'https://miniapp-game-one.vercel.app/miniapp-logo.png',
          button: {
              title: `Launch Tap Game`,
              action: {
                  type: 'launch_miniapp',
                  name: 'Tap Game',
                  url: 'https://miniapp-game-one.vercel.app',
                  splashImageUrl: 'https://miniapp-game-one.vercel.app/miniapp-logo.png',
                  splashBackgroundColor: '#000000',
              },
          },
      }),
      },
  };
  }


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
        <OnchainKitProvider
          chain={base}
          config={{
            appearance: {
              mode: "auto",
              theme: "default",
            },
          }}
          miniKit={{
            enabled: true,
          }}
        >
          <MiniappReady />
          {children}
        </OnchainKitProvider>
      </body>
    </html>
  );
}
