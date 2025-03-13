'use client';
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
// import Link from "next/link";

interface OtpInputProps {
    length: number;
}


const Otpinput: React.FC <OtpInputProps> = ({length}) => {

    const router = useRouter();

    const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
    const [disabledbutton, setdisabledbutton] = useState<boolean>(false)

    // const inputRefs = useRef<HTMLInputElement[]>([]);
    const inputRefs = useRef<(HTMLInputElement | null )[]>(new Array(length).fill(null));


    const handleChange = (index: number, value: string) => {
        if (!/^\d?$/.test(value)) return;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1); 
        setOtp(newOtp);

        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus(); 
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Backspace" && !otp[index] && index > 0){
            inputRefs.current[index - 1]?.focus();
        }
    }




    const handleSave = async (): Promise<void> => {
        setdisabledbutton(true)
        try{
            await new Promise <void> ((res) => setTimeout(res, Math.random() * 3000));
            const newOtp = [...otp];
            const stringOtp = newOtp.join(""); 
            console.log("otp is:", stringOtp);
            toast.success("otp entered successfully!");
            router.push("/auth/login")
        }catch(error){
            console.log(error)
        }finally{
            setdisabledbutton(false)
        }
        
    }


    const isFormComplete = otp.join("").length === length;

    


    return (
        <form method="POST"  action="/" >
            <div className="flex justify-center gap-2">
                {otp.map((data, index) => { 
                    return ( <input 
                                type="text" 
                                key={index} 
                                value={data}
                                maxLength={1}
                                onChange={(e) => handleChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                inputMode="numeric"
                                ref={(el) => (inputRefs.current[index] = el)}
                                pattern="[0-9]*"
                                className="w-12 h-12 text-center border border-gray-300 rounded-md text-xl focus:border-blue-500 outline-none"
                             />
                            )
                })}
            </div>
            <button
                type="button"
                onClick={handleSave}
                disabled={!isFormComplete || disabledbutton}
                className="bg-red-400 my-8  text-black px-4 py-3 rounded-full hover:bg-red-500 active:bg-red-400 cursor-pointer duration-300 w-full disabled:cursor-not-allowed disabled:bg-red-300 "
            >
                {disabledbutton ? "Loading..." : "Enter"}
            </button>
            <div className="flex-shrink w-full text-center">
                <p className="text-black text-sm mt-1">
                    Try again or click on 
                    <strong className="font-bold text-red-600">
                        <button
                        className="cursor-pointer"
                        onClick={(e) => {e.preventDefault(); console.log("code was resent")}}
                        >“Resend code”</button>
                    </strong> to get a new one.
                </p>
            </div>
        </form>       
    )
}

export  default Otpinput;


