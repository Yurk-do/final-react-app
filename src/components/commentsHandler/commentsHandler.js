import React, { useState, useEffect } from "react";
import CommentForm from "components/commentsHandler/commentForm/commentForm.js";
import CommentList from "components/commentsHandler/commentList/commentList.js";

const CommentsHandler = () => {
  const [comments, setComments] = useState("");
  const url = "http://localhost:5000/comments";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((comments) => setComments(comments));
  }, []);

  const handleCreateComment = (comment) => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment),
    });

    const newComment = [...comments, comment];
    setComments(newComment);
  };

  return (
    <div id="comments-container">
      <CommentForm onCreateComment={handleCreateComment} />
      <CommentList allComments={comments} />
    </div>
  );
};

export default CommentsHandler;
