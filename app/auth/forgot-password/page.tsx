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
    const [error, setError] = useState<string | null>("")


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
        if(inputdata.password !== inputdata.confirmpassword){
            setError("passowrds ndo not match")
            toast.error("passwords do not match")
            return;
        }
        else{
            isSubmitting(true);
            await new Promise <void> ((res) => setTimeout(res, Math.random() * 2000));
            console.log("Login Data:", inputdata);
            toast.success("data saved!");
            setinputdata ({
                email: "",
                password: "",
                confirmpassword : "",
            })
            isSubmitting(false);
            router.push("/auth/otp")
        }    
    };


    const isFormComplete =
    inputdata.email.trim() !== "" &&
    inputdata.password.trim() !== "" &&
    inputdata.confirmpassword.trim() !== "" 
    // inputdata.password === inputdata.confirmpassword;

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
                
                <Input type={showPassword ? "text" : "password"} name="password" placeholder="enter new password" value={inputdata.password} onChange={handleChange} />
                
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-0 flex items-center pr-6 text-sm text-gray-600" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? < HiEyeSlash /> : <FaEye /> }
                </button>
            </div>


            <label className="text-gray-800">Confirm New Password</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaKey  />
                </button>
                
                <Input type={showPassword ? "text" : "password"} name="confirmpassword" placeholder="confirm new password" value={inputdata.confirmpassword} onChange={handleChange} />
                
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-0 flex items-center pr-6 text-sm text-gray-600" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? < HiEyeSlash /> : <FaEye /> }
                </button>
            </div>
            {/* {error &&  } */}
            <p className="text-red-600 text-sm mt-1">{error}</p>
            <button
                type="button"
                onClick={handleSave}
                className="bg-red-400 text-black my-4 px-4 py-3 rounded-full hover:bg-red-500 active:bg-red-400 cursor-pointer duration-300 w-full disabled:cursor-not-allowed  disabled:bg-red-300"
                disabled={!isFormComplete || submitting}
            >
                {submitting ? "Logging in" : "Login"}
            </button>
            </form>
        </div>
    )
}

export default ForgotPassword;