"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import Button from "@/components/Button";
import { toast } from "react-hot-toast"; 


function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { signInUser } = UserAuth();
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInUser(formData.email, formData.password);
            toast.success("Session started!");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="h-fit">
            <form onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-y-2 mb-2">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border-[1.5px] rounded shadow-sm p-[3px]"
                        />
                    </div>
                    <div className="flex flex-col gap-y-2 mb-2">
                        <label className="block mb-2 text-sm font-bold text-gray-700">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            className="border-[1.5px] rounded shadow-sm p-[3px]"
                        />
                    </div>
                
                <div className="mt-8 flex flex-col gap-y-8">
                <div className="mx-20">
                    <Button type="submit">Login</Button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
