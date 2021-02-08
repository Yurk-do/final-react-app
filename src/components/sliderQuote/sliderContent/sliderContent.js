import React from "react";
import "components/sliderQuote/sliderContent/sliderContent.css";
import sliderData from "components/sliderQuote/sliderData/sliderData.js";

function SliderContent(props) {
  return (
    <React.Fragment>
      {sliderData.map((slide) => (
        <div
          key={slide.id}
          className={slide.id === props.id ? "slides active" : "slides"}
        >
          {slide.id === props.id && (
            <p className="slide-comment-text">{slide.quote}</p>
          )}
          {slide.id === props.id && (
            <p className="slide-comments-autor">{slide.autor}</p>
          )}
        </div>
      ))}
    </React.Fragment>
  );
}

export default SliderContent;
