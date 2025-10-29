import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

async function startServer() {
  
 const db = await mysql.createConnection({
  host: "172.16.0.74",
  user: "root",
  password: "SiteQualidade@hp2022!#",
  database: "portal_web",
  port:3306
});
    await db.connect();

  console.log("Conectado ao MySQL!");

 
  app.get("/eventos", async (req, res) => {
    const [rows] = await db.query("SELECT * FROM eventos");
    res.json(rows);
  });

  app.post("/eventos", async (req, res) => {
    const { imagem, titulo, texto } = req.body;
    await db.query(
      "INSERT INTO eventos (imagem, titulo, texto) VALUES (?, ?, ?)",
      [imagem, titulo, texto]
    );
    res.json({ ok: true });
  });

  app.put("/eventos/:id", async (req, res) => {
    const { id } = req.params;
    const { imagem, titulo, texto } = req.body;
    await db.query(
      "UPDATE eventos SET imagem = ?, titulo = ?, texto = ? WHERE id = ?",
      [imagem, titulo, texto, id]
    );
    res.json({ ok: true });
  });

  app.delete("/eventos/:id", async (req, res) => {
    const { id } = req.params;
    await db.query("DELETE FROM eventos WHERE id = ?", [id]);
    res.json({ ok: true });
  });

  // ==================== INICIAR SERVIDOR ====================
  app.listen(4000, () => {
    console.log(" API rodando em http://localhost:4000");
  });
}

startServer();
