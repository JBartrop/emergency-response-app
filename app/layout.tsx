import type { Metadata } from "next";
import { Raleway, Raleway_Dots } from "next/font/google";
import "./globals.css";

const RalewaySans = Raleway({
  subsets: ["latin"],
});

const robotoMono = Raleway({

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergency Response App",
  description: "created frontend by happydays using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${RalewaySans.className} ${robotoMono.className} antialiased`}
      >
        <nav>navvvvv</nav>
        {children}
      </body>
    </html>
  );
}
