import React from "react";
import "components/sliderQuote/sliderButtons/sliderButton.css";
import * as GrIcons from "react-icons/gr";

function SliderButtonNext(porps) {
  return (
    <div className="slider-button-next" onClick={porps.nextSlide}>
      <GrIcons.GrLinkNext className="next" />
    </div>
  );
}

export default SliderButtonNext;
