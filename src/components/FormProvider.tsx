import { createContext } from "react";
import { useFormLogic } from "../services/formService";

export const FormContext = createContext();

function FormProvider({ children }) {
  const form = useFormLogic();

  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
