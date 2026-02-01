import { createContext } from "react";
import { useFormLogic, FormLogic } from "../services/formService";

export const FormContext = createContext<FormLogic | undefined>(undefined);

type FormProviderProps = {
  children: React.ReactNode
}

function FormProvider({ children }: FormProviderProps) {
  const form = useFormLogic();

  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
