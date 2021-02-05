import React from "react";
import "./mainContent.css";

class MainContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
    )
      .then((response) => {
        return response.json();
      })
      .then((news) => {
        this.setState({ articles: news.articles });
      });
  }

  renderArticles(news, cNames) {
    return news.map((article) => {
      if (article.id <= cNames.lenght)
        return (
          <React.Fragment>
            <div className={cNames[article.id]} key={article.id}>
              <p>{article.title}</p>
              <img src={article.urlToImage} alt="article" />
            </div>
          </React.Fragment>
        );
    });
  }

  render() {
    const news = this.state.articles.map((article, index) => ({
      autor: article.autor,
      title: article.title,
      description: article.description,
      id: index,
      urlToImage: article.urlToImage,
    }));
    console.log(news);

    return (
      <div className="main-container">
        {this.renderArticles(news, [
          "main-left-news",
          "main-center-news",
          "main-right-news",
        ])}
      </div>
    );
  }
}
export default MainContent;
