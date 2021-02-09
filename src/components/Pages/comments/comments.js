import React from "react";
import CommentsHandler from "components/commentsHandler/commentsHandler";
// import { comments } from "components/commentsHandler/data.js";
import "components/contentForCategory/categoryPage.css";

function Comments() {
  return (
    <>
      <h2 className="category-news-title">Add Your Comment</h2>
      <CommentsHandler />
    </>
  );
}
export default Comments;
