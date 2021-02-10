import React from "react";
import "components/commentsHandler/commentList/commentList.css";
import EmptyList from "components/commentsHandler/emptyList/emptyList.js";
import Comment from "components/commentsHandler/comment/comment.js";

function CommentList({ allComments }) {
  let newComments = allComments.concat([]);
  return (
    <div className="comment-list-container">
      <ul id="comment-list">
        {newComments.length > 0 ? (
          newComments.reverse().map((comment) => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))
        ) : (
          <EmptyList />
        )}
      </ul>
    </div>
  );
}
export default CommentList;
