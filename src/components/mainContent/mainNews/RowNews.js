import React from "react";
import NewsItemRow from "components/mainContent/newsItems/newsItemRow.js";
import "components/mainContent/mainNews/rowNews.css";
import { Link } from "react-router-dom";

function RowNews(props) {
  return (
    <>
      <Link to={props.path} className="link-row-block-article-title">
        <h3 className="row-block-article-title">{props.titleBlock}</h3>
      </Link>
      <div className="row-block-news">
        {props.news.map((article) => {
          if (article.id < props.lotOfArticles)
            return (
              <NewsItemRow
                key={article.id}
                title={article.title}
                image={article.urlToImage}
                date={article.date}
                url={article.url}
              />
            );
        })}
      </div>
    </>
  );
}

export default RowNews;
