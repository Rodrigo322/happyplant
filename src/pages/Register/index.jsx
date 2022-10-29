import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Sidebar } from "../../components/Sidebar";

import "./styles.css";

export function Register() {
  const [plantName, setPlantName] = useState("");
  const [hours, setHours] = useState("");
  const [selectedImage, setSelectedImage] = useState();
  const [previewImages, setPreviewImages] = useState([]);

  function handleSelectImage(event) {
    if (!event.target.files) {
      return;
    }

    const selectedImage = Array.from(event.target.files);
    setSelectedImage(selectedImage);

    const selectedImagePreview = selectedImage.map((image) => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagePreview);
  }

  function handleSavePlant(e) {
    e.preventDefault();

    const data = {
      plantName,
      hours,
      previewImages,
    };

    const convertDataString = JSON.stringify(data);
    // const convertDataJson = JSON.parse(convertDataString);

    localStorage.setItem("plant", convertDataString);
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
              {previewImages.map((image) => {
                return <img key={image} src={image} />;
              })}
              <div className="images-container">
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input onChange={handleSelectImage} type="file" id="image[]" />
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
