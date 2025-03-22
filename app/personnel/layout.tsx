import type { Metadata } from "next";
import { Raleway, Raleway_Dots } from "next/font/google";
import "../globals.css";
import Sidebar from "../components/sidebar";

const RalewaySans = Raleway({
  subsets: ["latin"],
});

const robotoMono = Raleway({

  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Emergency Response / Personnel",
  description: "created frontend by happydays using next.js",
};


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="Personnel flex ">
        <Sidebar />

        {children}

    </section>
  );
}
