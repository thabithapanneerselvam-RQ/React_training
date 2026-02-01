import React, { useState } from "react";

export type FormData = {
  firstName: string
  lastName: string
  email: string
  gender: string
  dob: string
  state: string
  city: string
  zip: string
}

export type FormLogic = {
  step: number
  theme: "light" | "dark"
  toggleTheme: () => void
  formData: FormData
  emailError: string
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  nextStep: () => void
  prevStep: () => void
}

export function useFormLogic(): FormLogic {
  const [step, setStep] = useState<number>(1);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [emailError, setEmailError] = useState<string>("");

  const [formData, setFormdata] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    state: "",
    city: "",
    zip: ""
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata(prev => ({ ...prev, [name]: value }));

    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      setEmailError(isValid ? "" : "Please enter a valid email");
    }
  };

  const nextStep = ()=>{
        if(step===1){
            if(!formData.firstName || !formData.lastName || !formData.email){
                return alert("all fields are required")
            }
            if(emailError){
                return alert("enter valid email")
            }
        }
        if(step===2){
            if(!formData.gender || !formData.dob){
                return alert("all fields are required")
            }
        }
        if(step===3){
            if(!formData.state || !formData.city || !formData.zip){
                return alert("all fields are required")
            }
        }
        setStep(step+1);
    }

  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  return {
    step,
    theme,
    toggleTheme,
    formData,
    emailError,
    handleChange,
    nextStep,
    prevStep
  };
}
