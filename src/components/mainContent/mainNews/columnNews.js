import React from "react";
import NewsItemColumn from "components/mainContent/newsItems/newsItemColumn.js";
import "components/mainContent/mainNews/columnNews.css";
import { Link } from "react-router-dom";

function ColumnNews(props) {
  console.log(props.news);
  return (
    <div className={`news-column-${props.classColumn}`}>
      <Link to={props.path}>
        <h3 className="column-block-article-title">{props.titleBlock}</h3>
      </Link>
      {props.news.map((article) => {
        if (article.id < props.lotOfArticles)
          return (
            <NewsItemColumn
              key={article.id}
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
