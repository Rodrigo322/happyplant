import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/plant.png";
import "./styles.css";

export function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="app-sidebar">
      <img src={logo} alt="Logo" />
      <footer>
        <button type="button" onClick={() => navigate("/home")}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
