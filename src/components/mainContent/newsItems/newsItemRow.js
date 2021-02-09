import React from "react";
import "components/mainContent/newsItems/newsItemRow.css";

function NewsItemRow({ title, image, date, url }) {
  return (
    <div className="item-row">
      <img src={image} alt="article" className="item-row-image" />
      <h3 className="item-row-title">
        <a href={url}>{title}</a>
      </h3>
      <p className="item-row-date">publish: {date}</p>
      <br />
      <a href={url} className="link-news">
        Read more >>
      </a>
    </div>
  );
}
export default NewsItemRow;
