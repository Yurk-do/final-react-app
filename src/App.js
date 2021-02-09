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
import Contacts from "components/Pages/contacts/contacts.js";
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
        "http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=659d2838fd104d568efdd7e5bed7a04f"
      ),
      fetch(
        "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
      ),
      fetch(
        "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
      ),
      fetch(
        "http://newsapi.org/v2/everything?q=apple&from=2021-02-08&to=2021-02-08&sortBy=popularity&apiKey=659d2838fd104d568efdd7e5bed7a04f"
      ),
      fetch(
        "http://newsapi.org/v2/everything?domains=wsj.com&apiKey=659d2838fd104d568efdd7e5bed7a04f"
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

  // componentDidMount() {
  //   fetch(
  //     "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       console.log(news);
  //       this.setState({ articlesTechCr: createNews(news) });
  //     })
  //     .catch((err) => console.log(err));

  //   fetch(
  //     "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       console.log(news);
  //       this.setState({ articlesTesla: createNews(news) });
  //     })
  //     .catch((err) => console.log(err));

  //   fetch(
  //     "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       console.log(news);
  //       this.setState({ articlesUSA: createNews(news) });
  //     })
  //     .catch((err) => console.log(err));
  //   fetch(
  //     "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       console.log(news);
  //       this.setState({ articlesApple: createNews(news) });
  //     })
  //     .catch((err) => console.log(err));
  //   fetch(
  //     "http://newsapi.org/v2/everything?q=tesla&from=2021-01-09&sortBy=publishedAt&apiKey=fa6827649aa144fcb9fc384f5c7973d2"
  //   )
  //     .then((response) => response.json())
  //     .then((news) => {
  //       console.log(news);
  //       this.setState({ articlesWSJ: createNews(news) });
  //     })
  //     .catch((err) => console.log(err));
  // }

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
            <Route path="/contacts" component={Contacts} />
          </Switch>
        </Router>
        <Footer />
      </>
    );
  }
}

export default App;
