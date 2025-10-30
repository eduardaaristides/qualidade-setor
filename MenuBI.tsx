// src/components/MenuBI.tsx
import "../app.css";

interface MenuBIProps {
  title?: string;
  powerBIUrl?: string;
}

const MenuBI = ({
  title = "Exemplo de Dashboard",
  powerBIUrl = "https://www.example.com",
}: MenuBIProps) => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h2 className="dashboard-title">{title}</h2>
        <div className="dashboard-iframe-container">
          <iframe
            title={title}
            src={powerBIUrl}
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MenuBI;

