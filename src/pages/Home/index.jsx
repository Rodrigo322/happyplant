import { useEffect, useState } from "react";
import { FiEdit, FiTrash } from "react-icons/fi";

import { DashSideBar } from "../../components/DashSideBar";

import img from "../../assets/orquidea.png";

import "./styles.css";

const plants = [
  { id: 1, name: "Rosa", hours: "12:42", img: img },
  { id: 2, name: "Massala", hours: "13:25", img: img },
  { id: 3, name: "Orquidea", hours: "14:00", img: img },
  { id: 4, name: "Manga", hours: "09:50", img: img },
];

export function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const username = localStorage.getItem("user:name");
    if (!username) {
      return;
    }
    setName(username);
  }, []);

  return (
    <div id="page-home">
      <DashSideBar />
      <div className="content-wrapper">
        <main className="home-main">
          <div className="content-home">
            <div className="info">
              <h1>Olá, {name}</h1>
              <p>4 plantas</p>
            </div>
            <div className="cards-plants">
              {plants.map((plant) => {
                return (
                  <div className="card" key={plant.id}>
                    <div className="plant-info">
                      <img src={plant.img} alt="planta" />
                      <div className="info-hors">
                        <h3>Regar as:</h3>
                        <h3>{plant.hours}</h3>
                      </div>
                    </div>

                    <div className="card-info">
                      <h2>{plant.name}</h2>
                      <div className="card-buttons">
                        <button className="card-btn">
                          <FiEdit size={20} />
                        </button>

                        <button className="card-btn">
                          <FiTrash size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
