import React from "react";
import NewsBlock from "components/mainContent/mainNews/newsBlock.js";
import ColumnNews from "components/mainContent/mainNews/columnNews.js";
import RowNews from "components/mainContent/mainNews/RowNews.js";
import SliderQuote from "components/sliderQuote/sliderQuote.js";
import Login from "components/login/login.js";

function Home(props) {
  return (
    <>
      <NewsBlock classContainer={"row"}>
        <ColumnNews
          titleBlock="Wall Street Journal"
          path="/wsJournal"
          news={props.news.articlesWSJ}
          classColumn={"side"}
          classItem={"small"}
          lotOfArticles={4}
        />
        <ColumnNews
          titleBlock="USA News"
          path="/usaNews"
          news={props.news.articlesUSA}
          classColumn={"center"}
          classItem={"big"}
          lotOfArticles={1}
        />
        <ColumnNews
          titleBlock="Tesla News"
          path="/tesla"
          news={props.news.articlesTesla}
          classColumn={"side"}
          classItem={"small"}
          lotOfArticles={4}
        />
      </NewsBlock>

      <NewsBlock classContainer={"column"}>
        <RowNews
          titleBlock="Techcrunch"
          path="/techcrunch"
          news={props.news.articlesTechCr}
          lotOfArticles={5}
        />
        <RowNews
          titleBlock="Apple News"
          path="/apple"
          news={props.news.articlesApple}
          lotOfArticles={5}
        />
      </NewsBlock>
      <SliderQuote />
    </>
  );
}

export default Home;
