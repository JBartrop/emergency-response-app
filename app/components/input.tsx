import React from "react";

interface InputProps {
    type: string;
    name: string;
    placeholder: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder, value, onChange }) => {
    return (
        <div>
            <input 
            type={type} 
            name={name} 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange}
            className="w-full p-3 px-3 border border-black my-4 bg-transparent text-black rounded-full " />
        </div>
    )
}

export default Input;