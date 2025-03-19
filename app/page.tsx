// import Image from "next/image";
// import Link from "next/link";
'use client';
import React, { useEffect }  from "react";
import Sidebar from "./components/sidebar";
import { useRouter } from "next/navigation";
import GoogleMapsComponent from "./components/googleMap";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("emergencyResponseProfile"); 
    if (!token) {
      router.push("/auth/login"); 
    }
  }, []);

  // if (typeof window !== "undefined" && !localStorage.getItem("emergencyResponseProfile")) {
  //   return null;
  // }

  return (
    <>
    <Sidebar />
    <div className="Home  ml-50 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 m-auto ">
      <main className=" Maps h-11/12 w-full m-auto">
        <GoogleMapsComponent />
      </main>
      {/* <div className="flex flex-col gap-8 row-start-2 items-center ">
        <h1> Welcome to Emergency response </h1>
        <div className="flex flex-wrap  justify-center ">
          this is the fastest way
        </div>
      </div> */}
    </div>
    </>
  );
}
