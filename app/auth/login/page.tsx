'use client';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Link from "next/link";




export async function LoginAction() {
    await new Promise(res=> setTimeout(res, Math.random() * 1000)) ;
}
const Login: React.FC = () => {


    // const issubmitting = useState<boolean>(false)
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

    const handleSave = () => {
        console.log("Login Data:", inputdata);
        toast.success("login successfully!");
        localStorage.setItem("emergencyResponseProfile", JSON.stringify([inputdata]) )
        setinputdata ({
            email: "",
            password: ""
        })
    };

    return (
        <div className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
            
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl ">login</h1>
            <label>Email</label>
            <Input type="email" name="email" placeholder="enter email" value={inputdata.email} onChange={handleChange} />
            <label>Password</label>
            <Input type="password" name="password" placeholder="enter password" value={inputdata.password} onChange={handleChange} />
            <Link href="#">Forgot password?</Link>
            <button
                type="button"
                onClick={handleSave}
                className="bg-red-300 text-black px-4 py-3 rounded-full hover:bg-red-400 active:bg-red-500 cursor-pointer duration-300 w-full "
                // disabled={issubmitting}
            >Login
            </button>
            <p>Don't have an account? <Link href="#">Register</Link> </p>
            </form>
            
        </div>
    )
}

export default Login;