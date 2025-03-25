import React from "react";
 import Otpinput from "../../components/otpinput";
 
 const Otp: React.FC = () => {
     return (
         <section className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
             <div >
                 <h1 className="text-center uppercase font-bold text-2xl text-black mb-4 ">otp</h1>
                 <Otpinput length={6} />
                 <button></button>
             </div>
             
         </section>
     )
 }
 
 export  default Otp;