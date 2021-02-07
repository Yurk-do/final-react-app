import React from "react";
import "components/mainContent/newsItems/newsItemColumnSmall.css";
import "components/mainContent/newsItems/newsItemColumnBig.css";

function NewsItemColumn({ classItem, title, image, content }) {
  return (
    <div className={`item-column-${classItem}-article`}>
      <img
        src={image}
        alt="article"
        className={`item-column-${classItem}-img`}
      />
      <p className={`item-column-${classItem}-title`}>{title}</p>
      <p className={`item-column-${classItem}-content`}>{content}</p>
    </div>
  );
}
export default NewsItemColumn;
