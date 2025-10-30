// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from './componets/Header';
import About from './componets/About';
import Qualitysection from './componets/Qualitysection';
import Footer from './componets/Footer';
import Login from './componets/Login';
import useSecretLogin from './hookss/useSecretLogin';
import MenuBI from "./componets/MenuBI";
import { EditModeProvider, useEditMode } from "./context/EditMode";

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const showLogin = useSecretLogin();
  const { alternarModoEdicao } = useEditMode();

  if (showLogin && !isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <>
      <Header />

      {isLoggedIn && (
        <button
          onClick={alternarModoEdicao}
          className="fixed top-4 right-4 bg-[#1C446B] text-white px-4 py-2 rounded-lg shadow-md z-50"
        >
          Editar conteúdo
        </button>
      )}

      <Routes>
        {/* Página principal */}
        <Route
          path="/home"
          element={
            <>
              <About />
              <Qualitysection />
              <Footer />
            </>
          }
        />

        {/* Dashboards do Power BI */}
        <Route
          path="/menubi"
          element={
            <MenuBI
              title="Dashboard de Vendas"
              powerBIUrl="https://app.powerbi.com/view?r=eyJrIjoiYjYxYjYzYjYtYjQ0My00YjYzLWI0MzktYjYwZTk5YzY1YjYwIiwidCI6IjYzYjY2YzYtYjQ0My00YjYzLWI0MzktYjYwZTk5YzY1YjYwIn0%3D"
            />
          }
        />
      </Routes>
    </>
  );
}

// ✅ Envolvendo o app com o EditModeProvider
const App = () => {
  return (
    <BrowserRouter>
      <EditModeProvider>
        <AppContent />
      </EditModeProvider>
    </BrowserRouter>
  );
};

export default App;
