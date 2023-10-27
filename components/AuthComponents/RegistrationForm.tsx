"use client";
import React, { useState, FormEvent } from "react";
import Image from "next/image";
import { RegisterForm } from "@/interfaces/RegisterForm";
import { validateRegistrationForm } from "@/utils/RegisterFormValidations";
import { UserAuth } from "@/context/AuthContext";
import Button from "@/components/Button";

function Page() {
    const [formData, setFormData] = useState<RegisterForm>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        profilePictureURL: "",
    });

    const [error, setError] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationError = validateRegistrationForm(formData);

        if (validationError) {
            setError(validationError);
            return;
        }

        try {
            await registerUser(formData);
        } catch (error) {
            setError("Error al registrar el usuario. Por favor, inténtalo de nuevo.");
            console.error("Error al registrar el usuario:", error);
        }
    };

    const { googleSignIn, registerUser } = UserAuth();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="">
            <div className="">
                <div className="">
                    <div className="">
                    </div>
                    <div className="">
                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                        <form
                            onSubmit={handleSubmit}
                            className=""
                        >
                            <div className="flex flex-col gap-y-5 mb-5">
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="border-[1.5px] rounded shadow-sm p-[3px] text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="border-[1.5px] rounded shadow-sm p-[3px] text-center"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-5 mb-5">
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-bold text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Type your password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        className="border-[1.5px] rounded shadow-sm p-[3px] text-center"
                                    />
                                </div>
                                <div className="flex flex-col">
                                    <label className="block mb-2 text-sm font-bold text-gray-700 w-60">
                                        Confirm Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                        className="border-[1.5px] rounded shadow-sm p-[3px] text-center"
                                    />
                                </div>
                            </div>
                            {error && (
                                <div className="text-red-500 mb-4 flex justify-center bg-red-100 rounded p-2 text-center">
                                    {error}
                                </div>
                            )}
                            <div className="mt-8 flex flex-col gap-y-8">
                                <Button type="submit">Register</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page;
