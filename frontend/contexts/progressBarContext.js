import React, { createContext, useState } from "react";

// Criando o contexto com o valor inicial de 0
const ProgressContext = createContext();

// Componente provedor que irá fornecer o valor do progresso e a função de atualização
export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0); // valor inicial da barra de progresso

  // Função para atualizar o valor da progress bar
  const updateProgress = (value) => {
    if (value >= 0 && value <= 100) {
      setProgress((prev)=>prev+value);
    }
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export {ProgressContext};
export default ProgressProvider;