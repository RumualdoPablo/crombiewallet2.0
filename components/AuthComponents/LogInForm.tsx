"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { UserAuth } from "@/context/AuthContext";
import Button from "@/components/Button";


function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { signInUser, googleSignIn } = UserAuth();
    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signInUser(formData.email, formData.password);
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <div className="h-fit">
            <form onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-y-2 mb-2">
                        <label>Email:</label>
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
                        <label>Password:</label>
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
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
