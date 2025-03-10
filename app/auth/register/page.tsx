'use client';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Link from "next/link";
import { HiEyeSlash } from "react-icons/hi2";
import { FaEye, FaKey, FaMailchimp, FaNoteSticky, FaPhone, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";




export async function RegisterAction() {
    await new Promise(res=> setTimeout(res, Math.random() * 1000)) ;
}
const Register: React.FC = () => {

    const router = useRouter();


    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [submitting, isSubmitting] = useState<boolean>(false)


    const [inputdata, setinputdata] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
        serviceNumber: "",
        telephoneNumber: "",
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
        await new Promise <void> ((res) => setTimeout(res, Math.random() * 2000));
        console.log("Register Data:", inputdata);
        toast.success("created profile successfully!");
        localStorage.setItem("emergencyResponseProfile", JSON.stringify([inputdata]) )
        setinputdata ({
            firstName : "",
            lastName : "",
            email: "",
            password: "",
            serviceNumber: "",
            telephoneNumber: "",
        })
        isSubmitting(false);
        router.push("/auth/otp")
    };

    return (
        <div className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
            
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl text-black mb-4 ">Register</h1>

            <label className="text-gray-800">First name</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaUser />
                </button>
                <Input type="text" name="firstName" placeholder="enter first name" value={inputdata.firstName} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Last name</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaUser />
                </button>
                <Input type="text" name="lastName" placeholder="enter last name" value={inputdata.lastName} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Service number</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaNoteSticky />
                </button>
                <Input type="text" name="serviceNumber" placeholder="enter service number" value={inputdata.serviceNumber} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Telephone number</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaPhone />
                </button>
                <Input type="text" name="telephoneNumber" placeholder="enter telephone number" value={inputdata.telephoneNumber} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Email</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                  <MdEmail  />
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

            <button
                type="button"
                onClick={handleSave}
                className="bg-red-300 my-4 text-black px-4 py-3 rounded-full hover:bg-red-400 active:bg-red-500 cursor-pointer duration-300 w-full "
                disabled={submitting}
            >
                {submitting ? "Creating account" : "Create Account" }
            </button>
            <p className="text-gray-800">Already have an account? <Link href="/auth/login" className="text-red-600">Login</Link> </p>
            </form>
            
        </div>
    )
}

export default Register;