import { FiPlus, FiPower } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import plant from "../../assets/plant.png";

import "./styles.css";

export function DashSideBar() {
  const navigate = useNavigate();

  function handleSingOut() {
    navigate("/");
  }

  return (
    <aside className="home-side">
      <img src={plant} alt="Logo" />
      {/* <div className="home-buttons"> */}
      <Link
        to="/register"
        style={{ background: "#F4FFCC" }}
        className="dash-button"
      >
        <FiPlus size={25} color="#52665A" />
      </Link>
      <button onClick={handleSingOut} className="dash-button">
        <FiPower size={25} />
      </button>
      {/* </div> */}
    </aside>
  );
}
