import { createContext, useContext, useState, type ReactNode } from "react";

// Tipo do contexto
type EditModeContextType = {
  modoEdicao: boolean;
  setModoEdicao: React.Dispatch<React.SetStateAction<boolean>>;
  alternarModoEdicao: () => void;
};

// Valor padrão do contexto
const EditModeContext = createContext<EditModeContextType>({
  modoEdicao: false,
  setModoEdicao: () => {},
  alternarModoEdicao: () => {},
});

// Provedor do contexto
export function EditModeProvider({ children }: { children: ReactNode }) {
  const [modoEdicao, setModoEdicao] = useState(false);

  function alternarModoEdicao() {
    setModoEdicao((prev) => !prev);
  }

  return (
    <EditModeContext.Provider
      value={{ modoEdicao, setModoEdicao, alternarModoEdicao }}
    >
      {children}
    </EditModeContext.Provider>
  );
}

// Hook para usar o contexto
export function useEditMode() {
  return useContext(EditModeContext);
}
