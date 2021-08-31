import React from "react";
import "App.css";
import HeaderBlock from "components/header/headerBlock/headerBlock.js";
import Navbar from "components/header/navbar/navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "components/Pages/home/home.js";
import Techcrunch from "components/Pages/techcrunch/techcrunch.js";
import Tesla from "components/Pages/tesla/tesla.js";
import USANews from "components/Pages/usaNews/usaNews.js";
import Apple from "components/Pages/apple/apple.js";
import WSjournal from "components/Pages/wsJournal/wsJournal.js";
import Comments from "components/Pages/comments/comments.js";
import Footer from "components/footer/footer.js";
import dateISOFormat from "components/helpers/date/dateISOFormat.js";
import replaceContent from "components/helpers/content/replaceContent.js";
import LoginPage from "components/Pages/login/loginPage";

function createNews(news) {
  const newNews = news.articles.map((article, index) => ({
    author: article.autor,
    title: article.title,
    description: article.description,
    id: index,
    urlToImage: article.urlToImage,
    content: article.content ? replaceContent(article.content) : null,
    category: article.source.name,
    date: dateISOFormat(article.publishedAt),
    url: article.url,
  }));
  return newNews;
}

function newsUnd() {
  const newsUnd = {
    author: "Empty",
    title: "Empty",
    description: "Empty",
    urlToImage: null,
    content: "Sorry, server is not available now",
    category: "Empty",
    date: "Empty",
    url: null,
  };
  const array = new Array(9).fill(newsUnd, 0, 9);
  return array.map((news, index) => (news = { ...news, id: index }));
}
class App extends React.Component {
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
    Promise.all([
      fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e83b2d2cf17f49e9bebf9536d5dca70b"
      ),
      fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-03-21&sortBy=publishedAt&apiKey=e83b2d2cf17f49e9bebf9536d5dca70b"
      ),
      fetch(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=e83b2d2cf17f49e9bebf9536d5dca70b"
      ),
      fetch(
        "https://newsapi.org/v2/everything?q=apple&from=2021-04-20&to=2021-04-20&sortBy=popularity&apiKey=e83b2d2cf17f49e9bebf9536d5dca70b"
      ),
      fetch(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=e83b2d2cf17f49e9bebf9536d5dca70b"
      ),
    ])
      .then(([res1, res2, res3, res4, res5]) =>
        Promise.all([
          res1.json(),
          res2.json(),
          res3.json(),
          res4.json(),
          res5.json(),
        ])
      )
      .then(([data1, data2, data3, data4, data5]) => {
        console.log(data1);
        console.log(data2);
        console.log(data3);
        console.log(data4);
        console.log(data5);

        this.setState({
          articlesTechCr:
            data1.status !== "error" ? createNews(data1) : newsUnd(),
          articlesTesla:
            data2.status !== "error" ? createNews(data2) : newsUnd(),
          articlesUSA: data3.status !== "error" ? createNews(data3) : newsUnd(),
          articlesApple:
            data4.status !== "error" ? createNews(data4) : newsUnd(),
          articlesWSJ: data5.status !== "error" ? createNews(data5) : newsUnd(),
        });
      });
  }

  render() {
    return (
      <>
        <Router>
          <HeaderBlock />
          <Navbar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => this.state && <Home news={this.state} />}
            />
            <Route
              path="/techcrunch"
              render={() => <Techcrunch news={this.state.articlesTechCr} />}
            />
            <Route
              path="/tesla"
              render={() => <Tesla news={this.state.articlesTesla} />}
            />
            <Route
              path="/usaNews"
              render={() => <USANews news={this.state.articlesUSA} />}
            />
            <Route
              path="/apple"
              render={() => <Apple news={this.state.articlesApple} />}
            />
            <Route
              path="/wsJournal"
              render={() => <WSjournal news={this.state.articlesWSJ} />}
            />
            <Route path="/comments" component={Comments} />
          </Switch>
          <Route path="/login" component={LoginPage} />
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
