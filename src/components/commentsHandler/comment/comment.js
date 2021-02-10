import React from "react";
import "components/commentsHandler/comment/comment.css";
import { dateCommentFormat } from "components/helpers/date/dateCommentFormat.js";

const Comment = ({ comment }) => (
  <div key={`div-${comment.id}`} className="item">
    <p className="comment-item-text">{comment.text}</p>
    <p className="comment-item-userName">
      {comment.userName ? comment.userName : "Anonymus"}
    </p>
    <p className="comment-item-date">{dateCommentFormat(comment.date)}</p>
  </div>
);
export default Comment;
