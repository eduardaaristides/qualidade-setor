import { createContext, useContext, useState, type ReactNode } from "react";

// Defina o tipo do contexto
type EditModeContextType = {
  modoEdicao: boolean;
  setModoEdicao: React.Dispatch<React.SetStateAction<boolean>>;
  alternarModoEdicao: () => void;
};



// Valor padrão para o contexto
const EditModeContext = createContext<EditModeContextType>({
  modoEdicao: false,
  setModoEdicao: () => {},
  alternarModoEdicao: () => {},
});

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [modoEdicao, setModoEdicao] = useState(false);

  function alternarModoEdicao() {
    setModoEdicao((prev) => !prev);
  }

  return (
    <EditModeContext.Provider value={{ modoEdicao, setModoEdicao, alternarModoEdicao }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  return useContext(EditModeContext);
}