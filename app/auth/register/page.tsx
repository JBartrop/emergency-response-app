'use client';
import React, { useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/input";
import Link from "next/link";
import { HiEyeSlash } from "react-icons/hi2";
import { FaBuilding, FaEye, FaKey, FaMailchimp, FaNoteSticky, FaPhone, FaRankingStar, FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useRouter } from "next/navigation";
import axios from "axios";




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
        service_number: "",
        phone: "",
        station_id: "",
        rank: "",
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

            const response = await axios.post("http://localhost:3000/api/v1/auth/register-web", inputdata);
            console.log("From backend data:", response.data);

            toast.success("created profile successfully!");
            localStorage.setItem("emergencyResponseProfile", JSON.stringify([inputdata.email, inputdata.password]) )
            router.push("/auth/login")
        }catch(error){
            console.log(error)
        }finally{
            setinputdata ({
                firstName : "",
                lastName : "",
                email: "",
                password: "",
                service_number: "",
                phone: "",
                station_id: "",
                rank: "",
            })
            isSubmitting(false);
        }


    };


    const isFormComplete =
    inputdata.email.trim() !== "" &&
    inputdata.password.trim() !== "" &&
    inputdata.firstName.trim() !== "" &&
    inputdata.lastName.trim() !== "" &&
    inputdata.phone.trim() !== "" &&
    inputdata.service_number.trim() !== ""  &&
    inputdata.station_id.trim() !== "" &&
    inputdata.rank.trim() !== ""

    return (
        <div className="bg-amber-50 rounded-lg px-7 py-3     w-10/12   sm:w-1/2   lg:w-2/5  ">
            
            <form method="POST" action="/">
            <h1 className="text-center uppercase font-bold text-2xl text-black mb-3 ">Register</h1>

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

            <label className="text-gray-800">Rank</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaRankingStar />
                </button>
                <Input type="text" name="rank" placeholder="enter your rank" value={inputdata.rank} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Service number</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaNoteSticky />
                </button>
                <Input type="text" name="service_number" placeholder="enter service number" value={inputdata.service_number} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Station number</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaBuilding />
                </button>
                <Input type="text" name="station_id" placeholder="enter station number" value={inputdata.station_id} onChange={handleChange} />
            </div>

            <label className="text-gray-800">Telephone number</label>
            <div className="relative">
                <button className="absolute inset-y-0 left-0 flex items-center pl-6 text-sm text-gray-600">
                    <FaPhone />
                </button>
                <Input type="text" name="phone" placeholder="enter telephone number" value={inputdata.phone} onChange={handleChange} />
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
            <p className="text-red-800">password should be the same as service number </p>

            <button
                type="button"
                onClick={handleSave}
                className="bg-red-400 my-4 text-black px-4 py-2 rounded-full hover:bg-red-500 active:bg-red-400 cursor-pointer duration-300 w-full disabled:cursor-not-allowed disabled:bg-red-300 "
                disabled={!isFormComplete || submitting}
            >
                {submitting ? "Creating account" : "Create Account" }
            </button>
            <p className="text-gray-800">Already have an account? <Link href="/auth/login" className="text-red-600">Login</Link> </p>
            </form>
            
        </div>
    )
}

export default Register;