import React from "react";
import "./mainContent.css";
import MainNews from "components/mainContent/mainNews/mainNews.js";

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
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b110ac5d66d74d8a94eb3c2e4192fdb6"
    )
      .then((response) => response.json())
      .then((news) => {
        console.log(news);
        this.setState({ articlesTechCr: createNews(news) });
      })
      .catch((err) => console.log(err));

    fetch(
      "http://newsapi.org/v2/everything?q=tesla&from=2021-01-06&sortBy=publishedAt&apiKey=b110ac5d66d74d8a94eb3c2e4192fdb6"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesTesla: createNews(news) });
      })
      .catch((err) => console.log(err));

    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b110ac5d66d74d8a94eb3c2e4192fdb6"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesUSA: createNews(news) });
      })
      .catch((err) => console.log(err));
    fetch(
      "http://newsapi.org/v2/everything?q=apple&from=2021-02-05&to=2021-02-05&sortBy=popularity&apiKey=b110ac5d66d74d8a94eb3c2e4192fdb6"
    )
      .then((response) => response.json())
      .then((news) => {
        this.setState({ articlesApple: createNews(news) });
      })
      .catch((err) => console.log(err));
    fetch(
      "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=b110ac5d66d74d8a94eb3c2e4192fdb6"
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
        <MainNews
          news={this.state.articlesTechCr}
          mainClass={"main-news-container"}
          cNames={["main-left-news", "main-center-news", "main-right-news"]}
        />
        <MainNews
          news={this.state.articlesTesla}
          mainClass={"main-news-container"}
          cNames={["main-left-news", "main-center-news", "main-right-news"]}
        />
        <MainNews
          news={this.state.articlesUSA}
          mainClass={"main-news-container"}
          cNames={["main-left-news", "main-center-news", "main-right-news"]}
        />
        <MainNews
          news={this.state.articlesApple}
          mainClass={"main-news-container"}
          cNames={["main-left-news", "main-center-news", "main-right-news"]}
        />
        <MainNews
          news={this.state.articlesWSJ}
          mainClass={"main-news-container"}
          cNames={["main-left-news", "main-center-news", "main-right-news"]}
        />
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
  }));
  return newNews;
}
