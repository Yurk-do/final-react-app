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
        "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0ba2dfc2493b41ff91cd4e24e288936b"
      ),
      fetch(
        "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=0ba2dfc2493b41ff91cd4e24e288936b"
      ),
      fetch(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0ba2dfc2493b41ff91cd4e24e288936b"
      ),
      fetch(
        "http://newsapi.org/v2/everything?q=apple&from=2021-02-08&to=2021-02-08&sortBy=popularity&apiKey=0ba2dfc2493b41ff91cd4e24e288936b"
      ),
      fetch(
        "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=0ba2dfc2493b41ff91cd4e24e288936b"
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
      .then(([data1, data2, data3, data4, data5]) =>
        this.setState({
          articlesTechCr: createNews(data1),
          articlesTesla: createNews(data2),
          articlesUSA: createNews(data3),
          articlesApple: createNews(data4),
          articlesWSJ: createNews(data5),
        })
      );
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
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
