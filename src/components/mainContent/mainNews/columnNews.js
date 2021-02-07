import React from "react";
import NewsItemColumn from "components/mainContent/newsItems/newsItemColumn.js";
import "components/mainContent/mainNews/columnNews.css";

function ColumnNews(props) {
  return (
    <div className={`news-column-${props.classColumn}`}>
      {props.children ? props.children : null}
      {props.news.map((article) => {
        if (article.id < props.lotOfArticles)
          return (
            <NewsItemColumn
              classItem={props.classItem}
              title={article.title}
              image={article.urlToImage}
              content={article.content}
            />
          );
      })}
    </div>
  );
}

export default ColumnNews;
