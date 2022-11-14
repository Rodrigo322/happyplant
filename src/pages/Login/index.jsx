import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { LogoSidebar } from "../../components/LogoSidebar";
import { api } from "../../services/api";

import "./styles.css";

export function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  async function handleGoHome(e) {
    e.preventDefault()
    try {
      const user = {
        name
      }
      const response = await api.post("/users/create", user)
      if(response.status === 201) {
        navigate("/home")
        localStorage.setItem("user:name", name)
        localStorage.setItem("user:id", response.data.id)
      }
      if(response.status === 400) {
        alert("Ops! Algo deu errado, por favor tente novamente.")
      }
    } catch (error) {
      alert("Ops! Algo deu errado")
      console.log(error)
    }
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
