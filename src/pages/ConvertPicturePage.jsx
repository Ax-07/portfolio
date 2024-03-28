import { useState, useRef } from "react";
import { AddPicture } from "../components/addPicture/AddPicture";
import { convertPicture } from "../api/convertPictureApi";

export const ConvertPicturePage = () => {
  const [images, setImages] = useState([]);
  const [reponse, setReponse] = useState([]);
  const downloadRefs = useRef([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // Ajoutez chaque fichier avec la même clé
    images.forEach((image) => {
      if (image) {
        formData.append("images", image);
      }
    });

    try {
      // Appeler la fonction convertPicture avec les données du formulaire
      const response = await convertPicture(formData);
      setReponse(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownloadAll = () => {
    downloadRefs.current.forEach(ref => ref.click());
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="formTitle">
        <h2 id="formTitle">Ajouter des images</h2>
        <div>
          <AddPicture images={images} setImages={setImages} />
        </div>
        <button type="submit">Convertir les images</button>
      </form>
      {reponse && <button onClick={handleDownloadAll}>Télécharger tout</button>}

      {reponse?.map((res, i) => {
        return (
          <div key={i} style={{display: "flex", flexDirection:"column"}}>
            {['desktop', 'tablet', 'mobile'].map((format, j) => {
              const image = res[format];
              const url = window.URL.createObjectURL(new Blob([new Uint8Array(image.buffer.data)], { type: 'image/webp' }));
              return (
                <a key={format} href={url} download={image.originalname} ref={el => downloadRefs.current[i * 3 + j] = el}>
                  {`Télécharger ${image.originalname}`}
                </a>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
