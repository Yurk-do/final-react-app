import React from "react";
import "components/mainContent/newsItems/newsItemSmall.css";

function NewsItemSmall({ category, title, image, content }) {
  return (
    <>
      <img src={image} alt="article" className={`item-${category}-img`} />
      <p className={`item-${category}-title`}>{title}</p>
      <p className={`item-${category}-content`}>{content}</p>
    </>
  );
}
export default NewsItemSmall;
