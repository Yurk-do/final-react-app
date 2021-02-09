import React from "react";
import CategoryPage from "components/contentForCategory/categoryPage.js";

function USANews({ news }) {
  return <CategoryPage news={news} title={"USA News"} />;
}

export default USANews;
