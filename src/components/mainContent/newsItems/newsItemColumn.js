import React from "react";
import "components/mainContent/newsItems/newsItemColumn.css";

function NewsItemColumn({ classItem, title, image, content, url }) {
  return (
    <div className={`item-column-${classItem}-article`}>
      <img
        src={image}
        alt="article"
        className={`item-column-${classItem}-img`}
      />
      <h3 className={`item-column-${classItem}-title`}>
        <a href={url}>{title}</a>
      </h3>
      <p className={`item-column-${classItem}-content`}>{content}</p>
    </div>
  );
}
export default NewsItemColumn;
