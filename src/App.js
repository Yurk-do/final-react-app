import React from "react";
import "./App.css";

class App extends React.Component {
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
  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.articles.map((article, index) => {
          return (
            <React.Fragment>
              <li key={article[index]}>{article.title}</li>
              <img src={article.urlToImage} alt="article image" />
            </React.Fragment>
          );
        })}
      </ul>
    );
  }
}

export default App;
