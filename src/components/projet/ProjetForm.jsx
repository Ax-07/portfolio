import { useRef, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AddPicture } from "../formField/addPicture/AddPicture";
import { useCreateProjetMutation, useGetProjetByIdQuery, useGetProjetQuery, useUpdateProjetMutation } from "../../api/projetApi";
import { AddFonctionnalite } from "../formField/addFonctionnalite/AddFonctionnalite";
import { CustomMultiSelect } from "../formField/customMultiSelect/CustomMultiSelect";
import { useCreateCategorieMutation, useGetCategorieQuery } from "../../api/categorieApi";
import { useCreateStackMutation, useGetStackQuery } from "../../api/stackApi";
import PropTypes from "prop-types";

export const ProjetForm = ({projet}) => {
  console.log("projet", projet);
  const navigate = useNavigate();
  const projetform = useRef(null);
  const [currentProjet, setCurrentProjet] = useState(projet);
  const [images, setImages] = useState([]);
  const [fonctionnalite, setFonctionnalite] = useState([]);

  const [createProjet] = useCreateProjetMutation();
  const [updateProjet] = useUpdateProjetMutation();
  const { refetch: refetchProjet } = useGetProjetQuery();

  const [createCategorie] = useCreateCategorieMutation();
  const {data: categories, refetch: refetchCategorie} = useGetCategorieQuery();
  const [selectedCategorie, setSelectedCategorie] = useState([]);

  const [ createStack ] = useCreateStackMutation();
  const { data: stacks, refetch: refetchStack } = useGetStackQuery();
  const [selectedStacks, setSelectedStacks] = useState([]);

  const resetForm = () => {
    projetform.current.reset();
    setImages([]);
    setSelectedStacks([]);
  };

  useEffect(() => {
    setCurrentProjet(projet);
    if (projet && projetform.current) {
      console.log("currentProjet", projetform.current.elements["add-picture__gallery"]);
      projetform.current.elements["title"].value = currentProjet.title; console.log("title", projetform.current.elements["title"].value);
      projetform.current.elements["description"].value = currentProjet.description; console.log("description", projetform.current.elements["description"].value); // on met [0] car cela represente le textarea, ()
      projetform.current.elements["githubRepository"].value = currentProjet.githubRepository; console.log("githubRepository", projetform.current.elements["githubRepository"].value);
      projetform.current.elements["website"].value = currentProjet.website; console.log("website", projetform.current.elements["website"].value);
      setImages(currentProjet.image);
      setSelectedCategorie(currentProjet.categorie);
      setSelectedStacks(currentProjet.stack);
      console.log("currentProjet", projetform.current);
    } else {
      resetForm();
      setCurrentProjet(null);
    }
  }, [projet]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", projetform.current.elements["title"].value);
    formData.append("description", projetform.current.elements["description"].value);
    formData.append("githubRepository", projetform.current.elements["githubRepository"].value);
    formData.append("website", projetform.current.elements["website"].value);
    images.forEach((image, index) => {
      if (image && image.url) {
        formData.append("images", image.url); // Ajoutez chaque fichier avec la même clé
        formData.append(`alt${index}`, image.alt); // Ajoutez la description alt pour chaque image
      }
    });
    selectedCategorie.forEach((categorie) => {
      formData.append("categorie", categorie);
    });
    fonctionnalite.forEach((fonctionnalite) => {
      formData.append("fonctionnalite", fonctionnalite);
    });
    selectedStacks.forEach((stack) => {
      formData.append("stack", stack);
    });

    // Envoyer formData à votre backend pour enregistrement dans MongoDB
    try {
      let response;
      if (currentProjet) {
        console.log("currentProjet.id", currentProjet.id);
        console.log("formData", formData);
        response = await updateProjet({id: currentProjet.id, body:formData});
      } else {
        console.log("formData", formData);
        response = await createProjet(formData);
        console.log("response", response);
      }
      refetchProjet();
      refetchCategorie();
      refetchStack();
      resetForm();
      setCurrentProjet(null);
      navigate("/admin");
      console.log("response", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <form className="projet-form" ref={projetform} onSubmit={handleSubmit}>
      <AddPicture images={images} setImages={setImages} projetform={projetform}/>
      <AddTitle />
      <CustomMultiSelect title={'Catégorie'} options={categories} selectedOption={selectedCategorie} setSelectedOption={setSelectedCategorie} createOption={createCategorie}/>
      <AddDescription />
      <AddFonctionnalite fonctionnalite={fonctionnalite} setFonctionnalite={setFonctionnalite}/>
      <AddGithubLink />
      <AddWebSiteLink />
      <CustomMultiSelect title={'Stack'} options={stacks} selectedOption={selectedStacks} setSelectedOption={setSelectedStacks} createOption={createStack}/>
      <button type="submit">Ajouter un projet</button>
    </form>
  );
};

const AddTitle = () => {
  return (
    <div className="title">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
    </div>
  );
}

const AddDescription = () => {
  return (
    <div className="description">
      <label htmlFor="description">Description</label>
      <textarea id="description" name="description" rows={8}/>
    </div>
  );
}

const AddGithubLink = () => {
  return (
    <div id="lien-github">
      <label htmlFor="githubRepository">GitHub</label>
      <input type="text" id="githubRepository" name="githubRepository" />
    </div>
  );
}

const AddWebSiteLink = () => {
  return (
    <div id="lien-website">
      <label htmlFor="website">Website</label>
      <input type="text" id="website" name="website" />
    </div>
  );
}

ProjetForm.propTypes = {
  projet: PropTypes.array,
};