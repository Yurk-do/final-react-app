import React from "react";
import CategoryPage from "components/contentForCategory/categoryPage.js";

function Tesla({ news }) {
  return <CategoryPage news={news} title={"Tesla"} />;
}

export default Tesla;
