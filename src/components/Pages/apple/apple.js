import React from "react";
import CategoryPage from "components/contentForCategory/categoryPage.js";

function Apple({ news }) {
  return <CategoryPage news={news} title={"Apple"} />;
}

export default Apple;
