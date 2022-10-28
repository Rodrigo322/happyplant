import { FiEdit, FiTrash } from "react-icons/fi";

import { DashSideBar } from "../../components/DashSideBar";

import img from "../../assets/orquidea.png";

import "./styles.css";

export function Home() {
  return (
    <div id="page-home">
      <DashSideBar />
      <div className="content-wrapper">
        <main className="home-main">
          <div className="content-home">
            <div className="info">
              <h1>Olá, Michael</h1>
              <p>4 plantas</p>
            </div>
            <div className="cards-plants">
              <div className="card">
                <div className="plant-info">
                  <img src={img} alt="planta" />
                  <div className="info-hors">
                    <h3>Regar as:</h3>
                    <h3>12:40</h3>
                  </div>
                </div>

                <div className="card-info">
                  <h2>Orquidea</h2>
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

              <div className="card">
                <div className="plant-info">
                  <img src={img} alt="planta" />
                  <div className="info-hors">
                    <h3>Regar as:</h3>
                    <h3>12:40</h3>
                  </div>
                </div>

                <div className="card-info">
                  <h2>Orquidea</h2>
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

              <div className="card">
                <div className="plant-info">
                  <img src={img} alt="planta" />
                  <div className="info-hors">
                    <h3>Regar as:</h3>
                    <h3>12:40</h3>
                  </div>
                </div>

                <div className="card-info">
                  <h2>Orquidea</h2>
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

              <div className="card">
                <div className="plant-info">
                  <img src={img} alt="planta" />
                  <div className="info-hors">
                    <h3>Regar as:</h3>
                    <h3>12:40</h3>
                  </div>
                </div>

                <div className="card-info">
                  <h2>Orquidea</h2>
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
