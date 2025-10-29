import "../app.css";
import { useState, useEffect } from "react";
import { useEditMode } from "../context/EditMode";

type Evento = {
  id: string;
  imagem: string;
  titulo: string;
  texto: string;
};

export default function About() {
  const { modoEdicao } = useEditMode();
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [index, setIndex] = useState(0);

  // 🔹 Buscar eventos do backend ao carregar o componente
  useEffect(() => {
    async function carregarEventos() {
      try {
        const res = await fetch("http://localhost:4000/eventos");
        const data = await res.json();
        setEventos(data);
      } catch (err) {
        console.error("Erro ao carregar eventos:", err);
      }
    }
    carregarEventos();
  }, []);

  // 🔄 Rotação automática do carrossel
  useEffect(() => {
    if (eventos.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % eventos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [eventos.length]);

  // ➕ Adicionar novo evento
  async function addEvento() {
    const novo = {
      imagem: "public/logo-rede-primavera.webp",
      titulo: "Novo título",
      texto: "Novo texto",
    };
    await fetch("http://localhost:4000/eventos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novo),
    });
    const res = await fetch("http://localhost:4000/eventos");
    setEventos(await res.json());
  }

  // ✏️ Atualizar evento
  async function updateEvento(id: string, patch: Partial<Evento>) {
    await fetch(`http://localhost:4000/eventos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(patch),
    });
    const res = await fetch("http://localhost:4000/eventos");
    setEventos(await res.json());
  }

  // ❌ Remover evento
  async function removeEvento(id: string) {
    await fetch(`http://localhost:4000/eventos/${id}`, { method: "DELETE" });
    const res = await fetch("http://localhost:4000/eventos");
    setEventos(await res.json());
    setIndex(0);
  }

  return (
    <main>
      <section className="about-section">
        <div className="carrossel-container">
          {modoEdicao ? (
            // ================= MODO EDIÇÃO =================
            <div className="about-edit">
              <h3>Modo de edição — Carrossel</h3>
              {eventos.map((e) => (
                <div
                  key={e.id}
                  style={{
                    marginBottom: 12,
                    border: "1px solid #ddd",
                    padding: 8,
                    borderRadius: 6,
                  }}
                >
                  <label>Imagem (URL)</label>
                  <input
                    type="text"
                    value={e.imagem}
                    onChange={(ev) =>
                      updateEvento(e.id, { imagem: ev.target.value })
                    }
                    style={{ width: "100%", marginBottom: 6 }}
                  />
                  <label>Título</label>
                  <input
                    type="text"
                    value={e.titulo}
                    onChange={(ev) =>
                      updateEvento(e.id, { titulo: ev.target.value })
                    }
                    style={{ width: "100%", marginBottom: 6 }}
                  />
                  <label>Texto</label>
                  <textarea
                    value={e.texto}
                    onChange={(ev) =>
                      updateEvento(e.id, { texto: ev.target.value })
                    }
                    style={{ width: "100%", marginBottom: 6 }}
                    rows={3}
                  />
                  <div>
                    <button
                      onClick={() => removeEvento(e.id)}
                      style={{ marginRight: 8 }}
                    >
                      Remover
                    </button>
                    <button onClick={() => window.open(e.imagem, "_blank")}>
                      Ver imagem
                    </button>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 8 }}>
                <button onClick={addEvento} style={{ marginRight: 8 }}>
                  Adicionar slide
                </button>
              </div>
            </div>
          ) : (
            // ================= MODO VISUALIZAÇÃO =================
            <>
              <div className="carrossel">
                {eventos.length > 0 && (
                  <>
                    <img
                      src={eventos[index].imagem}
                      alt={eventos[index].titulo}
                      className="carrossel-imagem"
                    />
                    <div className="carrossel-indicadores">
                      {eventos.map((_, i) => (
                        <span
                          key={i}
                          className={`indicador ${
                            i === index ? "ativo" : ""
                          }`}
                          onClick={() => setIndex(i)}
                        ></span>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="main-content">
                {eventos[index] ? (
                  <>
                    <h2>{eventos[index].titulo}</h2>
                    <p>{eventos[index].texto}</p>
                    <button className="btn-about">
                      <a href="#">Saiba mais</a>
                    </button>
                  </>
                ) : (
                  <p>Sem slides.</p>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
