import React from "react";
import NewsBlock from "components/mainContent/mainNews/newsBlock.js";
import ColumnNews from "components/mainContent/mainNews/columnNews.js";
import RowNews from "components/mainContent/mainNews/RowNews.js";
import dateISOFormat from "components/helpers/date/dateISOFormat.js";
import NewsDay from "components/mainContent/mainNews/newsDay.js";
import replaceContent from "components/helpers/content/replaceContent.js";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articlesTechCr: [],
      articlesTesla: [],
      articlesUSA: [],
      articlesApple: [],
      articlesWSJ: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => response.json())
      .then((news) => {
        console.log(news);
        this.setState({ articlesTechCr: createNews(news) });
      })
      .catch((err) => console.log(err));

    fetch(
      "http://newsapi.org/v2/everything?q=tesla&from=2021-01-06&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesTesla: createNews(news) });
      })
      .catch((err) => console.log(err));

    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesUSA: createNews(news) });
      })
      .catch((err) => console.log(err));
    fetch(
      "http://newsapi.org/v2/everything?q=apple&from=2021-02-05&to=2021-02-05&sortBy=popularity&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesApple: createNews(news) });
      })
      .catch((err) => console.log(err));
    fetch(
      "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesWSJ: createNews(news) });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <NewsBlock classContainer={"row"}>
          <ColumnNews
            news={this.state.articlesTechCr}
            classColumn={"side"}
            classItem={"small"}
            lotOfArticles={4}
          />
          <ColumnNews
            news={this.state.articlesApple}
            classColumn={"center"}
            classItem={"big"}
            lotOfArticles={1}
          >
            {/* <NewsDay /> */}
          </ColumnNews>
          <ColumnNews
            news={this.state.articlesApple}
            classColumn={"side"}
            classItem={"small"}
            lotOfArticles={4}
          />
        </NewsBlock>
        <NewsBlock classContainer={"column"}>
          <RowNews news={this.state.articlesApple} lotOfArticles={5} />
          <RowNews news={this.state.articlesApple} lotOfArticles={5} />
        </NewsBlock>
      </>
    );
  }
}

export default MainContent;

function createNews(news) {
  const newNews = news.articles.map((article, index) => ({
    autor: article.autor,
    title: article.title,
    description: article.description,
    id: index,
    urlToImage: article.urlToImage,
    content: replaceContent(article.content),
    category: article.source.name,
    date: dateISOFormat(article.publishedAt),
  }));
  return newNews;
}
