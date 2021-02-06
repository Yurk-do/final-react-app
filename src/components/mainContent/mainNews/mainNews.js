import React from "react";
import NewsItem from "components/mainContent/newsItems/newsItem.js";

function MainNews(props) {
  return (
    <div className={props.mainClass}>
      {props.news.map((article) => {
        if (article.id < props.cNames.length)
          return (
            <React.Fragment>
              <div className={props.cNames[article.id]} key={article.id}>
                <NewsItem
                  category={"small"}
                  title={article.title}
                  image={article.urlToImage}
                  content={article.content}
                />
                <NewsItem
                  category={"medium"}
                  title={article.title}
                  image={article.urlToImage}
                  content={article.content}
                />
                <NewsItem
                  category={"big"}
                  title={article.title}
                  image={article.urlToImage}
                  content={article.content}
                />
              </div>
            </React.Fragment>
          );
      })}
    </div>
  );
}

export default MainNews;
