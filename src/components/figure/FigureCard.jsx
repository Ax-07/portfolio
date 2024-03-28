import { PropTypes } from "prop-types";
import { useDeleteFigureMutation } from "../../api/figureApi";

export const FigureCard = ({ figure, refetchFigures }) => {
  const [deleteFigure] = useDeleteFigureMutation();
  const onDelete = async () => {
    try {
      await deleteFigure(figure.id);
      refetchFigures();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <figure>
      <img
        srcSet={`${figure.image[0].mobile} 500w, ${figure.image[0].tablet} 800w, ${figure.image[0].desktop} 1200w`}
        sizes="(max-width: 500px) 500px, (max-width: 800px) 800px, 1200px"
        src={figure.image.mobile}
        alt={figure.title}
      />
      <figcaption>
        <p>{figure.description}</p>
      </figcaption>
      <span className="btn-delete" onClick={onDelete}>❌</span>
    </figure>
  );
};

FigureCard.propTypes = {
  figure: PropTypes.object.isRequired,
  refetchFigures: PropTypes.func.isRequired,
};
