import { useState, useEffect } from "react";
import { getAllData } from "../../api/todoAPI";
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllData();
            setTodos(data);
            setIsLoading(false);
        };
        fetchData();
    }, []);
    console.table(todos);



    return (
        <ul className="todo__list">
            {todos?.map((todo) => (
                <li key={todo.id} className="todo__item">
                    <TodoCard todo={todo} />
                </li>
            ))}
        </ul>
    );
};
