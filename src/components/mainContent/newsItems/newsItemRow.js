import React from "react";
import "components/mainContent/newsItems/newsItemRow.css";

function NewsItemRow({ title, image, date }) {
  return (
    <div className="item-row">
      <img src={image} alt="article" className="item-row-image" />
      <h2 className="item-row-title">{title}</h2>
      <p className="item-row-date">publish: {date}</p>
      <br />
      <a href="#" className="link-news">
        Read more >>
      </a>
    </div>
  );
}
export default NewsItemRow;
