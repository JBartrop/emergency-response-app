'use client';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Link from "next/link";
import { HiEyeSlash } from "react-icons/hi2";
import { FaEye, FaKey, FaUser } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import axios from "axios";




export async function LoginAction() {
    await new Promise(res=> setTimeout(res, Math.random() * 1000)) ;
}
const Login: React.FC = () => {

    const router = useRouter();


    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [submitting, isSubmitting] = useState<boolean>(false)


    const [inputdata, setinputdata] = useState({
        email : "",
        password : ""
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setinputdata((prevdata) => ({
            ...prevdata,
            [name]: value
        }))
        // console.log(name, value)
    }

    const handleSave = async (): Promise<void> => { 
        isSubmitting(true);
        try{
            await new Promise <void> ((res) => setTimeout(res, Math.random() * 2000));

            const response = await axios.post("http://localhost:3000/api/v1/auth/login-web", inputdata);
            console.log("From backend login data:", response.data);

            console.log("Login Data:", inputdata);
            toast.success("login successfully!");
            localStorage.setItem("emergencyResponseProfile", JSON.stringify([inputdata]) )
            router.push("/")
        }catch(error){
            console.log(error)
        }finally{
            setinputdata ({
                email: "",
                password: ""
            })
            isSubmitting(false);
        }

    };

    const isFormComplete =
    inputdata.email.trim() !== "" &&
    inputdata.password.trim() !== ""

    return (
        <div className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
            
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl text-black mb-4 ">login</h1>

            <label className="text-gray-800">Email</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaUser  />
                </button>
                <Input type="email" name="email" placeholder="enter email" value={inputdata.email} onChange={handleChange} />
            </div>
            

            <label className="text-gray-800">Password</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <FaKey  />
                </button>
                
                <Input type={showPassword ? "text" : "password"} name="password" placeholder="enter password" value={inputdata.password} onChange={handleChange} />
                
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className="absolute inset-y-0 right-0 flex items-center pr-6 text-sm text-gray-600" aria-label={showPassword ? 'Hide password' : 'Show password'}>
                {showPassword ? < HiEyeSlash /> : <FaEye /> }
                </button>
            </div>


            <Link href="/auth/forgot-password" className="text-red-600">Forgot password?</Link>
            <button
                type="button"
                onClick={handleSave}
                className="bg-red-400 text-black my-4 px-4 py-3 rounded-full hover:bg-red-500 active:bg-red-400 cursor-pointer duration-300 w-full disabled:cursor-not-allowed disabled:bg-red-300 "
                disabled={ !isFormComplete || submitting}
            >
                {submitting ? "Logging in" : "Login"}
            </button>
            <p className="text-gray-800">Don't have an account? <Link href="/auth/register" className="text-red-600">Register</Link> </p>
            </form>
            
        </div>
    )
}

export default Login;