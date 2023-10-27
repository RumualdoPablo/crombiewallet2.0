"use client"

import { useCallback, useState } from "react"
import { toast } from "react-hot-toast"
import { UserAuth } from "@/context/AuthContext"
import RegistrationForm from "./AuthComponents/RegistrationForm"
import LogInForm from "./AuthComponents/LogInForm"
import Button from "./Button"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN")

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const { googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
        await googleSignIn();
    } catch (error) {
        console.log(error);
    }
};

  return (
    <div>
      <div className="">
        {variant === "REGISTER" ? (<RegistrationForm />) : (<LogInForm />)}
        <div className="relative my-3">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <Button onClick={googleSignIn}> Google </Button>
      </div>

      <div onClick={toggleVariant} className="underline cursor-pointer flex justify-end mt-5">
        {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
      </div>
    </div>

  )
}

export default AuthForm
