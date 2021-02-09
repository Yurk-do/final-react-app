import React from "react";
import NewsBlock from "components/mainContent/mainNews/newsBlock.js";
import ColumnNews from "components/mainContent/mainNews/columnNews.js";
import RowNews from "components/mainContent/mainNews/RowNews.js";
import SliderQuote from "components/sliderQuote/sliderQuote.js";

function Home(props) {
  return (
    <>
      <NewsBlock classContainer={"row"}>
        <ColumnNews
          news={props.news.articlesWSJ}
          classColumn={"side"}
          classItem={"small"}
          lotOfArticles={4}
        />
        <ColumnNews
          news={props.news.articlesUSA}
          classColumn={"center"}
          classItem={"big"}
          lotOfArticles={1}
        />
        <ColumnNews
          news={props.news.articlesTesla}
          classColumn={"side"}
          classItem={"small"}
          lotOfArticles={4}
        />
      </NewsBlock>
      <SliderQuote />
      <NewsBlock classContainer={"column"}>
        <RowNews news={props.news.articlesTechCr} lotOfArticles={4} />
        <RowNews news={props.news.articlesApple} lotOfArticles={5} />
      </NewsBlock>
    </>
  );
}

export default Home;
