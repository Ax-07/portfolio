import { PropTypes } from "prop-types";
import { useState, useRef } from "react";
import { useAddFigureMutation } from "../../api/figureApi";

export const FigureForm = ({ setAddFigureIsOpen }) => {
  const formRef = useRef(null);
  const [isDisplayPreviewPicture, setIsDisplayPreviewPicture] = useState(false);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [createFigure] = useAddFigureMutation();

  const onInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const fileSizeInMB = selectedFile.size / (1024 * 1024);
      console.log("fileSizeInMB:", fileSizeInMB);
      // if (fileSizeInMB > 4) {
      //   alert(
      //     "Le fichier est trop grand. Veuillez choisir un fichier de moins de 4 Mo."
      //   );
      //   return;
      // }
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewPicture(reader.result);
      };
      reader.readAsDataURL(selectedFile);
      setIsDisplayPreviewPicture(true);
    }
  };
  const resetForm = () => {
    formRef.current.reset();
    setPreviewPicture(null);
    setIsDisplayPreviewPicture(false);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", formRef.current.elements["category"].value);
    formData.append(
      "description",
      formRef.current.elements["description"].value
    );
    formData.append("image", formRef.current.elements["picture"].files[0]);
    console.log(formData);

    try {
      await createFigure(formData);
      console.log("formData:", formData);
      resetForm();
      setAddFigureIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <h2 id="formTitle">Add Figure</h2>
      <div>
        <label htmlFor="category">Title</label>
        <input type="text" id="category" name="category" required />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows={8} required />
      </div>
      <div className="add-picture">
        <img
          src={previewPicture}
          id="picture-preview"
          className={`add-picture__preview ${
            isDisplayPreviewPicture ? "add-picture__preview--active" : ""
          }`}
        />
        <div className="add-picture__wrapper">
          <span className="add-picture__icon fa-regular fa-image"></span>
          <label
            htmlFor="picture"
            className="add-picture__wrapper add-picture__btn"
          >
            + Ajouter une photo
          </label>
          <input
            type="file"
            name="picture"
            id="picture"
            className="add-picture__input"
            onChange={onInputChange}
          />
          <p className="add-picture__txt">jpg, png : 4mo max</p>
        </div>
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

FigureForm.propTypes = {
  setAddFigureIsOpen: PropTypes.func.isRequired,
};
