import PropTypes from "prop-types";
import { SliderArrow, SliderDots } from "../slider/Slider";

export const LightBox = ({ images, activeIndex, next, previous, close }) => {
  console.log("image", images);

  return (
    <div className="lightbox">
      <div className="lightbox__overlay" onClick={close}></div>
      <div className="lightbox__content">
        <span className="lightbox__close" onClick={close}>
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </span>
        <img
          className="lightbox__image"
          src={images[activeIndex].image.desktop}
          alt=""
        />
        {images && <SliderDots datas={images} activeIndex={activeIndex} />}
        <div className="lightbox__nav">
          <span className="lightbox__nav--prev" onClick={previous}>
            <SliderArrow direction="left" onClick={previous} />
          </span>
          <span className="lightbox__nav--next" onClick={next}>
            <SliderArrow direction="right" onClick={next} />
          </span>
        </div>
      </div>
    </div>
  );
};

LightBox.propTypes = {
  images: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
