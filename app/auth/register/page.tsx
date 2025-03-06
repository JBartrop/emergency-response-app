'use client';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/input";




export async function RegisterAction() {
    await new Promise(res=> setTimeout(res, Math.random() * 1000)) ;
}
const Register: React.FC = () => {


    // const issubmitting = useState<boolean>(false)
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

    const handleSave = () => {
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
    };

    return (
        <div className="bg-amber-50 rounded-lg p-8     w-10/12   sm:w-1/2   lg:w-2/5  ">
            
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl ">Register</h1>

            <label>First name</label>
            <Input type="text" name="firstName" placeholder="enter first name" value={inputdata.firstName} onChange={handleChange} />

            <label>Last name</label>
            <Input type="text" name="lastName" placeholder="enter last name" value={inputdata.lastName} onChange={handleChange} />

            <label>Service number</label>
            <Input type="text" name="serviceNumber" placeholder="enter service number" value={inputdata.serviceNumber} onChange={handleChange} />

            <label>Telephone number</label>
            <Input type="text" name="telephoneNumber" placeholder="enter email" value={inputdata.telephoneNumber} onChange={handleChange} />

            <label>Email</label>
            <Input type="text" name="email" placeholder="entertelephone number" value={inputdata.email} onChange={handleChange} />

            <label>Password</label>
            <Input type="password" name="password" placeholder="enter password" value={inputdata.password} onChange={handleChange} />

            <button
                type="button"
                onClick={handleSave}
                className="bg-red-300 text-black px-4 py-3 rounded-md hover:bg-red-400 active:bg-red-500 cursor-pointer duration-300 w-full "
                // disabled={issubmitting}
            >Create Account
            </button>
            </form>
            
        </div>
    )
}

export default Register;