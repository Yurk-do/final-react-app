import React from "react";
import "components/sliderQuote/sliderButtons/sliderButton.css";
import * as GrIcons from "react-icons/gr";

function SliderButtonPrevious(porps) {
  return (
    <div className="slider-button-prev" onClick={porps.prevSlide}>
      <GrIcons.GrLinkPrevious className="prev" />
    </div>
  );
}

export default SliderButtonPrevious;
