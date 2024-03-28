import { useState } from "react";
import { createData, getAllData } from "../../api/todoAPI";
import { AddPicture } from "../addPicture/AddPicture";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(false);

  const addTodo = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    // Ajoutez chaque fichier avec la même clé
    images.forEach((image) => {
      if (image) {
        formData.append("images", image);
      }
    });
    formData.append("status", status);

    console.log(formData);

    try {
      await createData(formData);
      setTitle("");
      setDescription("");
      setImages([]);
      setStatus(false);
      await getAllData();
    } catch (error) {
      console.error(`Erreur lors de la création des données : ${error}`);
    }
  };

  return (
    <>
      <form onSubmit={addTodo} aria-labelledby="formTitle">
        <h2 id="formTitle">Add Todo</h2>
        <div>
          <label>Title</label>
          <input
            placeholder="Title..."
            type="text"
            value={title}
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value)
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
          placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
          />
        </div>
        <div>
          <AddPicture images={images} setImages={setImages} />
        </div>
        <div>
          <label>Status</label>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => setStatus(e.target.checked)}
          />
        </div>
        <button type="submit">Sauvegarder</button>
      </form>
    </>
  );
};

export default AddTodoForm;
