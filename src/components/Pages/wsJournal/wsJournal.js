import React from "react";
import CategoryPage from "components/contentForCategory/categoryPage.js";

function WSjournal({ news }) {
  return <CategoryPage news={news} title={"Wall Street Journal"} />;
}

export default WSjournal;
