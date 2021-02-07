import React from "react";
import "components/mainContent/mainNews/newsBlock.css";

function NewsBlock(props) {
  return (
    <div className={`news-container-${props.classContainer}`}>
      {props.children}
    </div>
  );
}

export default NewsBlock;
