import { createContext, useContext, useState } from "react";

const SemaforoContext = createContext(null);

export const SemaforoProvider = ({ children }) => {
  const [color, setColor] = useState("rojo"); // Estado con color inicial

  return (
    <SemaforoContext.Provider value={{ color, setColor }}>
      {children}
    </SemaforoContext.Provider>
  );
};

export const useSemaforo = () => useContext(SemaforoContext);

