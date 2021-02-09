import React from "react";
import CategoryPage from "components/contentForCategory/categoryPage.js";

function Techcrunch({ news }) {
  return <CategoryPage news={news} title={"Techcrunch"} />;
}
export default Techcrunch;
