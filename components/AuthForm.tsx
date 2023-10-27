"use client"

import { useCallback, useEffect, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import axios from "axios"
import { toast } from "react-hot-toast"
import { validateRegistrationForm } from "@/utils/RegisterFormValidations";
import { UserAuth } from "@/context/AuthContext"
import { RegisterForm } from "@/interfaces/RegisterForm"
import RegistrationForm from "./AuthComponents/RegistrationForm"
import LogInForm from "./AuthComponents/LogInForm"

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


  return (
    <div>
      {variant === "REGISTER" ? (<RegistrationForm />) : (<LogInForm />)}
      
      <div onClick={toggleVariant} className="underline cursor-pointer">
        {variant === 'LOGIN' ? 'Create an account' : 'Log in'}
      </div>
    </div>

  )
}

export default AuthForm
