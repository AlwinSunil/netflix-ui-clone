import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import Content from "./Content";
import SlideButton from "./SlideButton";
import SliderWrapper from "./SliderWrapper";
import useSliding from "./useSliding";
import useSizeElement from "./useSizeElement";
import "./Slider.scss";

const Slider = ({ props, children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const { handlePrev, handleNext, slideProps, containerRef, hasNext, hasPrev } =
    useSliding(width, React.Children.count(children));

  const handleSelect = (movie) => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className={cx("slider", { "slider--open": currentSlide != null })}>
          <h2 className="slider__title">{children[0].props.type}</h2>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
          {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
          {hasNext && <SlideButton onClick={handleNext} type="next" />}
        </div>
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
