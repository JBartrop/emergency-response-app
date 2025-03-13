// import Image from "next/image";
// import Link from "next/link";
'use client';
import React, { useEffect }  from "react";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("emergencyResponseProfile"); 
    if (!token) {
      router.push("/auth/login"); 
    }
  }, []);

  if (typeof window !== "undefined" && !localStorage.getItem("emergencyResponseProfile")) {
    return null;
  }

  return (
    <>
    <Sidebar />
    <div className="Home grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h1> Welcome to Emergency response </h1>
        <div className="flex flex-wrap  justify-center ">
          this is the fastest way
        </div>
      </main>
    </div>
    </>
  );
}
