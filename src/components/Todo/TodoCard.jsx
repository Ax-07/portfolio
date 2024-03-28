import { PropTypes } from "prop-types";
import { useState, useEffect } from "react";
import { getAllData, updateData, deleteData } from "../../api/todoAPI";
import { setFormatDate } from "../../utils/functions/setFormatDate";

export const TodoCard = ({ todo }) => {
  const [status, setStatus] = useState(todo.status);
  const createdAt = setFormatDate(new Date(todo.createdAt)); console.log(createdAt);
  
  const updateTodo = async () => {
    console.log(todo.id);
    // const updateStatus = todo.status === true ? false : true;
    const data = { ...todo, status: !status };
    try {
      await updateData(todo.id, data);
      await getAllData();
      setStatus(!status);
    } catch (error) {
      console.error(`Erreur lors de la mise à jour des données : ${error}`);
    }
  };
  console.info("todo status", todo.status);

  useEffect(() => {
    setStatus(todo.status);
  }, [todo.status]);

  const deleteTodo = async () => {
    window.confirm("Voulez vous vraiment supprimer cette tâche ?")
    try {
      await deleteData(todo.id);
      await getAllData();
      window.location.reload();
    } catch (error) {
      console.error(`Erreur lors de la suppression des données : ${error}`);
    }
  };

  return (
    <article className="todo__card">
      <h2>{todo.title}</h2>
      <div className="todo__imgs">
      {todo.images.map((image, index) => {
        console.log(image.desktop);
        return (
          <img
            key={index}
            srcSet={`${image.mobile} 500w, ${image.tablet} 800w, ${image.desktop} 1200w`}
            sizes="(max-width: 375px) 320px, (max-width: 768px) 768px, 1024px"
            src={image.mobile}
            alt={todo.title}
          />
        );
      })}
      </div>

      <p>{todo.description}</p>
      {/* <div>{todo.images}</div> */}
      <p>{status ? "Terminée" : "En cours"}</p>
      <label htmlFor={`todo-status-${todo.id}`}></label>
      <input
        type="checkbox"
        id={`todo-status-${todo.id}`}
        checked={status}
        onChange={updateTodo}
      />
      <span className="todo__btn-delete" onClick={deleteTodo}>❌</span>
      <p>{createdAt}</p>
    </article>
  );
};

TodoCard.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.array,
    status: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};
