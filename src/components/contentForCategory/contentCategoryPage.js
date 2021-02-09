import React from "react";
import "components/contentForCategory/contentCategoryPage.css";

function ContentCategoryPage({ news }) {
  return (
    <div className="category-news-item">
      <h1 className="category-news-item-title">{news.title}</h1>
      <img
        src={news.urlToImage}
        alt="article"
        className="category-news-item-image"
      />
      <p className="category-news-item-desc">{news.description}</p>
      <span className="category-news-item-author">{news.author}</span> <br />
      <span className="category-news-item-date">{news.date}</span>
      <span className="category-news-item-category">{news.category}</span>
    </div>
  );
}

export default ContentCategoryPage;
