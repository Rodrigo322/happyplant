import happyPlant from "../../assets/HappyPlant.svg";
import happyLogo from "../../assets/logo_home.svg";

import "./styles.css";

export function LogoSidebar() {
  return (
    <div className="sidebar">
      <img src={happyLogo} alt="Happy Plant" />
      <img src={happyPlant} alt="Logo" />
      <p>Cuidar das suas plantas ficou ainda mais facil!</p>
    </div>
  );
}
