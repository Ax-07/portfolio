import { useState } from "react";
import { FigureForm } from "../components/figure/FigureForm";
import { FigureList } from "../components/figure/FigureList";

export const FigurePage = () => {
    const [addFigureIsOpen, setAddFigureIsOpen] = useState(false);
    return (
        <>
            <h1>Figure Page</h1>
            <button onClick={() => setAddFigureIsOpen(!addFigureIsOpen)}>
                {addFigureIsOpen ? "Afficher Figures" : "Ajouter Figure" }
            </button>
            {addFigureIsOpen ? <FigureForm setAddFigureIsOpen={setAddFigureIsOpen}/> : <FigureList />}   
        </>
    );
};
