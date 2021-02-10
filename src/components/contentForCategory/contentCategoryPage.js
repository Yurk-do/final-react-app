import React from "react";
import "components/contentForCategory/contentCategoryPage.css";
import sliceContent from "components/helpers/content/sliceContent.js";

function ContentCategoryPage({ news }) {
  return (
    <div className="category-news-item">
      <h3 className="category-news-item-title">
        <a href={news.url}>{sliceContent(news.title, 100)}</a>
      </h3>
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
