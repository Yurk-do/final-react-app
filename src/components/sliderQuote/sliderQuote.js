import React, { useState } from "react";
import "components/sliderQuote/sliderQuote.css";
import sliderData from "components/sliderQuote/sliderData/sliderData.js";
import SliderButtonNext from "components/sliderQuote/sliderButtons/sliderButtonNext.js";
import SliderButtonPrevious from "components/sliderQuote/sliderButtons/sliderButtonPrev.js";
import SliderContent from "components/sliderQuote/sliderContent/sliderContent.js";

function SliderComments() {
  const [stateId, setStateId] = useState(1);
  const length = sliderData.length;

  return (
    <div className="slider-quote">
      <h2 className="slider-title-quote">Quote of the Week</h2>
      <div className="slider-container">
        <SliderButtonPrevious
          prevSlide={() => setStateId(stateId === 1 ? length : stateId - 1)}
        />
        <SliderContent id={stateId} />
        <SliderButtonNext
          nextSlide={() => setStateId(stateId === length ? 1 : stateId + 1)}
        />
      </div>
    </div>
  );
}

export default SliderComments;
