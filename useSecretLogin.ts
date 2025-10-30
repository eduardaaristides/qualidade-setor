import { useState, useEffect } from "react";

// Esse hook detecta um atalho secreto do teclado (Ctrl + Alt + L)
export default function useSecretLogin() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "l") {
        setShowLogin(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return showLogin;
}
