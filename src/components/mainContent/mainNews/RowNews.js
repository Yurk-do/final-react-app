import React from "react";
import NewsItemRow from "components/mainContent/newsItems/newsItemRow.js";
import "components/mainContent/mainNews/rowNews.css";

function RowNews(props) {
  return (
    <div className="row-block-news">
      {props.news.map((article) => {
        if (article.id < props.lotOfArticles)
          return (
            <NewsItemRow
              title={article.title}
              image={article.urlToImage}
              date={article.date}
            />
          );
      })}
    </div>
  );
}

export default RowNews;
