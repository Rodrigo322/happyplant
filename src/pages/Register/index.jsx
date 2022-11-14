import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";

import "./styles.css";

export function Register() {
  const [plantName, setPlantName] = useState("");
  const [hours, setHours] = useState("");
  const [previewImages, setPreviewImages] = useState([]);
  const [imageBase64Code, setImageBase64Code] = useState("");

  const navigate = useNavigate();

  function handleSelectImage(event) {
    if (!event.target.files) {
      return;
    }

    const files = event.target.files;
    const file = files[0];

    getbase64(file);

    const selectedImagePreview = URL.createObjectURL(file);

    setPreviewImages(selectedImagePreview);
  }

  function getbase64(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImageBase64Code(reader.result);
      console.log(reader.result)
    };
  }

  async function handleSavePlant(e) {
    e.preventDefault();

    const userId = localStorage.getItem("user:id")

    console.log(userId)

    const plant = {
      name: plantName,
      img_url: imageBase64Code,
      irrigate_on_time: hours,
      user_id: userId,
    };

    const response = await api.post("/plants", plant);
    if(response.status === 201) {
      alert('Plant cadastrada com sucesso!')
      navigate("/home")
    }
  }

  return (
    <div id="page-create-plant">
      <Sidebar />
      <main>
        <form onSubmit={handleSavePlant} className="create-plant-form">
          <fieldset>
            <legend>Dados</legend>
            <Input
              label="Nome da planta"
              type="text"
              placeholder="Digite aqui o nome da planta..."
              style={{ width: "100%" }}
              onChange={(e) => setPlantName(e.target.value)}
            />
            <Input
              label="Horário para irrigar a planta"
              placeholder="Digite aqui o horário..."
              style={{ width: "100%" }}
              onChange={(e) => setHours(e.target.value)}
            />
            <div className="input-image">
              <label htmlFor="images">Foto</label>
              {previewImages && <img src={previewImages} />}
              <div className="images-container">
                <label htmlFor="image" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input onChange={handleSelectImage} type="file" id="image" />
            </div>
          </fieldset>
          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
