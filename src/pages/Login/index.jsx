import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { LogoSidebar } from "../../components/LogoSidebar";

import "./styles.css";

export function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleGoHome() {
    navigate("/home");
    localStorage.setItem("user:name", name);
  }
  return (
    <div id="page-login">
      <LogoSidebar />
      <section className="content">
        <form>
          <h1>Como podemos chamar você? </h1>
          <Input
            label="Seu nome"
            type="text"
            placeholder="Digite aqui seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleGoHome}>Entrar</button>
        </form>
      </section>
    </div>
  );
}
