// Importando o arquivo de estilo
import "../app.css";

// Função do componente Footer
function Qualitysection() {
  return (
   <section className="quality-section">
      {/* === LADO ESQUERDO === */}
      <div className="info-box">
        <h2>Informativo da Qualidade</h2>
        <p>
          A <span className="highlight">Qualidade</span> é um setor de apoio técnico para toda a Rede Primavera, tendo como
          objetivos promover a melhoria contínua dos nossos processos, consolidação das práticas assistenciais e redução dos
          riscos de falhas, garantindo a Segurança do Paciente.
        </p>


      </div>

      {/* === LADO DIREITO === */}
      <div className="org-box">
        <h2>Organograma</h2>

        <div className="org-chart">
          <div className="org-top">Diretoria Técnica</div>
          <div className="org-line"></div>
          <div className="org-middle">Gerência da Qualidade e Segurança do Paciente</div>
          <div className="org-line"></div>

          <div className="org-grid">
            <div>Enf. Aline Menezes</div>
            <div>Enf. Rosana Oliveira</div>
            <div>Enf. Jéssica de Oliveira</div>
            <div>Enf. Thais de Carvalho</div>
            <div>Lídia Lira - Técnica de Qualidade</div>
            <div>Mikael Evangelista - Técnico de Qualidade</div>
            <div>Camila Santana - Técnica de Qualidade</div>
            <div>Thalita Santos - Técnica de Qualidade</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualitysection;
