'use client';
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { FaHome, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";


interface MenuProps{
    id:number;
    name:string;
    icon:ReactNode;
    link:string;
    onClick?: () => void;
};

const menuitems: MenuProps[] = [
    {
        id: 1,
        name: "Home",
        link: "/",
        icon: <FaHome size={20} /> 
    },
    {
        id: 2,
        name: "Personnel",
        link: "/personnel",
        icon: <FaUser size={20} /> 
    },
    {
        id: 3,
        name: "Incidents",
        link: "/incidents",
        icon: <FaLocationDot size={20} /> 
    }
];

const Sidebar: React.FC = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLLIElement>, index: number) => {
        event.preventDefault();
        setActiveIndex(index)
        console.log("i was clicked")
    }

    return(
        <nav className="top-0 left-0 h-full absolute w-64 bg-white text-black p-4 shadow-xl shadow-gray-400 ">
            <h2 className="mb-8 uppercase mt-4">Emergency response </h2>
            <ul>
                {menuitems.map((item,index) => (
                    <li key={index} className="border-b border-b-red-300 py-4" onClick={(event) =>  handleClick(event, index)}>
                        <Link href={item.link} className={` flex items-center hover:pl-4 hover:text-red-300 duration-200 focus:text-red-500 ${activeIndex === index ? "text-red-500 font-bold" : "text-gray-700"}`}>
                            <span className="mr-2">{item.icon}</span>{item.name}
                        </Link>
                    </li>
                ))}
                

            </ul>
            <div className="absolute bottom-5 right-5 flex ">
                <Link href="#" title="logout" ><BiLogOut size={26} /></Link>
            </div>
        </nav>
    )
}

export default Sidebar;