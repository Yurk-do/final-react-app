import React from "react";
import "components/mainContent/newsItems/newsItemMedium.css";

function NewsItemMedium({ title, image, content }) {
  return (
    <>
      <img src={image} alt="article" className="item-medium-img" />
      <p className="item-medium-title">{title}</p>
      <p className="item-medium-content">{content}</p>
    </>
  );
}
export default NewsItemMedium;
