import React from "react";
import ContentCategoryPage from "components/contentForCategory/contentCategoryPage.js";
import "components/contentForCategory/categoryPage.css";

function CategoryPage({ news, title }) {
  return (
    <div>
      <h2 className="category-news-title">{title}</h2>
      <div className="category-news-container">
        {news.map((article) => {
          return <ContentCategoryPage news={article} key={article.id} />;
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
