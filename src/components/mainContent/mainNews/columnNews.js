import React from "react";
import NewsItemColumn from "components/mainContent/newsItems/newsItemColumn.js";
import "components/mainContent/mainNews/columnNews.css";

function ColumnNews(props) {
  console.log(props.news);
  return (
    <div className={`news-column-${props.classColumn}`}>
      {props.news.map((article) => {
        if (article.id < props.lotOfArticles)
          return (
            <NewsItemColumn
              classItem={props.classItem}
              title={article.title}
              image={article.urlToImage}
              content={article.content}
              url={article.url}
            />
          );
      })}
    </div>
  );
}

export default ColumnNews;
