'use client';
import React, { useState }  from "react";
import Input from "../../components/input";
import { toast } from "react-toastify";
// import Link from "next/link";
import { HiEyeSlash } from "react-icons/hi2";
import { FaEye, FaKey, FaUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";



const ForgotPassword : React.FC = () => {

    const router = useRouter();


    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [submitting, isSubmitting] = useState<boolean>(false)


    const [inputdata, setinputdata] = useState({
        email : "",
        password : "",
        confirmpassword : "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setinputdata((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
    }

    const handleSave = async (): Promise<void> => {
        isSubmitting(true);
        await new Promise <void> ((res) => setTimeout(res, Math.random() * 2000));
        console.log("Login Data:", inputdata);
        toast.success("login successfully!");
        localStorage.setItem("emergencyResponseProfile", JSON.stringify([inputdata]) )
        setinputdata ({
            email: "",
            password: "",
            confirmpassword : "",
        })
        isSubmitting(false);
        router.push("/auth/otp")
    };

    return(
        <div className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl text-black mb-4 ">forgot password</h1>

            <label className="text-gray-800">Email</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaUser  />
                </button>
                <Input type="email" name="email" placeholder="enter email" value={inputdata.email} onChange={handleChange} />
            </div>


            <label className="text-gray-800">New Password</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaKey  />
                </button>
                
                <Input type={showPassword ? "text" : "password"} name="new password" placeholder="enter new password" value={inputdata.password} onChange={handleChange} />
                
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-0 flex items-center pr-6 text-sm text-gray-600" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? < HiEyeSlash /> : <FaEye /> }
                </button>
            </div>


            <label className="text-gray-800">Confirm New Password</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaKey  />
                </button>
                
                <Input type={showPassword ? "text" : "password"} name="confirm new password" placeholder="confirm new password" value={inputdata.confirmpassword} onChange={handleChange} />
                
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-0 flex items-center pr-6 text-sm text-gray-600" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? < HiEyeSlash /> : <FaEye /> }
                </button>
            </div>
            <label className="text-gray-800 text-sm mt-1">passwords match??</label>
            <button
                type="button"
                onClick={handleSave}
                className="bg-red-300 text-black my-4 px-4 py-3 rounded-full hover:bg-red-400 active:bg-red-500 cursor-pointer duration-300 w-full "
                disabled={submitting}
            >
                {submitting ? "Logging in" : "Login"}
            </button>
            </form>
        </div>
    )
}

export default ForgotPassword;