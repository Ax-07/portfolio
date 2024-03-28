import { useState } from "react";
import AddTodoForm from "../components/Todo/AddTodoForm";
import { TodoList } from "../components/Todo/TodoList";

export const TodoPage = () => {
  const [addTodoIsOpen, setAddTodoIsOpen] = useState(false);
  return (
    <>
      <h1>Todo Page</h1>
      <button onClick={() => setAddTodoIsOpen(!addTodoIsOpen)}>
        {addTodoIsOpen ? "Afficher Todo" : "Ajouter Todo"}
      </button>
      {addTodoIsOpen ? <AddTodoForm /> : <TodoList />}
    </>
  );
};
