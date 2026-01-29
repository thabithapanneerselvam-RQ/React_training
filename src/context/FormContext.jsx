import { createContext, useState } from "react";
import { validateEmail, validateStep } from "../services/formService";

export const FormContext = createContext();

function FormProvider({ children }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === "email") {
      setEmailError(
        validateEmail(value) ? "" : "Invalid email"
      );
    }
  };

  const nextStep = () => {
    if (!validateStep(step, formData)) {
      alert("Please fill all required fields");
      return;
    }
    if (emailError) return;
    setStep(step + 1);
  };

  return (
    <FormContext.Provider value={{
      step,
      formData,
      emailError,
      handleChange,
      nextStep
    }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
