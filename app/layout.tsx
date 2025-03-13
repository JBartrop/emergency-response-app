import type { Metadata } from "next";
import { Raleway, Raleway_Dots } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./components/loader";

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
        <div className="prreloader">
          <Loader />
        </div>
        <ToastContainer position="top-right" autoClose={3000} />
        {children}
      </body>
    </html>
  );
}
