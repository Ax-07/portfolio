import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { useDragNDrop } from "../../../utils/hooks/useDragNDrop";

export const AddPicture = ({ images, setImages }) => {
  console.log("images", images);
  const [isDisplayPreviewPicture, setIsDisplayPreviewPicture] = useState(false);
  const [previewPicture, setPreviewPicture] = useState(null);
  const [listPreviewPicture, setListPreviewPicture] = useState([]);
  const [imageToAdd, setImageToAdd] = useState({url:"", alt:""});
  const inputRef = useRef();
  const { dragging, dragOver, dragEnter, dragLeave, fileDrop } = useDragNDrop();

  const addImageToList = () => {
    if (previewPicture) {
      setImages([...images, {url: imageToAdd, alt: "description"}]);
      setListPreviewPicture([...listPreviewPicture, previewPicture]); //
      setPreviewPicture(null);
      setIsDisplayPreviewPicture(false);
    }
  };
  const deleteImageFromList = (index) => {
    setImages(images.filter((_, i) => i !== index));
    setListPreviewPicture(listPreviewPicture.filter((_, i) => i !== index));
  };

  const cancelImageToAdd = () => {
    setPreviewPicture(null);
    setIsDisplayPreviewPicture(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

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
      setImageToAdd(selectedFile);
    }
  };
  return (
    <div className="add-picture">
      {listPreviewPicture.length > 0 && (
        <div className="add-picture__gallery" id="add-picture__gallery">
          {listPreviewPicture?.map((image, index) => (
            <div key={index} onClick={() => deleteImageFromList(index)}>
              <img src={image} alt={`Preview ${index}`} />
              <span
                tabIndex="0"
                role="button"
                className="btn-close"
                onClick={() => deleteImageFromList(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    deleteImageFromList(index);
                  }
                }}
              >
                ❌
              </span>
            </div>
          ))}
        </div>
      )}
      <div
        className={`add-picture__preview ${
          isDisplayPreviewPicture ? "add-picture__preview--active" : ""
        }`}
      >
        <img src={previewPicture} id="picture-preview" />
        <span
          tabIndex="0"
          role="button"
          className="btn-close"
          onClick={() => cancelImageToAdd()}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              cancelImageToAdd();
            }
          }}
        >
          ❌
        </span>
      </div>

      <div className={dragging ? 'add-picture__wrapper dragging' : 'add-picture__wrapper'}
  onDragOver={dragOver}
  onDragEnter={dragEnter}
  onDragLeave={dragLeave}
  onDrop={(e) => {
    const files = fileDrop(e);
    if (files.length) {
      onInputChange({ target: { files } }); // `onInputChange({ target: { files } })` = `onInputChange(e.target.files[0])`
    }
  }}
>
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
          ref={inputRef}
        />
        <p className="add-picture__txt">jpg, png : 4mo max</p>
      </div>
      <button type="button" onClick={addImageToList}>
        Ajouter a la liste
      </button>
    </div>
  );
};

AddPicture.propTypes = {
  images: PropTypes.array,
  setImages: PropTypes.func,
  projetform: PropTypes.object,
};
