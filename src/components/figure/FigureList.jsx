import { useGetFiguresQuery } from "../../api/figureApi";
import { FigureCard } from "./FigureCard";

export const FigureList = () => {
    const { data: figures = [], refetch: refetchFigures} = useGetFiguresQuery();

    return (
        <section id="figures">
            {figures && figures.map((figure) => (
                <FigureCard key={figure.id} figure={figure} refetchFigures={refetchFigures} />
            ))}
        </section>
    );
};
