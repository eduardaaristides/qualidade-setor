import { useState } from "react";

interface LoginProps {
  onLogin: (tipoUsuario: "admin" | "usuario") => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  // Lista de usuários fixos (por enquanto)
  const usuarios = [
    { nome: "admin", senha: "1234", tipo: "admin" as const },
    { nome: "admin2", senha: "abcd", tipo: "usuario" as const },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verifica se existe um usuário com nome e senha correspondentes
    const usuarioEncontrado = usuarios.find(
      (u) => u.nome === nome && u.senha === senha
    );

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado.tipo);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1C446B] text-white">
      <h1 className="text-2xl font-bold mb-4">Acesso restrito</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Usuário"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="p-2 rounded text-black"
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="p-2 rounded text-black"
        />

        <button
          type="submit"
          className="bg-white text-[#1C446B] font-semibold px-4 py-2 rounded-lg"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
